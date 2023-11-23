console.log("hahah");

const menuToggle = document.querySelector('.menu-icon');
const nav = document.querySelector('.primary-nav-container');

menuToggle.addEventListener('click', () => {
    let visiblity = nav.getAttribute('visiblity');
    console.log(visiblity);
    if( visiblity === "false"){
        nav.setAttribute('visiblity', 'true');
    }else if(visiblity === "true") {
        nav.setAttribute('visiblity', 'false')
    }
    console.log("clicked");
})

console.log(menuToggle);
