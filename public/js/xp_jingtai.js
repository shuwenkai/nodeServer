/**
 * Created by Administrator on 2018/6/14/014.
 */
function mychange(obj){
    for(var i=0;i<obj.parentNode.children.length;i++){
        if(obj==obj.parentNode.children[i]){
            console.log("url('../img/fa170"+(i+1)+".jpg')");
            console.log(obj.parentNode.children.length);
            document.getElementsByClassName("xinpin_tu")[0].style.backgroundImage="url('../img/fa170"+(i+1)+".jpg')";
        }
    }
}