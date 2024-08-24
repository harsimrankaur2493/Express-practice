class notFoundError extends Error{
    constructor(message){
        super(message);
        this.name = "NotFoundError";
        this.statusCode = 404;


    }
}

const express = require("express");
const app = express();

app.get('/' , (req,res,next)=>{
    next(notFoundError('Resource Not found'));
});

//Contralized error handler
function ContralizedHandler(err,req,res,next){
    console.error(err.stack);
    res.statusCode(err.statusCode || 500).res.json({message: err.message});
}

app.use(ContralizedHandler);
app.listen(3000 , ()=>{
    console.log("connected to port 3000");
});
