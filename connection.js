const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/urlshortener")
.then(function(){
    console.log("mongodb connected");
}).catch(function(err){
    console.error(err);
});
