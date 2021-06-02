const express = require('express');
const app = express();
console.log(process.env.environment)
app.get("/",(req,res)=>{
    console.log("youpiii t3ref ki ydir haha");
    res.send("server-1");
})
let server = app.listen(3001,()=>{
    console.log("app is listening on port 3001");
})

process.on('SIGTERM',() => {
  console.log('Closing http server.');
  server.close(() => {
    process.exit(0);    
  });
})