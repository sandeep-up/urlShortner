const url=require("../models/urlModel");
const createShortURL=function(req,res){
      const shortId=Math.random().toString(36).substring(2,8);
      const newURL= new url({
          shortId:shortId,
          redirectURL:req.body.url
      });
      newURL.save().then(function(data){
             res.json(
                "http://localhost:3000/"+shortId
             );
      });
};
function redirectURL(req,res){
    const shortId = req.params.shortId;

    url.findOne({ shortId: shortId }).then(function(entry){
        if(!entry){
            return res.send("URL not found");
        }
        res.redirect(entry.redirectURL);
    });
}
module.exports={
    createShortURL,
    redirectURL
}