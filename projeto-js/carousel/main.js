let imgs = ['https://images.noticiasautomotivas.com.br/img/f/bugatti-chiron-recorde-velocidade-3.jpg','https://media.gazetadopovo.com.br/2020/01/17155825/lamborghini-huracan-Alexander-Migl-wikimedia-commons.jpg']

const setadireita = document.getElementById('direita')
const setaesquerda = document.getElementById('esquerda')
const slide = document.getElementById('slide')

let contador = 0
let imagem = imgs[contador]

setadireita.addEventListener('click',() => {
    carregaimagem()
    console.log('click')
    contador++
})


function carregaimagem () {
    slide.style.background = `url(${imagem})`
    slide.style.backgroundRepeat = 'no-repeat'
    slide.style.backgroundSize = 'cover'
}