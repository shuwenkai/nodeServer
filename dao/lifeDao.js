const db=require("../config/dbpoolconfig");
const newmodel={
    addnews(params){
        return new Promise(function (resolve,reject) {
            db.connect("select * from life",params,(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    },
    searchDao(params){
        let sql="select*from decorations where d_name like '%"+params+"%'";
        return new Promise((resolve, reject)=>{
            db.connect(sql,[],(err,data)=>{
                if(!err){
                    resolve(data)
                }else{
                    reject(err)
                }
            })
        })
    }
};
module.exports=newmodel;