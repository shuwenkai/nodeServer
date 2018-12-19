const express=require("express");
const buyCarController=require("../controller/buyCarController");
//获取路由对象
const router=express.Router();

router.get("/buyCar",buyCarController.ceshi);



module.exports=router;