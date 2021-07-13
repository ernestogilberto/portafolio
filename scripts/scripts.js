const navegation = document.getElementById('nav')
const button = document.getElementById('hamburger')
button.addEventListener('click', () => {
    button.classList.toggle('active')
    navegation.classList.toggle('active')
})