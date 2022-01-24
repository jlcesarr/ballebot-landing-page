const headerLateralMenu = document.querySelector('.header__lateral-navigation')
const openLateralMenuButton = document.querySelector('.header__lateral-menu-btn')

console.log(headerLateralMenu)

openLateralMenuButton.addEventListener('click', (e) => {
    headerLateralMenu.classList.toggle("header__lateral-navigation--active")
})