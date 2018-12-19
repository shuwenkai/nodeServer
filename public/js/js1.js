/**
 * Created by Administrator on 2018\6\7 0007.
 */
function show(liclick){
    //console.log(liclick);
    var div=liclick.getElementsByClassName("on");
    //console.log(div.length);
    //console.log(liclick);
    if(liclick.style.height==""||liclick.style.height=="30px"){
        //console.log(div.length);
        liclick.style.height=(div.length+1)*30+"px";
    }else{
        liclick.style.height="30px";
    }

    var li=document.getElementsByClassName("li");
    for(var i=0;i<li.length;i++){
        if(li[i]!=liclick){
            li[i].style.height="30px";
        }
    }
}