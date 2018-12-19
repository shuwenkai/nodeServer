/**
 * Created by lllnana on 2018/5/30.
 */
const dbpool = require("../config/xhzdbpoolconfig");
const userModel={
    //使用promise之后
    //商品
    daoAllGoods(params,callback){
       return new Promise(
           function(resolve,reject){
               let sql="select * from decorations limit ?,?";
               /*limit 0,12......1页*/
               /*limit 12,12......2页*/
               /*limit 24,12......3页
               */
               dbpool.connect(sql,
                   params,
                   (err,data)=>{
                       if(!err){
                           //执行成功
                           resolve(data);
                       }else {
                           reject(err);
                       }
                   }
               )
           }
       )
    },
    /*分页*/
    //页数
    daogetPage(params){
        return new Promise(
            function(resolve,reject) {
            dbpool.connect("select count(*) as totalcount from decorations",
                params,
                (err, data2)=> {
                    //resolve(data);
                    console.log(data2);
                    if(!err){
                        //执行成功
                        resolve(data2);
                    }else {
                        reject(err);
                    }
                })
            }
        )

    }

};
module.exports=userModel;
