let menu = document.getElementById("menu2")
let abre_menu = document.getElementById("abre-menu")
let fecha_menu = document.getElementById("fecha-menu")
let menu_transparente = document.getElementById("menu-transparente")
let menu_responsivo = document.getElementById("menu-responsivo")
let body = document.getElementById("body")


abre_menu.addEventListener('click',() => {
    menu_responsivo.style.display = "block"
    menu_transparente.style.display = "block"
    body.style.overflow = "hidden"
})

fecha_menu.addEventListener('click',() => {
    menu_responsivo.style.display = "none"
    menu_transparente.style.display = "none"
    body.style.overflow = "visible"
})

menu_transparente.addEventListener('click',() => {
    menu_responsivo.style.display = "none"
    menu_transparente.style.display = "none"
    body.style.overflow = "visible"
})