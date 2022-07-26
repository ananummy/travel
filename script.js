// бургер меню
const hamburger = document.querySelector('.hamburger-menu')
const menu = document.querySelector('.mobile')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('active')
    menu.classList.toggle('active')
}) 

//поп ап
const popup = document.querySelector('.popup-bg')
const popupButton = document.querySelector('.login-button')
const adaptivePopup = document.querySelector('.adaptive-login')

adaptivePopup.addEventListener('click', () => {
    popup.classList.toggle('active')
})

popupButton.addEventListener('click', () => {
    popup.classList.toggle('active')
})

popup.addEventListener('click', (event) => {
    if (event.target.classList.contains('popup-bg')) {
        popup.classList.toggle('active')
    }
})

const signIn = document.querySelector('.popup-button')

signIn.addEventListener('click', (event) => {
    let inputEmail = document.querySelector('.popup-email')
    alert(inputEmail.value) 
})

const registrationButton = document.querySelector('.register')

registrationButton.addEventListener('click', (event) => {
    document.querySelector('.facebook-popup').style.display = 'none'
    document.querySelector('.google-popup').style.display = 'none'
    document.querySelector('.or-container').style.display = 'none'
    document.querySelector('.forgot-password').style.display = 'none'
    document.querySelector('.text-account').style.display = 'none'
    document.querySelector('.form-line').style.display = 'none'
    document.querySelector('.popup-title').innerHTML = "Create an account"
    signIn.innerHTML = "Sign Up"
})

//слайдер 

const slide = document.getElementsByClassName("destination-item")
const dot = document.getElementsByClassName("slider-item")
const firstSlide = document.querySelector('.first-slide')
const secondSlide = document.querySelector('.second-slide')
const thirdSlide = document.querySelector('.third-slide')

let slideIndex = 2

firstSlide.addEventListener('click', forFirst)

secondSlide.addEventListener('click', forSecond)

thirdSlide.addEventListener('click', forThird)

function forFirst() {
    if (firstSlide.classList.contains('after-slide')) {
        secondSlide.classList.remove('after-slide')
        firstSlide.classList.remove('after-slide')
        thirdSlide.classList.remove('after-slide')
        dot[2].className = dot[2].className.replace(" active-dot", "")
    }

    firstSlide.classList.toggle('before-slide')
    secondSlide.classList.toggle('before-slide')
    thirdSlide.classList.toggle('before-slide')
    currentSlide(1)
}

function forSecond() {
    if (firstSlide.classList.contains('before-slide')) {
        firstSlide.classList.remove('before-slide')
        secondSlide.classList.remove('before-slide')
        thirdSlide.classList.remove('before-slide')
        dot[0].className = dot[0].className.replace(" active-dot", "")
    }

    if (firstSlide.classList.contains('after-slide')) {
        secondSlide.classList.remove('after-slide')
        firstSlide.classList.remove('after-slide')
        thirdSlide.classList.remove('after-slide')
        dot[2].className = dot[2].className.replace(" active-dot", "")
    }
    currentSlide(2)
}

function forThird() {
    if (firstSlide.classList.contains('before-slide')) {
        firstSlide.classList.remove('before-slide')
        secondSlide.classList.remove('before-slide')
        thirdSlide.classList.remove('before-slide')
        dot[0].className = dot[0].className.replace(" active-dot", "")
    }

    secondSlide.classList.toggle('after-slide')
    firstSlide.classList.toggle('after-slide')
    thirdSlide.classList.toggle('after-slide')
    currentSlide(3)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    for (let i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" active-dot", "")
    }
    dot[slideIndex - 1].className += " active-dot"
}

document.querySelector('.first-dot').addEventListener('click', forFirst)
document.querySelector('.second-dot').addEventListener('click', forSecond)
document.querySelector('.third-dot').addEventListener('click', forThird)

