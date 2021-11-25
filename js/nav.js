const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile__nav--toggle');

navToggle.addEventListener('click', () => {
const visibility = primaryNav.getAttribute('data-visible')

if (visibility === "false"){
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true)
} else if (visibility === "true") {
    primaryNav.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
}
})

let lastScrollTop = 0;
    navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        if (scrollLeft > lastScrollTop) {
            navbar.style.Left="100px";
        } else {
            navbar.style.Left="-100px"
        }
        lastScrollTop = scrollLeft
    })


