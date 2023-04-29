$(".abre-menu").click(function(){
    $(".menu").show()
    $(".menu-transparente").show()
    $("body").css("overflow","hidden")
    $("menu").css("transition","width","2s")
})

$(".menu-transparente").click(function(){
    $(".menu").hide()
    $(".menu-transparente").hide()
    $("body").css("overflow","visible")
})

$(".fecha-menu").click(function(){
    $(".menu").hide()
    $(".menu-transparente").hide()
    $("body").css("overflow","visible")
})

