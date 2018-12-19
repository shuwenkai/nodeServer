/**
 * Created by Administrator on 2018/6/11/011.
 */
//var an_jiaju=document.getElementsByClassName("an_jiaju");
//an_jiaju.style.backgroundImage = "url(aa.jpg)";


function mychange(obj){
    for(var i=0;i<obj.parentNode.children.length;i++){
        if(obj==obj.parentNode.children[i]){
            console.log("url('/img/textile/fa170"+(i+1)+".jpg')");
            console.log(obj.parentNode.children.length);
            document.getElementsByClassName("xinpin_tu")[0].style.backgroundImage="url('/img/textile/fa170"+(i+1)+".jpg')";
        }
    }
}
