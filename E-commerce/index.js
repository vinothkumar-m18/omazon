document.querySelector(".navbar-toggle").addEventListener("click", function(){
    document.querySelector(".side-navbar").style.left = "0";
})
document.querySelector(".side-navbar-close").addEventListener("click", function(){
    document.querySelector(".side-navbar").style.left = "-60%";
})