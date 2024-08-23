// const express = require("express");
// const app = express();
// //method 1

// app.get('/' , (req,res)=>{
//     res.send("ehis is a get request");
// });

// app.post('/' , (req,res)=>{
//     res.send("this is a post request");
// });
// app.put('/' , (req,res)=>{
//     res.send("this is a put request");
// });

// app.listen(3000);

//method 2-> using router
const express= require("express");
const router = express.Router();

router.route('/')
.get((req,res,next)=>{
    res.statusCode(200);
    res.setHeader('content-type' , "text/plain");
    next();

})
.get((req,res,next)=>{
    res.end("when a get request is made");
})

module.exports = router;




