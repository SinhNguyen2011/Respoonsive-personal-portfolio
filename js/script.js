// ==========================================DARK THEME ==========================================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// PREVIOUSLY SELECTED TOPIC (checking from local storage)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun'

// Need to validate if the user has previously chosen a topic
if(selectedTheme){
    document.body.classList[selectedTheme == 'dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon == 'uil-moon'?'add':'remove'](iconTheme)
}

// Activate/ Deactivate theme manually with button
themeButton.addEventListener('click', () => {
    // Add or remove the dark/light icon -- icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Save the theme and the current icon that the user has choose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
console.log("Theme setting is working!")

// ==========================Menu show y hidden==========================
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

//  =========================== Menu show ===========================
/* Validate if the constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

//  =========================== Menu hide ===========================
/* Validate if the constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

//  =========================== Remove Menu profile ===========================
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When click on nav__links, remove the show menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
// console.log("Remove menu profile is working")

