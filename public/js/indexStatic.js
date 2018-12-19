var room=document.getElementById("room");
var furniture=document.getElementById("furniture");
var op=1;
var po=1;
var myroomword=document.getElementsByClassName("roomword");
var myfurnitureword=document.getElementsByClassName("furnitureword");
var pw=$(function () {
    $("#container").switchPage({
        'loop':false,
        'keyboard':true
    })
});
// const pageSwitch=require('pageswitch');
// var pw=new pageSwitch('container id',{
//         duration:600,
//         direction:1,
//         loop:false,
//         ease:'ease',
//         transition:'slide',
//         freeze:false,
//         mouse:true,
//         mousewheel:false,
//         arrowkey:false,
//         autoplay:false,
//         interval:600,
//     });


$('#carousel').carousel({
    pause: 'none'
});
function myfocus(obj) {
    for (i=0;i<=obj.parentNode.childNodes.length;i++) {
        obj.parentNode.children[i].style.color="rgba(255, 255, 255, 0.5)";
        obj.style.color="rgba(255, 255, 255, 1)";
    }
}
var roompause=setInterval(roomlunbo,5000);
function roomlunbo() {
    op=op+1;
    if(op==5){
        op=1
    }
    room.style.backgroundImage="url('../img/index/index-room"+op+".jpg')";
    for(i=0;i<=myroomword.length;i++){
        myroomword[i].style.color="rgba(255, 255, 255, 0.5)";
        myroomword[op-1].style.color="rgba(255, 255, 255, 1)";
    }
}
var roompause=setInterval(roomlunbo,5000);
var num=0;
var bian;
var s=bian+num;
function roomword(obj) {
    clearInterval(roompause);
    clearInterval(s);
    for(i=0;i<=myroomword.length;i++){
        myroomword[i].style.color="rgba(255, 255, 255, 0.5)";
        obj.style.color="rgba(255, 255, 255, 1)";
        if(myroomword[i]==obj){
            room.style.backgroundImage="url('../img/index/index-room"+(i+1)+".jpg')";
            op=i+1;
            num=num+1;
        }
    }
}
function roomleave(obj) {
    s=setInterval(roomlunbo,5000);
}

/*=============================================================*/
var furniturepause=setInterval(furniturelunbo,5000);
function furniturelunbo() {
    po=po+1;
    if(po==5){
        po=1
    }
    furniture.style.backgroundImage="url('../img/index/indexfurniture-"+po+".jpg')";
    for(i=0;i<=myfurnitureword.length;i++){
        myfurnitureword[i].style.color="rgba(255, 255, 255, 0.5)";
        myfurnitureword[po-1].style.color="rgba(255, 255, 255, 1)";
    }
}




var numx=0;
var bianx;
var sx=bianx+numx;
function furnitureword(obj) {
    clearInterval(furniturepause);
    clearInterval(sx);
    for(i=0;i<=myfurnitureword.length;i++){
        myfurnitureword[i].style.color="rgba(255, 255, 255, 0.5)";
        obj.style.color="rgba(255, 255, 255, 1)";
        if(myfurnitureword[i]==obj){
            furniture.style.backgroundImage="url('../img/index/indexfurniture-"+(i+1)+".jpg')";
            po=i+1;
            numx=numx+1;
        }
    }
}
function furnitureleave(obj) {
    sx=setInterval(furniturelunbo,5000);
}
/*导航子菜单的显示隐藏*/
function xianshi(obj) {
    for(i=0;i<obj.parentNode.childNodes.length;i++){
        obj.parentNode.children[i].lastElementChild.style.display="none";
        obj.lastElementChild.style.display="block"
    }
}

