const mongoose=require("mongoose");
const urlSchema= new mongoose.Schema({
     shortId:String,
     redirectURL:String,
     clicks:{
          type:Number,
          default:0
     },
     createdBy:[
          {
          type:mongoose.Schema.Types.ObjectId,
          ref:"user"}
     ]
});
const url=mongoose.model("url",urlSchema);
module.exports=url;