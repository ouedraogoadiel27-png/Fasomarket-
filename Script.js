let cart=[];

const products=[
[1,"T-shirt Faso",5000,"Mode","Ouaga","https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"],
[2,"Pantalon Jeans",9000,"Mode","Ouaga","https://images.unsplash.com/photo-1542272604-787c3835535d?w=500"],
[3,"Robe femme",12000,"Mode","Ouaga","https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500"],
[4,"Chemise homme",8500,"Mode","Bobo","https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500"],
[5,"Casquette",3500,"Mode","Ouaga","https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500"],

[6,"Nike Air",25000,"Chaussures","Ouaga","https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"],
[7,"Basket blanche",18000,"Chaussures","Bobo","https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500"],
[8,"Sandales femme",7000,"Chaussures","Ouaga","https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500"],

[9,"Samsung Galaxy",85000,"Téléphones","Ouaga","https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500"],
[10,"iPhone",250000,"Téléphones","Ouaga","https://images.unsplash.com/photo-1592286927505-2fd7d9d2b7c7?w=500"],
[11,"Tecno Spark",65000,"Téléphones","Bobo","https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500"],

[12,"Casque Bluetooth",12000,"Électronique","Ouaga","https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"],
[13,"Enceinte Bluetooth",18000,"Électronique","Bobo","https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500"],
[14,"Power Bank",10000,"Électronique","Ouaga","https://images.unsplash.com/photo-1609592424613-5a2f9b8b6e0c?w=500"],

[15,"Ordinateur portable",280000,"Informatique","Ouaga","https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"],
[16,"Souris gaming",15000,"Informatique","Ouaga","https://images.unsplash.com/photo-1527814050087-3793815479db?w=500"],
[17,"Clavier gaming",25000,"Informatique","Bobo","https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500"],

[18,"Parfum homme",15000,"Beauté","Ouaga","https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500"],
[19,"Parfum femme",18000,"Beauté","Bobo","https://images.unsplash.com/photo-1541643600914-78b084683601?w=500"],
[20,"Kit maquillage",12000,"Beauté","Ouaga","https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500"],

[21,"Riz 5kg",4000,"Alimentation","Ouaga","https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500"],
[22,"Miel naturel",3500,"Alimentation","Koudougou","https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500"],
[23,"Café",2500,"Alimentation","Ouaga","https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500"],

[24,"Canapé moderne",180000,"Maison","Ouaga","https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500"],
[25,"Table à manger",95000,"Maison","Bobo","https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500"],
[26,"Lampe moderne",12000,"Maison","Ouaga","https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500"],

[27,"Ballon football",10000,"Sports","Ouaga","https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=500"],
[28,"Maillot football",12000,"Sports","Bobo","https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=500"],
[29,"Sac de sport",15000,"Sports","Koudougou","https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"],

[30,"Manette PS5",35000,"Gaming","Ouaga","https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500"],
[31,"Casque gaming",25000,"Gaming","Bobo","https://images.unsplash.com/photo-1599669454699-248893623440?w=500"],
[32,"Micro gaming",28000,"Gaming","Ouaga","https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500"]
].map(x=>({
id:x[0],name:x[1],price:x[2],category:x[3],city:x[4],image:x[5]
}));


const shops=[
["Faso Style","Ouagadougou","Mode","👕",
"https://images.unsplash.com/photo-1445205170230-053b83016050?w=700",[1,2,3,4,5]],

["Kadi Beauty","Ouagadougou","Beauté","💄",
"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700",[18,19,20]],

["Tech Burkina","Ouagadougou","Téléphones","📱",
"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700",[9,10,11]],

["Bobo Fashion","Bobo-Dioulasso","Mode & Chaussures","👟",
"https://images.unsplash.com/photo-1521334884684-d80222895322?w=700",[4,6,7,8]],

["Faso Informatique","Ouagadougou","Informatique","💻",
"https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700",[15,16,17]],

["Maison Élégance","Ouagadougou","Maison","🏠",
"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700",[24,25,26]],

["Faso Gaming","Ouagadougou","Gaming","🎮",
"https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=700",[30,31,32]],

["Sport 226","Koudougou","Sports","⚽",
"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=700",[27,28,29]],

["Marché Faso","Ouagadougou","Alimentation","🍔",
"https://images.unsplash.com/photo-1542838132-92c53300491e?w=700",[21,22,23]],

["Électro 226","Ouagadougou","Électronique","🔌",
"https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=700",[12,13,14]]
];


