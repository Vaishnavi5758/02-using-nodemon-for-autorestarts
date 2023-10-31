

const express = require('express');

const app=express();

app.use((req,res,next)=>{
    console.log("1");
    res.send('<h1>Hello</h1>');
    //next();
});

app.use((req,res,next)=>{
    console.log("2");
   // next;
});


app.listen(4000);
