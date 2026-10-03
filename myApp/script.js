// Show message when button is clicked

function showMessage() {
    alert("Hello! Thanks for visiting my website!");
}


// Dark mode

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});