const headerLateralMenu = document.querySelector('.header__navigation-mobile')
const openLateralMenuButton = document.querySelector('.header__navigation-btn')

console.log(headerLateralMenu)

openLateralMenuButton.addEventListener('click', (e) => {
    headerLateralMenu.classList.toggle("header__navigation-mobile--active")
})