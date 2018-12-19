/**
 * Created by lllnana on 2018/5/29.
 */
//1.创建xhr对象
var xhr;
if(window.XMLHttpRequest){
    xhr=new XMLHttpRequest();
}else{
    xhr=new ActiveXObject("Microsoft.XMLHTTP");
}
/*
* method-提交方法
* callback-回调函数
* url-提交地址
* parames-参数
* async-同步异步  true false*/
function  myAjax(method,url,params,callback,async) {
    if(async==undefined)async=true;//同步异步默认设置

    //2.注册回调函数
        xhr.onreadystatechange=function () {
            //前台会把我们返回的数子认为是状态码所以它不会执行回调函数
            //所以把它转会为字符串
            if(xhr.readyState==4&&xhr.status==200){
                callback()
            }
    };
    //3.发送请求 -连接服务器
    if(method=="get"){
        xhr.open(method,url+"?"+params,async);
        xhr.send(null)
    }else if(method=="post"){
        xhr.open(method,url,async);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(params);
    }

}


