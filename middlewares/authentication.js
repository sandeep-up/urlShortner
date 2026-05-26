const jwt=require("jsonwebtoken");
async function authentication(req,res,next){
      try{
        const token=req.cookies.token;
        if(!token){
            res.redirect("/login");
        }
        const decoded=jwt.verify(token,"SECRET_KEY");
        req.user=decoded;
        next();
      }
      catch(error){
        res.clearCookie("token");
        res.redirect("/login");
      }
}
module.exports=authentication;