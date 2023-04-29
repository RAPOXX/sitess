const menu = document.getElementById("menu-sidebar")
const abre_menu = document.getElementById("abre-menu")
const fecha_menu = document.getElementById("fecha-menu")
const menu_transparente = document.getElementById("menu-transparente")
const body = document.getElementById("body")


abre_menu.addEventListener('click',() => {
    menu.style.display = "block"
    menu_transparente.style.display = "block"
    body.style.overflow = "hidden"
})

fecha_menu.addEventListener('click', () => {
    menu_transparente.style.display = "none"
    menu.style.display = "none"
    body.style.overflow = "visible"
})

menu_transparente.addEventListener('click' ,()=> {
    menu_transparente.style.display = "none"
    menu.style.display = "none"
    body.style.overflow = "visible"
})