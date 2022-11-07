const openBtn = document.getElementById('hamburger-js')
const closeBtn = document.getElementById('exit-js')
const navBar = document.getElementById('nav-js')

const pageWidth = document.documentElement.clientWidth;



openBtn.addEventListener('click', () => {
    navBar.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    navBar.classList.remove('active')
})


