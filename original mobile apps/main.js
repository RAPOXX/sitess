const abre_menu = document.getElementById("abre-menu")
const fecha_menu = document.getElementById("fecha-menu")
const   body = document.getElementById("body")
const menu_transparente = document.getElementById("menu-transparente")
const menu  = document.getElementById("menu")

abre_menu.addEventListener("click" ,() => {
    menu.style.display = "block"
    menu_transparente.style.display = "block"
    body.style.overflow = "hidden"
    menu.style.width = "300px"
})
fecha_menu.addEventListener("click" ,() => {
    menu.style.display = "none"
    menu_transparente.style.display = "none"
    body.style.overflow = "visible"
})


menu_transparente.addEventListener("click", () => {
    menu_transparente.style.display = "none"
    body.style.overflow = "visible"
    menu.style.display = "none"

})