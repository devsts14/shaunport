const User=require("../models/User")
const Work=require("../models/Work")
const cloudinary = require('cloudinary')
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.createWork=async (req,res)=>{
  const {type,name,image,link}=req.body;

  const user = await User.findOne({ email: req.user.email }).exec();
  const newWork=await new Work({
    user,type,name,image,link
  }).save();  
  res.json(newWork)
}


exports.getWork=async (req,res)=>{
  
  const works= await Work.find({}).exec()
  console.log(works)
  res.json(works)
}
exports.mess=async (req,res)=>{
  const {name,email,subject,message}=req.body
    const msg = {
      to: 'shaunvividsz@gmail.com',
      from: 'devsts14@gmail.com',
      subject: subject,
      text: message,
      html: `<p>${message}</p>sent by <strong>${name}</strong> ,<a href="mailto:${email}">${email}</a> `,
    }

    sgMail.send(msg)
    .then(() => {
      res.send("Success!");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("An error occured");
    });
}



cloudinary.config({
cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
api_key:process.env.CLOUDINARY_API_KEY,
api_secret:process.env.CLOUDINARY_API_SECRET
})

exports.upload=async (req,res)=>{
let result= await cloudinary.uploader.upload(req.body.image,{
  public_id:`${Date.now()}`,
  resource_type:'auto',
  eager:[{width: 720, height: 720, crop: "pad" }]
});
res.json({
  public_id:result.public_id,
  url:result.secure_url
})
}

exports.remove= (req,res)=>{
let image_id=req.body.public_id;
cloudinary.uploader.destroy(image_id,(err,result)=>{
  if(err) return res.json({success:false,err});
  res.send('ok')
});
}
