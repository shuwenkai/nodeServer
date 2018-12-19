/**
 * Created by Administrator on 2018/6/8.
 */
const express=require("express");//获取express模块
const router=express.Router();
const controller=require("../controller/xhzindexController");
router.get("/nav.do",controller.navController);/*============================导航*/
router.get("/footer.do",controller.footerController);/*====================页脚*/
router.get("/index.do",controller.indexController);

//商品+next
router.get("/mytest.do",controller.getAllGoods);
//总页数
router.get("/getPage.do",controller.getAllPage);
//定制
router.get("/commission.do",controller.commissionController);
//短信验证
router.post("/sendCode.do",controller.sendCode);
module.exports=router;