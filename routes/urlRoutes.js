const express=require("express");
const router=express.Router();
const authentication=require("../middlewares/authentication");
const {createShortURL,redirectURL}=require("../controllers/urlController");
router.post("/shorten",authentication,createShortURL);
router.get("/:shortId",redirectURL);
module.exports=router;