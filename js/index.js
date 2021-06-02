const NavbarContent = document.querySelector(".hnazmul-navbar .hnazmul-navbar-container .hnazmul-navbar-content");
const navbarToggleIcon = document.querySelector(".hnazmul-navbar .hnazmul-navbar-container .hnazmul-nav-toggle-btn");
const navbarCloserIcon = document.querySelector(".hnazmul-navbar .hnazmul-navbar-container .hnazmul-navbar-content .hnazmul-navbar-content-wrapper button.navbar-closer-icon");

navbarToggleIcon.addEventListener("click", () => {
    NavbarContent.classList.toggle("navbar-show");
});
navbarCloserIcon.addEventListener("click", () => {
    NavbarContent.classList.toggle("navbar-show");
});

// javascript hider
var btns = document.querySelectorAll(".info-button");
if (btns) {
    btns.forEach(function (x, index) {
        x.addEventListener("click", function (event) {
            let info = document.getElementsByClassName("should-be-hidden")[index];
            info.classList.toggle("will-be-hidden");
        });
    });
}


const cartButton = document.querySelectorAll(".cart-button");
console.log(cartButton)

if (cartButton) {
    cartButton.forEach(function (x) {
        x.addEventListener("click", function () {
            alert("Product added to cart");
        });
    });
}

const hiddenItem = document.querySelector(".hnazmul-navbar .hnazmul-navbar-container .hnazmul-navbar-content .hnazmul-navbar-content-wrapper ul.navbar-list ");
console.log(hiddenItem);
document.querySelector("#hideUnhideButton__Akdar").addEventListener("click", () => {
    hiddenItem.classList.toggle("d-none");
});

// jquery hider start here

// $(document).ready(function () {
//     $("#hideUnhideButton").click(function () {
//         $(".itemhider").toggleClass("nav-hider")
//     });
// });
