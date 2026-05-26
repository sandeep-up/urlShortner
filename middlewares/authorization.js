const authorization=async function (...roles){
    return async function(req,res,next){
           if(!roles.includes(req.user.role)){
         res.send("Access denied")
      }
      next();
    }    
};
module.exports=authorization;