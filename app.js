const express = require("express");
const path=require("path");
const { mainModule } = require("process");
const router = require("./routers/main");
const app = express();
const mainRutas= require("./routers/main")

app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname)

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
    });
app.get("/",mainRutas)
app.get("/about",mainRutas)
