const express=require("express");//获取express模块
const app=express();//使用express
const logger=require("morgan");//获取日志模块
const path=require("path");//获取path模块
const router=require("./routes/indexRouter");//获取路由模块
const router1=require("./routes/templateRouter");//获取路由模块


app.use("*",(req,resp,next)=>{
    resp.header("Access-Control-Allow-Origin","*");//允许所有来源访问
    resp.header("Access-Control-Allow-Headers","X-Requested-With");//响应头设置
    resp.header("Access-Control-Allow-Method","POST,GET,DELETE,OPTIONS");//允许访问的形式
    // resp.header("Content-Type","text/html;charset=utf-8");
    next();
});

const bodyParse=require("body-parser");
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParse.json());

app.use(logger("dev"));//调用日志模块
app.use(router);//使用路由模块
app.use(router1);//使用路由模块
app.use(express.static(__dirname+"/public"));//调用静态资源
app.use(express.static(__dirname+"/public/html"));//静态资源

app.set("views",path.join(__dirname,"/views"));//ejs配置
app.set("view engine","ejs");//ejs配置

// app.use('*', (req, res, next)=> {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     // res.header('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });



app.set("port",8888);
app.listen(8888,()=>{
    console.log("服务器启动")
});

