const products=[

{
name:"Red Saree",
price:1699,
category:"saree",
image:"saree1.jpg.jpg"
},
{
name:"Cream Tisse Saree",
price:1189,
category:"saree",
image:"saree3.jpg"
},

{
name:"Peach Silk Saree",
price:2999,
category:"saree",
image:"saree2.jpg.jpg"
},
{
name:"New Tissue Saree",
price:1500,
category:"saree",
image:"saree4.jpg"
},
{
name:"Pink Heavy Georgette Saree",
price:2099,
category:"saree",
image:"saree5.jpg"
},
{
name:"Blue Organza Saree",
price:1789,
category:"saree",
image:"saree6.jpg"
},

{
name:"Mehndi Green Saree",
price:1988,
category:"saree",
image:"saree7.jpg"
},

{
name:"Lavender Saree",
price:959,
category:"saree",
image:"saree8.jpg"
},

{
name:"New Banarasi Silk Saree",
price:2000,
category:"saree",
image:"saree9.jpg"
},

{
name:"Gold Necklace",
price:1200,
category:"jewellery",
image:"jwellery2.jpg.jpg"
},

{
name:"Wedding Bangle Set",
price:720,
category:"jewellery",
image:"wbangle.jpg"
},
{
name:"Pink Bangle",
price:380,
category:"jewellery",
image:"pbangle.jpg"
},
{
name:"Stone Bangle",
price:120,
category:"jewellery",
image:"sbangle.jpg"
},

{
name:"Designer Bangle",
price:150,
category:"jewellery",
image:"dbangle.jpg"
},

{
name:"Trendy Kashmiri Bangle",
price:180,
category:"jewellery",
image:"deepteal.jpg"
},

{
name:"Golden Bangle",
price:250,
category:"jewellery",
image:"gbangle.jpg"
},
{
name:"Jhumka Bangle",
price:350,
category:"jewellery",
image:"jhbangle.jpg"
},
{
name:"Green Bangle Set",
price:120,
category:"jewellery",
image:"gbangleset.jpg"
},

{
name:"Kundan Necklace",
price:1500,
category:"jewellery",
image:"jwellery1.jpg.jpg"
},

{
name:"Trendy Bangles",
price:800,
category:"jewellery",
image:"jwellery4.jpg.jpg"
},

{
name:"Designer Bangles",
price:950,
category:"jewellery",
image:"jwellery3.jpg.jpg"
},
{
name:"Choker Necklace",
price:310,
category:"jewellery",
image:"cnl.jpg"
},

{
name:"Green Kundan Necklace",
price:440,
category:"jewellery",
image:"gknl.jpg"
},

{
name:"Pink Minimal Necklace",
price:280,
category:"jewellery",
image:"mnl.jpg"
},

{
name:"Pearl Necklace Set",
price:950,
category:"jewellery",
image:"nls.jpg"
},
{
name:"New Temple Necklace",
price:330,
category:"jewellery",
image:"tnl.jpg"
},
{
name:"Designer Necklace",
price:330,
category:"jewellery",
image:"wnl.jpg"
},

{
name:"Brown T-Shirt",
price:599,
category:"tshirt",
image:"tshirt2.jpg.jpg"
},

{
name:"White T-Shirt",
price:699,
category:"tshirt",
image:"tshirt1.jpg.jpg"
},
{
name:"Black T-Shirt",
price:759,
category:"tshirt",
image:"bts.jpg"
},
{
name:"Light Sky T-Shirt",
price:540,
category:"tshirt",
image:"lsts.jpg"
},
{
name:"Lavender T-Shirt",
price:800,
category:"tshirt",
image:"lts.jpg"
},
{
name:"Teal T-Shirt",
price:1200,
category:"tshirt",
image:"tts.jpg"
},
{
name:"Olive Green T-Shirt",
price:699,
category:"tshirt",
image:"ogts.jpg"
},
{
name:"Navy Blue T-Shirt",
price:999,
category:"tshirt",
image:"nbts.jpg"
}

]


const productList=document.getElementById("product-list")


function displayProducts(items){

productList.innerHTML=""

items.forEach((product,index)=>{

productList.innerHTML+=`

<div class="product">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick="addToCart(${index})">Add to Cart</button>

</div>

`

})

}


displayProducts(products)



function filterProducts(category){

if(category==="all"){

displayProducts(products)

}else{

const filtered=products.filter(p=>p.category===category)

displayProducts(filtered)

}

}



function addToCart(index){

let cart=JSON.parse(localStorage.getItem("cart")) || []

cart.push(products[index])

localStorage.setItem("cart",JSON.stringify(cart))

updateCart()

}



function updateCart(){

let cart=JSON.parse(localStorage.getItem("cart")) || []

document.getElementById("cart-count").innerText=cart.length

}

updateCart()



document.getElementById("search").addEventListener("keyup",function(){

let search=this.value.toLowerCase()

let filtered=products.filter(p=>p.name.toLowerCase().includes(search))

displayProducts(filtered)

})


function scrollProducts(){

document.getElementById("product-list").scrollIntoView({behavior:"smooth"})

}