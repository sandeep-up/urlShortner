const url = require("../models/urlModel");
const createShortURL = async function(req,res){
    const originalURL = req.body.url;
    if(!originalURL){
        return res.send("URL is required");
    }
    const existing = await url.findOne({
        redirectURL:originalURL
    });
    if(existing){
        const alreadyExists = existing.createdBy.some(
            id => id.toString() === req.user.id
        );
        if(!alreadyExists){
            existing.createdBy.push(req.user.id);
            await existing.save();
        }
        return res.redirect("/");
    }
    let shortId;
    let isUnique = false;
    while(!isUnique){
        shortId = Math.random().toString(36).substring(2,8);
        const existingId = await url.findOne({
            shortId:shortId
        });
        if(!existingId){
            isUnique = true;
        }
    }
    const newURL = new url({
        shortId:shortId,
        redirectURL:originalURL,
        createdBy:[req.user.id]
    });
    await newURL.save();
    res.redirect("/");
};
const redirectURL = async function(req,res){
    const shortId = req.params.shortId;
    const entry = await url.findOneAndUpdate(
        {
            shortId:shortId
        },
        {
            $inc:{
                clicks:1
            },
            $push:{
                visitHistory:{
                    timestamp:Date.now()
                }
            }
        },
        {
            new:true
        }
    );
    if(!entry){
        return res.send("URL not found");
    }
    res.redirect(entry.redirectURL);
};
async function deleteUrl(req,res){
      const shortId=req.params.shortId;
      const existingUrl= await url.findOne({shortId:shortId});
      if(!existingUrl) {
        return res.send("There is no such url to delete");
         
      }
      const isOwner= existingUrl.createdBy.some(
        id=> id.toString()===req.user.id
      );
      const isAdmin=req.user.role==="admin";
      if(!isOwner&&!isAdmin){
        res.send("Access denied");
      }
     await url.deleteOne({shortId:shortId});
      res.redirect("/");
};
module.exports = {
    createShortURL,
    redirectURL,
    deleteUrl
};