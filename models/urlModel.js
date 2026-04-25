const mongoose=require("mongoose");
const urlSchema= new mongoose.Schema({
     shortId:String,
     redirectURL:String
});
const url=mongoose.model("url",urlSchema);
module.exports=url;