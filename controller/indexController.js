const lifeModel=require("../dao/lifeDao");
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
        resp.render("index")
    },
    backtop(req,resp){
        resp.render("backtop")
    },
    balanceLife(req,resp){
        resp.render("balanceLife")
    },
    //==========
    sale(req,resp){
        resp.render("Sale")
    },
    sale_child(req,resp){
        resp.render("sale_child")
    },
    search(req,resp){
        resp.render("Search")
    },
    //=======平衡生活==========
    balanceLifedata(req,resp){
        lifeModel.addnews()
            .then(function (data) {
                // resp.render("balanceLife",{mydata:data});
                resp.send(data)
            })
    },
    //==========搜索查询=======
    searchAll(req,resp){
        let searchValue=req.body.searchValue;
        console.log(req.body.searchValue);
        lifeModel.searchDao(searchValue)
            .then(function(data){
                resp.send(data);
            })
    }
};
module.exports=controller;