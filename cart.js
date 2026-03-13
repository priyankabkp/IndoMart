const cartItemsContainer = document.getElementById("cart-items")
const totalPriceElement = document.getElementById("total-price")

let cart = JSON.parse(localStorage.getItem("cart")) || []

function displayCart(){

cartItemsContainer.innerHTML=""

let total=0

cart.forEach((item,index)=>{

total += item.price

cartItemsContainer.innerHTML += `

<div class="product">

<img src="${item.image}">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<button onclick="removeItem(${index})">Remove</button>

</div>

`

})

totalPriceElement.innerText = total

}

function removeItem(index){

cart.splice(index,1)

localStorage.setItem("cart",JSON.stringify(cart))

displayCart()

}

displayCart()