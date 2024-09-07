document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".menu-btn").addEventListener("click", function() {
        console.log("Menu button clicked!");
        document.querySelector(".sidebar").classList.toggle("active");
    });
});

var typed = new Typed(".auto_type", {
    strings : ["Engineer", "Data Scientist", 'Developer', "Coder", "Designer"],
    typeSpeed : 300,
    backSpeed : 150,
    loop : true,
})