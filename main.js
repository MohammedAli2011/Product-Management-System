// after access on elements
let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let btn = document.getElementById("btn");

// getTotal
function getTotal() {
    if(price.value != "") {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.style.background = "#198754"
        total.innerHTML = `Total : ${result}`
    }else {
        total.style.background = "#dc3545"
        total.innerHTML = "Total : "
    }
};