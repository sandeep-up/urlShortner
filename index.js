const express=require("express");
const app=express();
app.set("view engine","ejs");
app.set("views","./views");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
require("./connection");
const urlRoutes=require("./routes/urlRoutes");
const url = require("./models/urlModel");
app.use("/",urlRoutes);
app.get("/", async function (req, res) {
    const allUrls=await url.find();
    res.render("home", {
         shortUrl: null,
         urls:allUrls
        });
});
app.listen(3000,()=>{
    console.log("server is running at port:3000");
})