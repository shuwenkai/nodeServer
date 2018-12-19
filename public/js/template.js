/**
 * Created by Administrator on 2018/6/10.
 */
var currentPage=1;//默认展示第一页
var pageTotal=0;
window.onload=function(){
    getAllGoods();
    getPage();
};
/*================商品初始化==============*/
function  getAllGoods(){
    //"currentPage="+currentPage表示currentPage=1
    //就像之前表单传参的username一样
    myAjax("get","/mytest.do","currentPage="+currentPage,showGoods,false);
//    console.log(111);
}
function showGoods() {
//    console.log(xhr.responseText);
    var data=JSON.parse(xhr.responseText);
    document.getElementById("goods").innerHTML="";
    for(var i=0;i<data.length;i++){
        document.getElementById("goods").innerHTML+=
            "<div class='col-sm-4 col-md-4 col-lg-4 div-bottom'>"+
            "<div class='thumbnail'> " +
            "<img class='img-responsive center-block' src='/img/content-img/1/7004200.jpg' alt='...'>"+
            "<div class='caption'>"+
            "<p>"+data[i].d_name+"</p>"+
            "<p>"+
            "<i class='glyphicon glyphicon-yen'>"+data[i].d_price+"</i>"+
        "</p>"+
        "</div>"+
        "</div>"+
        "</div>"
    }
}
/*===================总页数===============*/
var number=document.getElementById("number");
var totalpage=document.getElementById("totalpage");
function  getPage(){
    console.log(333);
    myAjax("get","/getPage.do","",getAllpage,true)
}
function getAllpage(){
    console.log(222);
    var data=JSON.parse(xhr.responseText);
    pageTotal=data;
//    console.log(data+"woaini")
    totalpage.innerHTML=currentPage+"/"+pageTotal;
    for (var i=1;i<=pageTotal;i++){
        number.innerHTML+="<a href='javascript:' class='a-number' >"+i+"</a>";
    }
    for (var j=1;j<=pageTotal;j++) {
        if (currentPage == j) {
            //得到了所有的#number下面span节点
            console.log($("#number").children().get(j-1));
            //得到当前页的span节点
            console.log(j);
            var a=$("#number").children().get(j-1);
            a.style.backgroundColor = "#337AB7"
        }
    }

}

//============下一页============
function nextPage(){
    //console.log(1111);
    currentPage++;
    if(currentPage>pageTotal){
        currentPage=pageTotal;
    }else {
        getAllGoods();
        totalpage.innerHTML=currentPage+"/"+pageTotal
    }
    //=================监听翻页==============
    for (var j=0;j<=pageTotal;j++) {
        if (currentPage-1 == j) {
            //console.log(j);
            //得到了所有的#number下面span节点get把对象转换为节点
            console.log($("#number").children().get(j));
            //得到当前页的span节点
            var a=$("#number").children().get(j);
            a.style.backgroundColor = "#337AB7";
        }else {
            var b=$("#number").children().get(j);
            //console.log(j);
            b.removeAttribute("style")
        }

    }
}

//================点击当前页=======
//这种是委托事件给我我动态添加节点的方法
$(document).on(
    'click','.a-number',function(){
        $(this).text();
        //应为currentPage是全局变量一给currentPage重新赋值
        // 最开始的这个currentPage也就变了
        currentPage=$(this).text();
        //console.log($(this).text());
        currentPage2=$(this).text();
        totalpage.innerHTML=currentPage2+"/"+pageTotal;
        myAjax("get","/mytest.do","currentPage="+currentPage2,showGoods,false);
        //=================监听翻页==============
        for (var j=0;j<=pageTotal;j++) {
            if (currentPage2-1 == j) {
                //console.log(j);
                //得到了所有的#number下面span节点get把对象转换为节点
                console.log($("#number").children().get(j));
                //得到当前页的span节点
                var a=$("#number").children().get(j);
                a.style.backgroundColor = "#337AB7";
            }else {
                var b=$("#number").children().get(j);
                //console.log(j);
                b.removeAttribute("style")
            }

        }
});
