document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".menu-btn").addEventListener("click", function() {
        console.log("Menu button clicked!");
        document.querySelector(".sidebar").classList.toggle("active");
    });
});