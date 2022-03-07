const express = require('express');
const app = express();

app.use(logger)

app.get("/books", (req, res)=>{
   return  res.send({route :"/books"});
});

app.get("/libraries", checkPermission("librariam"),  (req, res)=>{
    return res.send({route :"/libraries", permission:req.permission});
    
});

app.get("/authors", checkPermission("librariam"), (req, res)=>{
    return  res.send({route :"/libraries", permission:req.permission});
    
});

app.listen(5000, ()=>{
    console.log('listing on port 5000');
});

function logger(req,res, next){
    console.log("Before Logged");
    next();
    console.log("After Logged")
}

function checkPermission(T){
    return function checkPermission(req, res, next){
        if(req.path =="/libraries"){
            req.permission = true
        }
        if(req.path =="/authors"){
            req.permission = true
        }
        next();
    }
}