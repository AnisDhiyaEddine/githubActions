const express = require('express');
const app = express();
app.get("/",(req,res)=>{
    console.log("youpiii t3ref ki ydir haha");
    res.send("server-1");
})
app.listen(3001,()=>{
    console.log("app is listening on port 3001");
})