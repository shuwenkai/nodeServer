
//判断购物车是否有内容
window.onload=pd();

function pd(){
    // console.log($("#showShop").children(".shoplist").text().length);
    if ($("#showShop").children(".shoplist").text().length==0){
        console.log(888)
        $("#showShop").html("<div id='notShop'>"+
            "<h2>你的购物车空空如也</h2>" +
            "<button type='button' class='btn btn-warning btn-lg'>返回购物</button>" +
            "</div>")
        $("#TJ").css("display","none");
    }
}
//单选触发
$(".checkOne").click(function () {
    allNum();
});


//全选按钮
$("#allShop").click(function () {

    if ($("#allShop input").prop("checked")==false){
        $("#allShop input").prop("checked",true)
        $.each($(".checkOne"),function () {
            $(".checkOne").prop("checked",true)
        });
        allNum();
    }
    else {
        $("#allShop input").prop("checked",false)
        $.each($(".checkOne"),function () {
            $(".checkOne").prop("checked",false)
        });
        allNum();
    }
});



//数量操作
$(".reduce").click(function () {
    $(this).parent().parent().children("div:nth-child(1)").children(".checkOne").prop("checked",true);
    $(this).parent().children(".moreThree").css("display","none");
    var thisNUM=$(this).parent().children("input").val();
    thisNUM--;
    $(this).parent().children("input").val(thisNUM);
    if ($(this).parent().children("input").val()<=1){
        $(this).parent().children("input").val(1)
    }
    allNum();
});
$(".increase").click(function () {
    $(this).parent().parent().children("div:nth-child(1)").children(".checkOne").prop("checked",true);
    $(this).parent().children(".moreThree").css("display","none");
    var thisNUM=$(this).parent().children("input").val();
    thisNUM++;
    $(this).parent().children("input").val(thisNUM);
    if ($(this).parent().children("input").val()>=3){
        $(this).parent().children("input").val(3);

        $(this).parent().children(".moreThree").css("display","block");
    }
    else {
        $(this).parent().children(".moreThree").css("display","none");
    }
    allNum();
});
$(".shoplist div:nth-child(4) input").blur(function () {
    $(this).parent().parent().children("div:nth-child(1)").children(".checkOne").prop("checked",true);
    $(this).parent().children(".moreThree").css("display","none");
    if ($(this).parent().children("input").val()>=3){
        $(this).parent().children("input").val(3);

        $(this).parent().children(".moreThree").css("display","block");
    }
    else {
        $(this).parent().children(".moreThree").css("display","none");
    };
    if ($(this).parent().children("input").val()<=1){
        $(this).parent().children("input").val(1)
    };
    allNum();
});

//删除&&封装
$(".delete").click(function () {
   console.log("删除")
    $(this).parent().parent().remove();
    pd();
    mymodify();
});
function mydelete(){
    $(".delete").click(function () {
        console.log("删除")
        $(this).parent().parent().remove();
        pd();
        mymodify();
    });
}

