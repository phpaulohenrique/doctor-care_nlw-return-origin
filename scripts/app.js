window.addEventListener('scroll', onScroll);

const navigation = document.getElementById('navigation')
const backToTopButton = document.getElementById("backToTopButton");

onScroll()


function onScroll(){
    showNavOnScroll();
    showBackToTopButtonOnScroll();

    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);
    activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2;

    // verificar se a seção passou da linha
    // quais dados vou precisar?
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop;

    // verificar se a base está abaixo da linha alvo

    const sectionEndsAt = sectionTop + sectionHeight;
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine;

    // limites da seção
    const sectionBoundaries =
        sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline;

    const sectionId = section.getAttribute("id");
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

    menuElement.classList.remove("active");
    if (sectionBoundaries) {
        menuElement.classList.add("active");
    }
}

function showNavOnScroll(){
    if (scrollY > 0) {
        navigation.classList.add("scroll");
    } else {
        navigation.classList.remove("scroll");
    }

}

function showBackToTopButtonOnScroll(){

    if (scrollY > 1400) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }

}


function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "150px",

  duration: 1600,
}).reveal(`
#home, 
#home img, 
#home .stats,
#services,
#services header,
#services .cards .card,
#about,
#about header,
#about .content`);
