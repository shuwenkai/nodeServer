var life_content=document.getElementById("life_content");
var i;
window.onload=function () {
    foodAjax()
}
function life_check(obj) {
    // console.log($(this).parent().siblings());

    for(i=0;i<$(obj.parentNode).siblings().children().get().length;i++){
        $(obj.parentNode).siblings().children().get(i).style.color="rgba(57, 57, 57, 0.87)";
    }
    if(obj.color==undefined){
        obj.style.color="rgba(209, 170, 120, 1)"
    }else {
        obj.style.color="rgba(209, 170, 120, 1)"
    }
    if(obj.id=="selection_a"){
        foodAjax()
    }else if(obj.id=="selection_b"){
        healthAjax()
    }
}
function foodAjax() {
    $.ajax({
        type:"get",
        url:"/food.do",
        success:function (data) {
            life_content.innerHTML="";
            for(i=10;i<17;i++){
                life_content.innerHTML+="<div>"+
                    "<a><img src="+data[i].l_path+"></a>"+
                    "<p>"+data[i].l_name+"</p>"+
                    "</div>"
            }
        }
    })
}
function healthAjax() {
    $.ajax({
        type:"get",
        url:"/food.do",
        success:function (data) {
            life_content.innerHTML="";
            for(i=0;i<10;i++){
                life_content.innerHTML+="<div>"+
                    "<a><img src="+data[i].l_path+"></a>"+
                    "<p>"+data[i].l_name+"</p>"+
                    "</div>"
            }
        }
    })
}