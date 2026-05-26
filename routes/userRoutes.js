const express=require("express");
const router=express.Router();
const {signupUser,loginUser}= require("../controllers/userController");
router.post("/signup",signupUser);
router.post("/login",loginUser);
router.get("/login", function(req,res){
    const token = req.cookies.token;
    if(token){
        return res.redirect("/");
    }
    res.render("login");

});
router.get("/signup", function(req,res){
    const token = req.cookies.token;
    if(token){
        return res.redirect("/");
    }
    res.render("signup");
});
router.get("/logout", function(req,res){
    res.clearCookie("token");
    res.redirect("/login");
});
module.exports=router;