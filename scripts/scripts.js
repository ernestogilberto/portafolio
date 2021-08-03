const navigation = document.getElementById('nav')
const button = document.getElementById('hamburger')
button.addEventListener('click', () => {
    button.classList.toggle('active')
    navigation.classList.toggle('active')
})