document.querySelector(".navbar-toggle").addEventListener("click", function(){
    document.querySelector(".side-navbar").style.left = "0";
})
document.querySelector(".side-navbar-close").addEventListener("click", function(){
    document.querySelector(".side-navbar").style.left = "-60%";
})
var search = document.querySelector("#search");
var products = document.querySelector(".products");
var productList = products.querySelectorAll("div");
search.addEventListener("keyup", function(event){
    var userInput = event.target.value.toUpperCase();
    for(let i = 0; i < productList.length; i++){
        var productName = productList[i].querySelector("p").textContent.toUpperCase();
        if(productName.indexOf(userInput) < 0){
            productList[i].style.display = "none";
        }else{
            productList[i].style.display = "block";
        }
    }
})
