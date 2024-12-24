export const MakeMobileMenu = () =>{
    const IconOpen = document.querySelector(".mobileMenuOpen");
const IconClose = document.querySelector(".mobileMenuClose");
// const mobileMenu__icon = document.querySelector(".mobileMenu__icon");
const mobile__menu = document.querySelector('.mobile__menu')
let btnClick = true;



document.querySelector(".mobileMenu__icon").addEventListener("click", () => {
  btnClick = !btnClick; 
  if (btnClick) {
    IconOpen.style.display = `block`;
    IconClose.style.display = `none`;
    mobile__menu.classList = 'mobile__menu'
  } else {
    IconOpen.style.display = `none`;
    IconClose.style.display = `block`;
    mobile__menu.classList += ' active'
  }
});

}