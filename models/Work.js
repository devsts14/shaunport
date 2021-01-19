const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const workSchema = new mongoose.Schema(
  {
   user:{
     type: ObjectId,
     ref: 'User'
   },
   name:{
     type: String,
     required:true
   },
   type:{
     type: String,
     required:true
   },
   image:{
     type: String,
     required:true
   }
   ,
   link:{
     type: String
   }
  },
   
  { timestamps: true }
);

module.exports=mongoose.model('Work',workSchema)