function card(p){
return `
<div class="product">
<div class="product-image">
<img src="${p.image}" alt="${p.name}">
</div>
<div class="product-info">
<h3>${p.name}</h3>
<p>📍 ${p.city}</p>
<div class="price">${p.price.toLocaleString("fr-FR")} F CFA</div>
<button class="add-button" onclick="addToCart(${p.id})">
🛒 Ajouter au panier
</button>
</div>
</div>`;
}


function displayProducts(list=products){
let box=document.getElementById("products");
if(box) box.innerHTML=list.map(card).join("");
}


function displayShops(){
let box=document.getElementById("shops");
if(!box)return;

box.innerHTML=shops.map((s,i)=>`
<div class="shop-card" onclick="openShop(${i})">
<div class="shop-cover"
style="background-image:url('${s[4]}')">
<div class="shop-cover-overlay">${s[3]}</div>
</div>
<div class="shop-info">
<h3>${s[0]}</h3>
<p>📍 ${s[1]}</p>
<p>${s[2]}</p>
<span class="shop-category">${s[2]}</span>
</div>
</div>
`).join("");
}


function openShop(i){
let s=shops[i];
let box=document.getElementById("shop-details");
let prod=document.getElementById("shop-products");

if(!box||!prod)return;

box.innerHTML=`
<div class="shop-header">
<img class="shop-header-image" src="${s[4]}" alt="${s[0]}">
<div class="shop-header-content">
<h1>${s[3]} ${s[0]}</h1>
<p>📍 ${s[1]}</p>
<p>🏷️ ${s[2]}</p>
</div>
</div>`;

prod.innerHTML=s[5]
.map(id=>products.find(p=>p.id===id))
.filter(Boolean)
.map(card).join("");

document.getElementById("shops-section").style.display="none";
document.getElementById("products-section").style.display="none";
document.getElementById("shop-page").style.display="block";

window.scrollTo(0,0);
}


function closeShop(){
document.getElementById("shops-section").style.display="block";
document.getElementById("products-section").style.display="block";
document.getElementById("shop-page").style.display="none";
}


function addToCart(id){
let p=products.find(x=>x.id===id);
if(!p)return;
cart.push(p);
updateCart();
alert(p.name+" ajouté au panier 🛒");
}


function updateCart(){
let count=document.getElementById("cart-count");
let box=document.getElementById("cart-items");
let total=document.getElementById("cart-total");

if(count)count.textContent=cart.length;
if(!box||!total)return;

box.innerHTML=cart.length
?cart.map((p,i)=>`
<div class="cart-item">
<div>${p.name}<br>${p.price.toLocaleString("fr-FR")} F CFA</div>
<button class="remove-button" onclick="removeFromCart(${i})">✕</button>
</div>`).join("")
:"<p>Votre panier est vide.</p>";

let t=cart.reduce((a,p)=>a+p.price,0);
total.textContent=t.toLocaleString("fr-FR")+" F CFA";
}


function removeFromCart(i){
cart.splice(i,1);
updateCart();
}


function openCart(){
document.getElementById("cart-modal").style.display="block";
}


function closeCart(){
document.getElementById("cart-modal").style.display="none";
}


function searchProducts(){
let q=document.getElementById("searchInput").value.toLowerCase();
displayProducts(products.filter(p=>
p.name.toLowerCase().includes(q)||
p.category.toLowerCase().includes(q)||
p.city.toLowerCase().includes(q)
));
}


function filterCategory(c){
displayProducts(products.filter(p=>p.category===c));
document.getElementById("products-section")
.scrollIntoView({behavior:"smooth"});
}


function orderWhatsApp(){

if(!cart.length){
alert("Votre panier est vide.");
return;
}

let msg="Bonjour FasoMarket 👋%0A%0A";
msg+="Je souhaite commander :%0A%0A";

cart.forEach((p,i)=>{
msg+=`${i+1}. ${p.name} - ${p.price} F CFA%0A`;
});

let total=cart.reduce((a,p)=>a+p.price,0);
msg+=`%0ATotal : ${total} F CFA`;

window.open(
"https://wa.me/22670000000?text="+msg,
"_blank"
);
}


document.addEventListener("DOMContentLoaded",()=>{
displayProducts();
displayShops();
updateCart();
});
