// after access on elements
let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let totalC = document.getElementById("totalC");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let btn = document.getElementById("btn");

// getTotal
function getTotal() {
    if(price.value != "") {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        totalC.classList.remove("bg-danger");
        totalC.classList.add("bg-success");
        total.innerHTML = result;
    }else {
        totalC.style.background = "#dc3545";
        total.innerHTML = "";
    };
};
// create products
let pro;
if(localStorage.pro != null) {
    pro = JSON.parse(localStorage.pro);
}else{
    pro=[];
};
btn.onclick = function() {
    let products ={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    };
    pro.push(products);
    localStorage.setItem("pro", JSON.stringify(pro) );
    console.log(pro);
};
// clear inputs