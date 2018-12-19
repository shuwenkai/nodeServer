const AV=require("leancloud-storage");
const APP_ID="PoT8dV05Gzngfsu2sv5CR0j6-gzGzoHsz";
const APP_Key="ERP89bGOWxHYlfi3XPYojwIH";
//模块初始化
AV.init({
    appId:APP_ID,
    appKey:APP_Key
});
const userModel = require("../dao/userDao"); //dbpool
const express = require("express");
const controller={
    /*========================页头导航===============================*/
    navController(req,resp){
        resp.render("nav")
    },
    /*=========================页脚================================*/
    footerController(req,resp){
        resp.render("footer")
    },
    indexController(req,resp){
        resp.render("template")
    },
    /*========================定制==========================*/
    commissionController(req,res){
        res.render("commission")
    },
   /*=======================商品+next===============*/
    getAllGoods(req,res){
        "use strict";
        let pageCount=12;
        let currentPage=req.query.currentPage;
        //console.log(currentPage);
    /* 第一个参数=*当前页-1*每页显示多少条*/
        userModel.daoAllGoods([(currentPage-1)*pageCount,pageCount])
            //查询回来的结果.它只能获取到resolve的data,catch能拿到
            .then(function(data){
                //console.log(data);
                res.send(data);
                //res.render("template",{mydata:data});
            })
            .catch(function(err){//报错是灰色的
                console.log(err);
                res.send(data);
            });
    },
    /*==========================总页数=============*/
    //使用promise
    //页数
    getAllPage(req,res){
    "use strict";
    //console.log(222);
    userModel.daogetPage()
        //查询回来的结果.它只能获取到resolve的data,catch能拿到
        .then(function(data2){
            //res.send(data);
            let pageCount=12;
            console.log(data2[0].totalcount);
            //还要向上取整
            let result=Math.ceil(Number(data2[0].totalcount/pageCount));
            result=String(result);
            res.send(result);
            //res.render("template",{mydata1:data2});
        })
        .catch(function(err){//报错是灰色的
            console.log(err);
            res.send(data2);
        });

    },
    sendCode(req,res){
        "use strict";
        //console.log(req.body.phone)
        AV.Cloud.requestSmsCode({
            //用这个后去电话号码给短信网站
            mobilePhoneNumber:req.body.phone,
            name:"华润科技登录",//正在使用xx服务
            op:"验证",//进行xx操作
            ttl:10//验证码有效时间10分钟
        }).then(function(){
            //条用成功
            res.send("验证码发送成功")
        },function (err){
            //调用失败
            res.send("验证码发送失败，请检查手机号");
        })
    }
};
module.exports=controller;