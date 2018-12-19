/**
 * Created by Administrator on 2018/6/22.
 */
$(".click1").on({
    "click":function(){
        //console.log(222);
        $(".right-box ul:nth-child(2)").css({
            cursor:"pointer",
            visibility: "visible",
            opacity: "1"
        });
        $(".right-box ul:nth-child(1)").css({
            opacity: "0",
            visibility: "hidden"
        })
    }
});
$(".click2").on({
    "click":function(){
        console.log(222);
        $(".right-box ul:nth-child(2)").css({
            opacity: "0",
            visibility: "hidden"
        });
        $(".right-box ul:nth-child(1)").css({
            cursor:"pointer",
            visibility: "visible",
            opacity: "1"
        })
    }
});