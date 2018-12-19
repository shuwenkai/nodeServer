/**
 * Created by Administrator on 2018/6/8.
 */
const express=require("express");//获取express模块
const router=express.Router();
const controller=require("../controller/indexController");
router.get("/nav.do",controller.navController);/*============================导航*/
router.get("/footer.do",controller.footerController);/*====================页脚*/
router.get("/mytest",function(rep,res){
    "use strict";
    res.render("template",{username:"徐海舟",mytest:"这是测试文字"})
});
module.exports=router;