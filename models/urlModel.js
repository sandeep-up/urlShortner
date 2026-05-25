const mongoose=require("mongoose");
const urlSchema= new mongoose.Schema({
     shortId:String,
     redirectURL:String,
     clicks:{
          type:Number,
          default:0
     }
});
const url=mongoose.model("url",urlSchema);
module.exports=url;