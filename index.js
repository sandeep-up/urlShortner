const express=require("express");
const app=express();
app.use(express.json());
require("./connection");
const urlRoutes=require("./routes/urlRoutes");
app.use("/",urlRoutes);
app.get("/",function(req,res){
    res.send("this is the homepage");
})
app.listen(3000,()=>{
    console.log("server is running at port:3000");
})