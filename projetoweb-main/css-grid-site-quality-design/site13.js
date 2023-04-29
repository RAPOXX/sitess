$(".abre-menu").click(function(){
    $(".menu").show()
    $(".menu-transparente").show()
    $("body").css("overflow","hidden")
})

$(".fecha-menu").click(function(){
    $(".menu").hide()
    $(".menu-transparente").hide()
    $("body").css("overflow","visible")
})

$(".menu-transparente").click(function(){
    $(".menu").hide()
    $(".menu-transparente").hide()
    $("body").css("overflow","visible")
})