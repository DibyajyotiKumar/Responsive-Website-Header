// hamburger menu

let navbarmenu = document.getElementById("navbar-menu");
let hamburgerclose = document.getElementById("hamburger-close");
let hamburgeropen = document.getElementById("hamburger-open");
let navbar = document.getElementById("navbar")


// hamburger function
function hamopen() {
    if (navbarmenu.style.display = 'none') {
        navbarmenu.style.display = 'block';
        navbar.style.backgroundColor = 'black';
        navbar.style.color = 'white';
        hamburgeropen.style.display = 'none';
        hamburgerclose.style.display = 'block';
    }
    else {
        navbarmenu.style.display = 'none';
    }
}

function hamclose() {
    if (navbarmenu.style.display != 'none') {
        navbarmenu.style.display = 'none';
        navbar.style.backgroundColor = 'inherit';
        navbar.style.color = 'black';
        hamburgerclose.style.display = 'none';
        hamburgeropen.style.display = 'block';
    }
}