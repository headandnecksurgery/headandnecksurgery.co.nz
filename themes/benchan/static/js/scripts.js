/* preload hero image */
const img = new Image();
img.onload = function() { 
    console.log('loaded loader');
}
img.src = "/imgs/logo.png";

const imgBg = new Image();
imgBg.onload = function() { 
    if(document.getElementById('hero-bg')) {
        document.getElementById('hero-bg').classList.add("animated");
        document.getElementById('hero-bg').classList.add("fadeIn");
        document.getElementById('hero-bg').classList.remove("hidden");
    }
}
imgBg.src = "/imgs/hero.jpg";

/* Mobile menu */
window.addEventListener("load", function () {
    document.getElementById('menu-trigger').addEventListener('change', function() {
        const body = document.querySelector('body');
        if(this.checked) {
            body.classList.add('overflow-hidden');
        } else {
            body.classList.remove('overflow-hidden');
        }
    });
});

/*
 * General helper functions
 */
function scrollTo(elementId) {
    const el = document.getElementById(elementId);
    el.scrollIntoView();

}

/* catch top of page */
let top_of_page = true;
window.addEventListener("scroll", function(){
    let y = window.scrollY;
    if(!top_of_page && y <= 100) {
        document.getElementById('page-header').classList.add("page-at-top");
        top_of_page = true;
    } else if(top_of_page && y > 100) {
        document.getElementById('page-header').classList.remove("page-at-top");
        top_of_page = false;
    }
});