//修改&&封装
$(".modify").click(function () {

    var CZ=$(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").children("p:nth-child(1)").children("span:nth-child(1)").html();
    var color=$(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").children("p:nth-child(1)").children("span:nth-child(2)").html();
    var DX=$(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").children("p:nth-child(2)").html();
    $(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").html("<span>材质</span>" +
        "<select>" +
        "<option value =''>"+CZ+"</option>" +
        "</select><br>" +
        "<span>颜色</span>" +
        "<select>" +
        "<option value =''>"+color+"</option>" +
        "</select><br>" +
        "<span>尺寸</span>" +
        "<select>" +
        "<option value =''>"+DX+"</option>" +
        "</select><br>")

   $(this).parent().html("<button class='mysure'>确认</button>" +
        "<button class='mycancel'>取消</button>");
    mydelete();
    mycancel();
    mysure();
});
function mymodify(){
    $(".modify").click(function () {

        var CZ=$(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").children("p:nth-child(1)").children("span:nth-child(1)").html();
        var color=$(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").children("p:nth-child(1)").children("span:nth-child(2)").html();
        var DX=$(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").children("p:nth-child(2)").html();
        $(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").html("<span>材质</span>" +
            "<select>" +
            "<option value =''>"+CZ+"</option>" +
            "</select><br>" +
            "<span>颜色</span>" +
            "<select>" +
            "<option value =''>"+color+"</option>" +
            "</select><br>" +
            "<span>尺寸</span>" +
            "<select>" +
            "<option value =''>"+DX+"</option>" +
            "</select><br>")

        $(this).parent().html("<button class='mysure'>确认</button>" +
            "<button class='mycancel'>取消</button>");
        mydelete();
        mycancel();
        mysure();
    });
}



//修改里的确认//封装
$(".mysure").click(function () {
    var CZ=$(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").children("select:nth-child(2)").children("option").html();
    var color=$(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").children("select:nth-child(5)").children("option").html();
    var DX=$(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").children("select:nth-child(8)").children("option").html();
    $(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").html("<p><span>"+CZ+"</span><span>"+color+"</span></p>" +
        "<p>"+DX+"</p>");



    $(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").html("<p><span>灯体：铁；灯罩：玻璃-</span><span>古黑色</span></p>" +
        "<p>规格: 直径40X高60-150CM</p>");

    $(this).parent().html("<span class='modify'>[修改]</span>" +
        "<span>[收藏]</span><br>" +
        "<span class='delete'>[删除]</span>")
    mymodify();
    mydelete();
});
function mysure() {
    $(".mysure").click(function () {
        var CZ=$(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").children("select:nth-child(2)").children("option").html();
        var color=$(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").children("select:nth-child(5)").children("option").html();
        var DX=$(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").children("select:nth-child(8)").children("option").html();
        $(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").html("<p><span>"+CZ+"</span><span>"+color+"</span></p>" +
            "<p>"+DX+"</p>");

        $(this).parent().html("<span class='modify'>[修改]</span>" +
            "<span>[收藏]</span><br>" +
            "<span class='delete'>[删除]</span>")
        mymodify();
        mydelete();
    });
};


//修改里的取消//封装
$(".mycancel").click(function () {
    var CZ=$(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").children("select:nth-child(2)").children("option").html();
    var color=$(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").children("select:nth-child(5)").children("option").html();
    var DX=$(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").children("select:nth-child(8)").children("option").html();
    $(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").html("<p><span>"+CZ+"</span><span>"+color+"</span></p>" +
        "<p>"+DX+"</p>");

    $(this).parent().html("<span class='modify'>[修改]</span>" +
        "<span>[收藏]</span><br>" +
        "<span class='delete'>[删除]</span>")
    mymodify();
    mydelete();
});
function mycancel() {
    $(".mycancel").click(function () {
        var CZ=$(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").children("select:nth-child(2)").children("option").html();
        var color=$(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").children("select:nth-child(5)").children("option").html();
        var DX=$(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").children("select:nth-child(8)").children("option").html();
        $(this).parent().parent().children("div:nth-child(2)").children(".shopdetailed").html("<p><span>"+CZ+"</span><span>"+color+"</span></p>" +
            "<p>"+DX+"</p>");

        $(this).parent().html("<span class='modify'>[修改]</span>" +
            "<span>[收藏]</span><br>" +
            "<span class='delete'>[删除]</span>")
        mymodify();
        mydelete();
    });
};


//订单统计
function allNum() {
    var allmany=0;
    var allMoney=0;

    $.each($(".checkOne"),function (value) {
        if ($(this).prop("checked")==true){
            allmany=allmany+Number($(this).parent().parent().children("div:nth-child(4)").children("input").val());
            allMoney=allMoney+Number($(this).parent().parent().children("div:nth-child(4)").children("input").val())*Number($(this).parent().parent().children("div:nth-child(3)").children("span:nth-child(2)").text());
            }
    });
    console.log(allmany);
    console.log(allMoney)
    $("#allmany").text(allmany);
    $("#allMoney").text(allMoney+".00");
    $("#allNum").text(allMoney+".00");

};

//下一步



