/*导航子菜单的显示隐藏*/
function xianshi(obj) {
    for(var i=0;i<obj.parentNode.childNodes.length;i++){
        obj.parentNode.children[i].lastElementChild.style.display="none";
        obj.lastElementChild.style.display="block"
    }
}
var kaiguan=false;
function Search_open() {
    if(kaiguan==false){
        kaiguan=true;
    }else{
        kaiguan=false;
    }
    aaa();
}
function Search_close() {
    kaiguan=false;
    $(".p-serachBox_nav").css({visibility:"hidden",opacity:"0"});
}
function aaa() {
    if(kaiguan==false){
        $(".p-serachBox_nav").css({visibility:"visible",opacity:"1"});
        // kaiguan=true;
    }else{
        $(".p-serachBox_nav").css({visibility:"hidden",opacity:"0"});
        // kaiguan=false;
    }
}
function Search_all(){
    var event=window.event||arguments[0];
    if(event.keyCode== 13){
        
        search();//搜索函数


    }
}
function search() {
   var searchValue=$("input[name='searchValue']").val();

   sessionStorage.setItem("searchValue",searchValue);

    window.location.href="/search.do";
}
$(".jixugouwu").click(function () {
    window.location="index.html"
})