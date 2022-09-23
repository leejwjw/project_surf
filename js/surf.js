
$(function(){
    $(".hamBtn").click(function(){
        $("#nav").stop().animate({
            "opacity":1
        },300)
        $(".bg").css("display","block")
    })
    $(".bg").click(function(){
        $(".bg").css("display","none")
        $("#nav").stop().animate({
            "opacity":0
        },300)
    })
})