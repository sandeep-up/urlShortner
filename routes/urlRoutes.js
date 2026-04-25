const express=require("express");
const router=express.Router();
const {createShortURL,redirectURL}=require("../controllers/urlController");
router.post("/shorten",createShortURL);
router.get("/:shortId", redirectURL);
module.exports=router;