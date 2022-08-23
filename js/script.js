/* Navegação dos links do menu */
                                           /* Pega apenas os links com o valor do href iniciado em # */
const menuItens = document.querySelectorAll('.menu a[href^="#"]')

/* Eventos de clique dos links */
menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 40
    scrollToPosition(to)
}

function getScrollTopByHref(element) {
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop
}

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth",
    })
}

/* Estrelas */

const star = document.querySelector('.stars')

var shadowConstruct = ""
for (let i = 0; i < 10; i++) {
    shadowConstruct += `${getRandom(500)}px ${getRandom(500)}px white,`
}

const shadowFinal = shadowConstruct.substring(0, shadowConstruct.length - 1);

star.style.boxShadow = shadowFinal

/* Gera um número aleatório inteiro passando o valor máximo */
function getRandom(max) {
    return Math.floor(Math.random() * max + 1)
}