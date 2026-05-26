const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
app.set("view engine","ejs");
app.set("views","./views");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
require("./connection");
const urlRoutes=require("./routes/urlRoutes");
const userRoutes=require("./routes/userRoutes");
const url=require("./models/urlModel.js")
const authentication=require("./middlewares/authentication.js");
app.use("/",userRoutes);
app.use("/",urlRoutes);
app.get("/",authentication,async function(req,res){
        const allUrls = await url.find({
    createdBy:{
        $in:[req.user.id]
    }
});
        res.render("home",{
            shortUrl:null,
            urls:allUrls
        });
});
app.listen(3000,()=>{
    console.log("server is running at port:3000");
})