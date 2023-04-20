const header = window.document.querySelector('header')

function activeScroll() {
    header.classList.toggle('rolando', scrollY > 100)
}

window.addEventListener('scroll', activeScroll)