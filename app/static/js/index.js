const navBarControllerBtn =  document.querySelector('button#navbar-controller-btn')
const mainMenu = document.querySelector('menu#main-menu')
const mainNavBar = document.querySelector('nav#main-navbar')
const mainHeader = document.querySelector('header#main-header')
const mainNavLinks = mainNavBar.querySelectorAll('a.link-pattern')
const carouselTestimonies = document.querySelector('div#carousel-testimonies')
const checkoutBtnLinks = document.querySelectorAll('button.checkout-btn-link')

function checkHeaderBehavior() {
    if (window.scrollY >= 100) {
        if (!mainHeader.classList.contains('role')) {
            mainHeader.classList.add('role')
        }
    } else {
        if (mainHeader.classList.contains('role')) {
            mainHeader.classList.remove('role')
        }
    }
}

function setCarouselMode() {
    if (window.innerWidth >= 992) {
        if (!carouselTestimonies.classList.contains('carousel-fade')) {
            carouselTestimonies.classList.add('carousel-fade')
        }
    } else {
        if (carouselTestimonies.classList.contains('carousel-fade')) {
            carouselTestimonies.classList.remove('carousel-fade')
        }
    }
}

window.onload = function () {
    checkHeaderBehavior()
    setCarouselMode()
}

window.onscroll = checkHeaderBehavior
window.onresize = setCarouselMode

navBarControllerBtn.addEventListener('click', function () {
    if (mainMenu.classList.contains('closed')) {
        mainMenu.classList.replace('closed', 'opened')
        mainNavBar.classList.replace('closed', 'opened')
        navBarControllerBtn.classList.replace('list-btn', 'x-btn')
        if (window.scrollY <= 100) {
            mainHeader.classList.add('role')
        }

        document.body.style.overflowY = 'hidden'
    } else {
        mainMenu.classList.replace('opened', 'closed')
        mainNavBar.classList.replace('opened', 'closed')
        navBarControllerBtn.classList.replace('x-btn', 'list-btn')
        if (window.scrollY <= 100) {
            mainHeader.classList.remove('role')
        }

        document.body.style.overflowY = 'auto'
    }
})

mainNavLinks.forEach(navLink => {
    navLink.addEventListener('click', event => {
        event.preventDefault()
        navBarControllerBtn.click()
        const targetId = navLink.getAttribute('href')
        const targetElement = document.querySelector(`div${targetId}`)
        const headerHeight = mainHeader.offsetHeight
        const targetPosition = targetElement.offsetTop - headerHeight
        window.scrollTo({top: targetPosition})
    })
})

checkoutBtnLinks.forEach(btn => {
    btn.addEventListener('click', () => {
        location.href = 'checkout/'
    })
})

function handleSections(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.classList.contains('animated') === false) {
            if (entry.target.classList.contains('feature-img') === true) {
                entry.target.classList.add('factor-img-enter', 'animated')
            } else if (entry.target.classList.contains('feature-title') === true) {
                entry.target.classList.add('tracking-in-expand', 'animated')
            } else if (entry.target.classList.contains('feature-description') === true) {
                entry.target.classList.add('text-focus-in', 'animated')
            } else if (entry.target.classList.contains('title-area') === true) {
                entry.target.classList.add('tracking-in-expand', 'animated')
            } else if (entry.target.classList.contains('container-data') === true) {
                if (entry.target.classList.contains('data-1') === true) {
                    entry.target.classList.add('scale-degree-a')
                } else if (entry.target.classList.contains('data-2') === true) {
                    entry.target.classList.add('scale-degree-b')
                } else if (entry.target.classList.contains('data-3') === true) {
                    entry.target.classList.add('scale-degree-c')
                }
            } else if (entry.target.classList.contains('founder-bio') === true) {
                entry.target.classList.add('text-focus-in', 'animated')
            }

            if (entry.target.id == 'ceo-img') {
                entry.target.classList.add('scale-up-ver-center', 'animated')
            } else if (entry.target.id == 'support-description') {
                entry.target.classList.add('text-focus-in', 'animated')
            } else if (entry.target.id == 'support-btn') {
                entry.target.classList.add('scale-btn', 'animated')
            }
        }
    })
}

let intersectionOpt = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
}

let mainObserver = new IntersectionObserver(handleSections, intersectionOpt)
let targets = [document.querySelector('img#ceo-img'), document.querySelector('p#support-description'), document.querySelector('button#support-btn')]
document.querySelectorAll('img.feature-img').forEach(img => { targets.push(img) })
document.querySelectorAll('h2.feature-title').forEach(h2 => { targets.push(h2) })
document.querySelectorAll('p.feature-description').forEach(p => { targets.push(p) })
document.querySelectorAll('h2.title-area').forEach(h2 => { targets.push(h2) })
document.querySelectorAll('div.container-data').forEach(container => { targets.push(container) })
document.querySelectorAll('p.founder-bio').forEach(p => { targets.push(p) })
targets.forEach(target => { mainObserver.observe(target) })
