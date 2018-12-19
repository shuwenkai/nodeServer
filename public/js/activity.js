var num10=0;
var num15=0;
var num20=0;
var time;
var time1;
var time2;
$("#vr1").click(function () {
    $(this).css("border","4px solid white");
    $("#vr2").css("border","4px solid rgba(255, 255, 255, 0.55)");
    $(this).parent().parent().css("background","url('../img/activity/vr.jpg')");
    $(this).parent().parent().css("background-size","100% 100%");
    $(".vr-title").css("opacity","1");
    $(".vr-text").css("opacity","1");
    $(".vr-title2").css("opacity","0");
});

$("#vr2").click(function () {
    $(this).css("border","4px solid white");
    $("#vr1").css("border","4px solid rgba(255, 255, 255, 0.55)");
    $(this).parent().parent().css("background","url('../img/activity/vr-img.jpg')");
    $(this).parent().parent().css("background-size","100% 100%");
    $(".vr-title").css("opacity","0");
    $(".vr-text").css("opacity","0");
    $(".vr-title2").css("opacity","1");
});

$("#num10").click(function () {
    $("#myModal2 .modal-body h1").text("领取成功");
    if (num10==0){
        num10=num10+1;
    }
    else {
        $("#myModal2 .modal-body h1").text("已经领取过了");
    }

});
$("#num15").click(function () {
    $("#myModal2 .modal-body h1").text("领取成功");
    if (num15==0){
        num15=num15+1;
    }
    else {
        $("#myModal2 .modal-body h1").text("已经领取过了");
    }

});
$("#num20").click(function () {
    $("#myModal2 .modal-body h1").text("领取成功");
    if (num20==0){
        num20=num20+1;
    }
    else {
        $("#myModal2 .modal-body h1").text("已经领取过了");
    }

});

$(".acticityNum").click(function () {
    var text=$(this).text()
    if ($(this).text()=="活动1·"){
        clearInterval(time1);
        clearInterval(time2);
        time=setInterval(function(){
            var ct=window.scrollY;
            if(ct>0){
                window.scrollTo(0,ct-20);
            }else{
                clearInterval(time);
            }
        },5);
    };
    if ($(this).text()=="活动2·"){
        clearInterval(time);
        clearInterval(time2);
        time1=setInterval(function(){
            var ct1=window.scrollY;
            if ((Math.abs(ct1-920)<=20)){
                clearInterval(time1);
                window.scrollTo(0,920);
            }
            if(ct1>920){
                window.scrollTo(920,ct1-20);
            }
            else if (ct1<920){
                window.scrollTo(920,ct1+20);
            }
            else {
                clearInterval(time1);
            }
        },5);
    };
    if ($(this).text()=="活动3·"){
        clearInterval(time);
        clearInterval(time2);
        time2=setInterval(function(){
            var ct2=window.scrollY;
            if ((Math.abs(ct2-1624)<=20)){
                clearInterval(time2);
                window.scrollTo(0,1624);
            }
            if(ct2>1624){
                window.scrollTo(1624,ct2-20);
            }
            else if (ct2<1624){
                window.scrollTo(1624,ct2+20);
            }
            else {
                clearInterval(time2);
            }
        },5);
    };

});

window.onscroll=function () {
    var wTop=(window.scrollY);
    console.log(wTop)
    if (wTop>0 && wTop < 900){
        $(".acticity-checked .acticityNum:nth-child(1)").css("width",80);
        $(".acticity-checked .acticityNum:nth-child(2)").css("width",60);
        $(".acticity-checked .acticityNum:nth-child(3)").css("width",60);
    }else if (wTop >=900 && wTop < 1624){
        $(".acticity-checked .acticityNum:nth-child(1)").css("width",60);
        $(".acticity-checked .acticityNum:nth-child(2)").css("width",80);
        $(".acticity-checked .acticityNum:nth-child(3)").css("width",60);
    }else if (wTop >= 1624 && wTop < 2000){
        $(".acticity-checked .acticityNum:nth-child(1)").css("width",60);
        $(".acticity-checked .acticityNum:nth-child(2)").css("width",60);
        $(".acticity-checked .acticityNum:nth-child(3)").css("width",80);
    }
}