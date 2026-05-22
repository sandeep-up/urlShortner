const url=require("../models/urlModel");
const createShortURL= async function(req,res){
     const originalURL = req.body.url;

    // 1. Check if URL already exists
    const existing = await url.findOne({ redirectURL: originalURL });

    if(existing){
        const allUrls = await url.find();

        return res.render("home", {
            shortUrl: "http://localhost:3000/" + existing.shortId,
            urls: allUrls
        });
    }
      // Generate unique shortId
    let shortId;
    let isUnique = false;

    while(!isUnique){
        shortId = Math.random().toString(36).substring(2,8);

        const existingId = await url.findOne({ shortId: shortId });

        if(!existingId){
            isUnique = true;
        }
    }
      const newURL= new url({
          shortId:shortId,
          redirectURL:originalURL
      });
      await newURL.save();
      const allUrls=await url.find();
    res.render("home", {
    shortUrl: "http://localhost:3000/" + shortId,
    urls:allUrls
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