let wishlist = JSON.parse(localStorage.getItem("wishlist")) || []

let container = document.getElementById("wishlist-items")

function displayWishlist(){

container.innerHTML=""

wishlist.forEach((product,index)=>{

container.innerHTML+=`

<div class="product wishlist-product">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick="removeWishlist(${index})">Remove</button>

</div>

`

})

}

function removeWishlist(index){

wishlist.splice(index,1)

localStorage.setItem("wishlist",JSON.stringify(wishlist))

displayWishlist()

}

displayWishlist()