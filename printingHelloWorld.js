const express = require("express");
const app = express();
// app.get('/',  (req , res) =>{
//     res.send("<h1>hello world</h1>");
// });

// app.listen(8000 , ()=>{
//     console.log("server is listening at port 8000");
// });

app.use((req,res)=>{
    res.json("<h1>hello world</h1>");
})

app.listen(8000, ()=>{
    console.log("the port is 8000");
});



