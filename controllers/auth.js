const User=require("../models/User")

exports.createOrUpdateUser=async (req,res)=>{
  const {name,email}=req.user;
  const user= await User.findOneAndUpdate({email},{name},{new:true})
  console.log(user)
  if(user){
    console.log("User Updated",user)
    res.json(user)
  }
  else{
    const newUser=await new User({
      email,name
    }).save();
    console.log("new user",newUser)
    res.json(newUser)
  }
  
}


exports.currentUser=async (req,res)=>{
  User.findOne({email:req.user.email}).exec((err,user)=>{
    if(err) throw new Error(err);
    res.json(user)
  })
}