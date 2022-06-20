const express = require('express');
const mainControllers=require("../controllers/mainController");
var router=express.Router();
router.get("/",mainControllers.home);
router.get("/about",mainControllers.about);

module.exports=router;
