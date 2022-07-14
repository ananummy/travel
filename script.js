let hamburger = document.querySelector('.hamburger-menu')
let menu = document.querySelector('.mobile')
hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active')
    menu.classList.toggle('active')
})
