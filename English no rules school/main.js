const abre_menu = document.getElementById("abre-menu")
const fecha_menu = document.getElementById("fecha-menu")
const sidebar = document.getElementById("sidebar")
const sidebar_transparente = document.getElementById("sidebar-transparente")
const body = document.querySelector("body")


abre_menu.addEventListener("click", () => {
    sidebar.style.visibility = "visible"
    sidebar.style.width = "300px"
    sidebar_transparente.style.display = "block"
    body.style.overflowY = "hidden"
})

fecha_menu.addEventListener("click" ,() => {
    sidebar.style.width  = "0"
    sidebar.style.visibility = "hidden"
    sidebar_transparente.style.display = "none"
    body.style.overflowY = "visible"

})


sidebar_transparente.addEventListener("click" ,() => {
    sidebar.style.width  = "0"
    sidebar.style.visibility = "hidden"
    sidebar_transparente.style.display = "none"
    body.style.overflowY = "visible"

})
