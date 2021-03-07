let burger = document.querySelector('.burger')
let mobileMenu = document.querySelector('.mob-nav')
burger.onclick = function () {
    if(burger.classList.contains('active')){
        burger.classList.remove('active')
        mobileMenu.classList.remove('active')
    } else{
        burger.classList.add('active')
        mobileMenu.classList.add('active')
    }
}