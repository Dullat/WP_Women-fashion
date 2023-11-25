console.log("hahah");

const menuToggle = document.querySelector('.menu-icon');
const nav = document.querySelector('.primary-nav-container');
const menuBtn = document.querySelector('.menu-icon');

menuToggle.addEventListener('click', () => {
    let visiblity = nav.getAttribute('visiblity');
    console.log(visiblity);
    if( visiblity === "false"){
        nav.setAttribute('visiblity', 'true');
        menuBtn.setAttribute('opened','true');
    }else if(visiblity === "true") {
        nav.setAttribute('visiblity', 'false');
        menuBtn.setAttribute('opened','false');
    }
    console.log("clicked");
})

console.log(menuToggle);
