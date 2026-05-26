const user =require("../models/userMOdel.js");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
async function signupUser(req,res){
      const {name,email,password}=req.body;
      const existingUser=await user.findOne({email});
      if(existingUser) {
        res.send("Email is already registered");
        return;
      }
      else {
          const hashedPassword= await bcrypt.hash(password,10);
          await user.create({
                name:name,
                email:email,
                password:hashedPassword
          });
          res.redirect("/login");
      }

}
async function loginUser(req,res){
      const {email,password}=req.body;
      const existinguser = await user.findOne({email});
      if(!existinguser){
    return res.send(`
        <script>
            alert("Please signup first");
            window.location.href="/signup";
        </script>
    `);
}
      const isMatch= await bcrypt.compare(password,existinguser.password);
      if(!isMatch) {
        res.send("Incorrect Password");
        return;
      }
      const token=jwt.sign(
             {id:existinguser._id,
             email:existinguser.email},
             "SECRET_KEY"
      );
      res.cookie("token",token);
      res.redirect("/");
}
module.exports={
    signupUser,
    loginUser
};