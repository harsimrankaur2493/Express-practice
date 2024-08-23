const express= require("express");
const path = require("path");

const app= express();
const port = 3000;

app.get('/file' , (req, res) =>{
    res.sendFile(__dirname , "file1.jpg");
});

app.listen(port , (error) =>{
    if(!error){
        res.status(200).send(`the server is connected to port ${port}`);
    }
    else{
        console.log(`an error has occured `);
    }
});