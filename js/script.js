/* Navegação dos links do menu */
                                           /* Pega apenas os links com o valor do href iniciado em # */
const menuItens = document.querySelectorAll('.menu a[href^="#"]')

/* Eventos de clique dos links */
menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 80
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