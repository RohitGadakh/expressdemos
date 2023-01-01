const express = require("express");
var app = express();

app.get("/about", (req, resp) => {
    resp.send("In About Page..");
})

app.get("/", (req, resp) => {
   // resp.sendFile('public/index.html',{root:__dirname});
     resp.sendFile(__dirname+"/index.html");
});
app.listen(5000);
console.log("Server listning at 5000");

//res.sendFile(path.join(__dirname, '../public', 'index1.html'));