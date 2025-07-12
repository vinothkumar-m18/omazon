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
