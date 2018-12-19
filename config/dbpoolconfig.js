/**
 * Created by 晨曦 on 2018/5/29.
 */

const mysql=require("mysql");

const dbpool={
    pool:{},
    config:{
        host:"localhost",
        port:"3306",
        user:"root",
        password:"root",
        database:"tao"
    },
    create(){
        this.pool=mysql.createPool(this.config)
    },
    connect(sql,arr,fn){
        this.pool.getConnection((err,connection)=>{
            connection.query(sql,arr,fn);
            connection.release()
        })
    }
};

module.exports=dbpool;
dbpool.create();