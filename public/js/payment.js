window.onload=function (){
  $(".bank").children(".radio-inline").children("input").prop("checked",true);
  border()
};


//选中状态
$(".bank").click(function () {
    $(this).children(".radio-inline").children("input").prop("checked",true);
    border();
});

function border() {
    $.each($(".bank"),function () {
        console.log($(this).css("border"));
        console.log($(this).children(".radio-inline").children("input").prop("checked"))
        if ($(this).children(".radio-inline").children("input").prop("checked")==true){
            $(this).css("border","rgba(138, 43, 226, 0.5) solid 2px")
        }
        else {
            $(this).css("border","rgba(138, 43, 226, 0.25) solid 2px")
        }
    })
}