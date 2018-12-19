/**
 * Created by Administrator on 2018/6/19.
 */
$("#btn1").on({
    "click":function(){
        if($(this).attr("var")==""){
            //调用btn1参数和函数
            $(this).css({
                    backgroundColor:"#C9A983",
                    color:"white"
            }
            );
            $("#btn2").css({
                backgroundColor:"",
                color:""
                }
            );
            $("#btn2").attr("var2","");
            $(this).attr("var","参数1");
        }else if($(this).attr("var")=="参数1"){
            $(this).css({
                    backgroundColor:"",
                    color:""
            }
            );
            $(this).attr("var","")
        }
    }
});
$("#btn2").on({
    "click":function(){
        if($(this).attr("var2")==""){
            //调用btn1参数和函数
            $(this).css({
                    backgroundColor:"#C9A983",
                    color:"white"
            }
            );
            $("#btn1").css({
                    backgroundColor:"",
                    color:""
            }
            );
            $("#btn1").attr("var","");
            $(this).attr("var2","参数2");
        }else if($(this).attr("var2")=="参数2"){
            $(this).css({
                    backgroundColor:"",
                    color:""
            }
            );
            $(this).attr("var2","")
        }
    }
});
var textarry=[];
var textarry2=[];
var textp='';
$(document).on(
    'click','.box',function(){
        //console.log(textp);
        if($(this).attr("var")==""){
            //调用btn1参数和函数
            $(this).css(
                "border","2px solid  white"
            );
            $(this).attr("var","参数3");
        }else if($(this).attr("var")=="参数3"){
            $(this).css(
                "border",""
            );
            $(this).attr("var","")
        }
        textp=$(this).next().text();
        //$(".img-div").html("<img src='img/dingzhi/上部粉色.png' alt=''>");
        //console.log($(this).parent().siblings("div").children(".box")[0]);
        //console.log($(this).parents(".stationery").siblings(".stationery").find(".box"));
        if ($("#btn1").attr("var")=="参数1"&&$("#btn2").attr("var2")==""){
            $(".img-div>img:first-child").attr("src","/img/dingzhi/上"+textp + ".png");
            //console.log($("#btn1").attr("var"))
            //console.log(textarry);
            textarry.push(textp);
            //console.log(textarry);
            if (textarry.length>=1&&textarry2.length==0){
                $(".xuanze").html("<span>已选</span>"+
                    "<a href='#' class=' btn-default' role='button'>"+
                    "<span class='txet'>"+textarry[textarry.length-1]+"</span>"+
                    "<span class='glyphicon glyphicon-remove'></span>"+
                    "</a>");
            }
            if(textarry.length>=1&&textarry2.length>=1){
                $(".xuanze").html("<span>已选</span>"+
                    "<a href='#' class=' btn-default' role='button'>"+
                    "<span class='txet'>"+textarry[textarry.length-1]+textarry2[textarry2.length-1]+"</span>"+
                    "<span class='glyphicon glyphicon-remove'></span>"+
                    "</a>");
                if(textarry2.length>=4&&textarry.length>=4){
                    textarry2.splice(0,1);
                    textarry.splice(0,1);
                }
            }
        }if($("#btn2").attr("var2")=="参数2"&&$("#btn1").attr("var")==""){
            //console.log(222);
            $(".img-div>img:last-child").attr("src","/img/dingzhi/下"+textp + ".png");
            textarry2.push(textp);
            if (textarry2.length>=1&&textarry.length==0){
                $(".xuanze").html("<span>已选</span>"+
                    "<a href='#' class=' btn-default' role='button'>"+
                    "<span class='txet'>"+textarry2[textarry2.length-1]+"</span>"+
                    "<span class='glyphicon glyphicon-remove'></span>"+
                    "</a>");
            }
            if (textarry.length>=1&&textarry2.length>=1){
                console.log("进入4");
                $(".xuanze").html("<span>已选</span>"+
                    "<a href='#' class=' btn-default' role='button'>"+
                    "<span class='txet'>"+textarry[textarry.length-1]+textarry2[textarry2.length-1]+"</span>"+
                    "<span class='glyphicon glyphicon-remove'></span>"+
                    "</a>");
                console.log("textarry2"+textarry2);
                console.log("textarry"+textarry);
                if(textarry2.length>=4&&textarry.length>=4){
                    textarry2.splice(0,1);
                    textarry.splice(0,1);
                }
            }
        }

    }
);

$(document).on(
    'click','.ul2 li',function(){
        text2=$(this).text();
        //console.log($(this).text())
        $(".xuanze2").html("<span>已选</span>"+
            "<a href='#' class=' btn-default' role='button'>"+
            "<span class='txet'>"+text2+"</span>"+
            "<span class='glyphicon glyphicon-remove'></span>"+
            "</a>")
    }
);