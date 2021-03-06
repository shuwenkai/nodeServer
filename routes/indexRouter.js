const express=require("express");//获取express模块
const router=express.Router();
const controller=require("../controller/indexController");
router.get("/nav.do",controller.navController);/*============================导航*/
router.get("/footer.do",controller.footerController);/*====================页脚*/
router.get("/index.do",controller.indexController);/*===========主页*/
router.get("/backtop.do",controller.backtop);/*========*/
router.get("/balanceLife.do",controller.balanceLife);/*     平衡生活*/
router.get("/sale.do",controller.sale);/*========Sale*/
router.get("/sale_child.do",controller.sale_child);
router.get("/search.do",controller.search);/*========搜索页面*/

router.get("/food.do",(req,res)=>{
    res.send("aaaa")
});
router.post("/searchAll.do",controller.searchAll);//========搜索

const jsondata=require("../public/json");
router.post("/znycData.do",(req,res)=>{
    res.json({
        "showapi_res_code": 0,
        "showapi_res_error": "",
        "showapi_res_body": {
            "indexList": [
                {
                    "code": "sh000001",
                    "maxPrice": 4006.337,
                    "minPrice": 3964.936,
                    "name": "上证指数",
                    "nowPrice": 3966.381,
                    "time": "2015-08-18 10:35:44",
                    "todayOpenPrice": 3999.134,
                    "tradeAmount": 280632640360,
                    "tradeNum": 199912933,
                    "yestodayClosePrice": 3993.668
                },
                {
                    "code": "sz399001",
                    "maxPrice": 13652.542,
                    "minPrice": 13517.324,
                    "name": "深证成指",
                    "nowPrice": 13548.316,
                    "time": "2015-08-18 10:35:51",
                    "todayOpenPrice": 13608.516,
                    "tradeAmount": 256037205656.52,
                    "tradeNum": 14598517017,
                    "yestodayClosePrice": 13573.902
                },
                {
                    "code": "sz399005",
                    "maxPrice": 9148.755,
                    "minPrice": 9060.204,
                    "name": "中小板指",
                    "nowPrice": 9086.175,
                    "time": "2015-08-18 10:35:51",
                    "todayOpenPrice": 9115.862,
                    "tradeAmount": 27528057088.63,
                    "tradeNum": 1190644652,
                    "yestodayClosePrice": 9103.32
                },
                {
                    "code": "sz399006",
                    "maxPrice": 2720.575,
                    "minPrice": 2669.351,
                    "name": "创业板指",
                    "nowPrice": 2700.056,
                    "time": "2015-08-18 10:35:51",
                    "todayOpenPrice": 2674.422,
                    "tradeAmount": 22556508167.85,
                    "tradeNum": 698847275,
                    "yestodayClosePrice": 2666.287
                }
            ],
            "list": [
                {
                    "buy1_m": "10.98",
                    "buy1_n": "47000",
                    "buy2_m": "10.97",
                    "buy2_n": "86400",
                    "buy3_m": "10.96",
                    "buy3_n": "33500",
                    "buy4_m": "10.95",
                    "buy4_n": "188200",
                    "buy5_m": "10.94",
                    "buy5_n": "204548",
                    "closePrice": "11.02",
                    "code": "601006",
                    "competBuyPrice": "10.98",
                    "competSellPrice": "10.99",
                    "date": "2015-08-18",
                    "name": "大秦铁路",
                    "nowPrice": "10.98",
                    "openPrice": "10.93",
                    "sell1_m": "10.99",
                    "sell1_n": "38000",
                    "sell2_m": "11.00",
                    "sell2_n": "422100",
                    "sell3_m": "11.01",
                    "sell3_n": "213142",
                    "sell4_m": "11.02",
                    "sell4_n": "309600",
                    "sell5_m": "11.03",
                    "sell5_n": "71257",
                    "time": "10:35:44",
                    "todayMax": "11.09",
                    "todayMin": "10.91",
                    "tradeAmount": "272757594",
                    "tradeNum": "24816214",
                    "all_value": "19333.25",
                    "circulation_value": "19333.25"
                },
                {
                    "buy1_m": "20.22",
                    "buy1_n": "200",
                    "buy2_m": "20.20",
                    "buy2_n": "5600",
                    "buy3_m": "20.18",
                    "buy3_n": "4000",
                    "buy4_m": "20.16",
                    "buy4_n": "2300",
                    "buy5_m": "20.15",
                    "buy5_n": "6100",
                    "closePrice": "21.04",
                    "code": "601007",
                    "competBuyPrice": "20.22",
                    "competSellPrice": "20.23",
                    "date": "2015-08-18",
                    "name": "金陵饭店",
                    "nowPrice": "20.20",
                    "openPrice": "20.79",
                    "sell1_m": "20.23",
                    "sell1_n": "8000",
                    "sell2_m": "20.24",
                    "sell2_n": "75900",
                    "sell3_m": "20.25",
                    "sell3_n": "11100",
                    "sell4_m": "20.27",
                    "sell4_n": "1600",
                    "sell5_m": "20.28",
                    "sell5_n": "4000",
                    "time": "10:35:44",
                    "todayMax": "21.04",
                    "todayMin": "20.20",
                    "tradeAmount": "165670874",
                    "tradeNum": "8029111",
                    "all_value": "19333.25",
                    "circulation_value": "19333.25"
                }
            ],
            "ret_code": 0
        }
    })
})
module.exports=router;