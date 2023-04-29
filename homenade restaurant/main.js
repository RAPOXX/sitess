const menu = document.getElementById("menu")
const abre_menu = document.getElementById("abre-menu")
const fecha_menu = document.getElementById("fecha-menu")
const menu_transparente = document.getElementById("menu-transparente")
const body = document.getElementById("body")



abre_menu.addEventListener('click',() => {
    menu.style.display = "block"
    menu_transparente.style.display = "block"
    body.style.display = "hidden"
})

fecha_menu.addEventListener('click', () => {
    menu.style.display = "none"
    menu_transparente.style.display = "none"
    body.style.overflow = "visible"

})

menu_transparente.addEventListener('click' , ()=> {
    menu.style.display = "none"
    menu_transparente.style.display = "none"
    body.style.overflow = "visible"
})