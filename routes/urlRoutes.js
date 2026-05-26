const express=require("express");
const router=express.Router();
const authentication=require("../middlewares/authentication");
const {createShortURL,redirectURL,deleteUrl}=require("../controllers/urlController");
router.post("/shorten",authentication,createShortURL);
router.get("/:shortId",redirectURL);
router.post("/delete/:shortId",authentication,deleteUrl);
module.exports=router;