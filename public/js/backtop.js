var backtopdiv=document.getElementById("backtopdiv");
var time;

window.onscroll = function(){
    var bB=(window.scrollY);
    console.log(6556566);
    if(bB>150){
        backtopdiv.style.opacity=1;
    }else{
        backtopdiv.style.opacity=0;

    }
};

function backtop() {
    time=setInterval(function(){
        var ct=window.scrollY;
        if(ct>0){
            window.scrollTo(0,ct-20);
        }else{
            clearInterval(time);
        }
    },10);

}

document.onmousewheel=function () {
    clearInterval(time);
};