const data = [

{
id:1,
country:"India 🇮🇳",
region:"asia",
rating:"4.8",
image:"https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
map:"https://www.google.com/maps?q=India&output=embed",
places:["Taj Mahal","Goa","Kerala","Jaipur"],
food:["Biryani","Dosa","Butter Chicken"],
culture:["Diwali","Yoga","Holi"],
price:25000
},

{
id:2,
country:"Thailand 🇹🇭",
region:"asia",
rating:"4.7",
image:"https://images.unsplash.com/photo-1506665531195-3566af2b4dfa",
map:"https://www.google.com/maps?q=Thailand&output=embed",
places:["Bangkok","Phuket","Chiang Mai"],
food:["Pad Thai","Tom Yum"],
culture:["Temples","Festivals"],
price:45000
},

{
id:3,
country:"Japan 🇯🇵",
region:"asia",
rating:"4.9",
image:"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
map:"https://www.google.com/maps?q=Japan&output=embed",
places:["Tokyo","Kyoto","Mount Fuji"],
food:["Sushi","Ramen"],
culture:["Anime","Cherry Blossom"],
price:125000
},

{
id:4,
country:"Indonesia 🇮🇩",
region:"asia",
rating:"4.8",
image:"https://images.unsplash.com/photo-1537996194471-e657df975ab4",
map:"https://www.google.com/maps?q=Indonesia&output=embed",
places:["Bali","Jakarta","Lombok"],
food:["Nasi Goreng","Satay"],
culture:["Traditional Dance","Temples"],
price:55000
},

{
id:5,
country:"France 🇫🇷",
region:"europe",
rating:"4.9",
image:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
map:"https://www.google.com/maps?q=France&output=embed",
places:["Paris","Nice","Louvre"],
food:["Croissant","Cheese"],
culture:["Fashion","Art"],
price:75000
},

{
id:6,
country:"Italy 🇮🇹",
region:"europe",
rating:"4.8",
image:"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
map:"https://www.google.com/maps?q=Italy&output=embed",
places:["Rome","Venice","Milan"],
food:["Pizza","Pasta"],
culture:["History","Architecture"],
price:85000
},

{
id:7,
country:"Netherlands 🇳🇱",
region:"europe",
rating:"4.7",
image:"https://images.unsplash.com/photo-1512470876302-972faa2aa9a4",
map:"https://www.google.com/maps?q=Netherlands&output=embed",
places:["Amsterdam","Rotterdam"],
food:["Stroopwafel","Cheese"],
culture:["Cycling","Tulips"],
price:95000
},

{
id:8,
country:"Spain 🇪🇸",
region:"europe",
rating:"4.8",
image:"https://images.unsplash.com/photo-1543783207-ec64e4d95325",
map:"https://www.google.com/maps?q=Spain&output=embed",
places:["Barcelona","Madrid","Seville"],
food:["Paella","Tapas"],
culture:["Flamenco","Festivals"],
price:85000
},

{
id:9,
country:"England 🇬🇧",
region:"europe",
rating:"4.8",
image:"https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
map:"https://www.google.com/maps?q=England&output=embed",
places:["London","Manchester","Liverpool"],
food:["Fish & Chips","Pie"],
culture:["Royal Heritage","Football"],
price:100000
},

{
id:10,
country:"Egypt 🇪🇬",
region:"africa",
rating:"4.7",
image:"https://images.unsplash.com/photo-1572252009286-268acec5ca0a",
map:"https://www.google.com/maps?q=Egypt&output=embed",
places:["Cairo","Giza","Luxor"],
food:["Koshari","Falafel"],
culture:["Pyramids","Ancient History"],
price:65000
},

{
id:11,
country:"San Francisco 🇺🇸",
region:"america",
rating:"4.8",
image:"https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
map:"https://www.google.com/maps?q=San+Francisco&output=embed",
places:["Golden Gate Bridge","Alcatraz","Fisherman's Wharf"],
food:["Seafood","Sourdough Bread"],
culture:["Technology","Innovation"],
price:120000
},

{
id:12,
country:"New Zealand 🇳🇿",
region:"oceania",
rating:"4.9",
image:"https://images.unsplash.com/photo-1469521669194-babb45599def",
map:"https://www.google.com/maps?q=New+Zealand&output=embed",
places:["Auckland","Queenstown","Milford Sound"],
food:["Lamb","Seafood"],
culture:["Maori Heritage","Nature"],
price:135000
},

{
id:13,
country:"Iceland 🇮🇸",
region:"europe",
rating:"4.9",
image:"https://images.unsplash.com/photo-1504893524553-b855bce32c67",
map:"https://www.google.com/maps?q=Iceland&output=embed",
places:["Reykjavik","Blue Lagoon","Golden Circle"],
food:["Seafood","Lamb"],
culture:["Northern Lights","Vikings"],
price:140000
},

{
id:14,
country:"Maldives 🇲🇻",
region:"asia",
rating:"5.0",
image:"https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
map:"https://www.google.com/maps?q=Maldives&output=embed",
places:["Male","Vaadhoo Island","Maafushi"],
food:["Tuna Curry","Mas Huni"],
culture:["Island Life","Marine Tourism"],
price:150000
}

];

function renderCountries(countries){

const container =
document.getElementById("countryContainer");

if(!container) return;

container.innerHTML = countries.map(country =>

`<div class="card">

<div class="img-box">

<img src="${country.image}" alt="${country.country}">

<div class="rating">
⭐ ${country.rating}
</div>

</div>

<h3>${country.country}</h3>

<div class="tags">
<span>${country.region.toUpperCase()}</span>
</div>

<p>
Starting From ₹${country.price.toLocaleString()}
</p>

<button onclick="viewDetails(${country.id})">
Explore
</button>

<button onclick="openMap(${country.id})">
Map
</button>

<button onclick="goBook(${country.id})">
Book
</button>

</div>`

).join("");
}

function loadCountries(){
renderCountries(data);
}

function filterRegion(region){

if(region === "all"){
renderCountries(data);
return;
}

const filtered =
data.filter(country =>
country.region === region
);

renderCountries(filtered);
}

function filterByPrice(range){

let filtered = data;

if(range === "low"){
filtered =
data.filter(country =>
country.price < 50000
);
}

if(range === "mid"){
filtered =
data.filter(country =>
country.price >= 50000 &&
country.price <= 100000
);
}

if(range === "high"){
filtered =
data.filter(country =>
country.price > 100000
);
}

renderCountries(filtered);
}

function searchCountry(){

const value =
document
.getElementById("searchBox")
.value
.toLowerCase();

const filtered =
data.filter(country =>
country.country
.toLowerCase()
.includes(value)
);

renderCountries(filtered);
}

function viewDetails(id){

const country =
data.find(item =>
item.id === id
);

const box =
document.getElementById("detailsBox");

if(!box) return;

box.innerHTML =

`<div class="detail">

<h2>${country.country}</h2>

<h3>📍 Popular Places</h3>
<p>${country.places.join(", ")}</p>

<h3>🍜 Famous Food</h3>
<p>${country.food.join(", ")}</p>

<h3>🎭 Culture</h3>
<p>${country.culture.join(", ")}</p>

<h3>⭐ Rating</h3>
<p>${country.rating} / 5</p>

<h3>💰 Package Price</h3>
<p>₹${country.price.toLocaleString()}</p>

<iframe
src="${country.map}"
loading="lazy">
</iframe>

<br><br>

<button onclick="goBook(${country.id})">
Book Now
</button>

</div>`;

box.scrollIntoView({
behavior:"smooth"
});
}

function openMap(id){

const country =
data.find(item =>
item.id === id
);

window.open(
country.map,
"_blank"
);
}

function goBook(id){

const country =
data.find(item =>
item.id === id
);

localStorage.setItem(
"selectedCountry",
JSON.stringify(country)
);

window.location.href =
"book.html";
}

function fillDropdown(){

const select =
document.getElementById(
"countrySelect"
);

if(!select) return;

select.innerHTML = "";

data.forEach(country => {

const option =
document.createElement(
"option"
);

option.value =
country.country;

option.textContent =
country.country;

select.appendChild(option);

});

const selected =
JSON.parse(
localStorage.getItem(
"selectedCountry"
)
);

if(selected){
select.value =
selected.country;
}
}

function submitBooking(){

const name =
document
.getElementById("name")
.value
.trim();

const email =
document
.getElementById("email")
.value
.trim();

const phone =
document
.getElementById("phone")
.value
.trim();

const country =
document
.getElementById("countrySelect")
.value;

const date =
document
.getElementById("date")
.value;

const emailPattern =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(
!name ||
!email ||
!phone ||
!country ||
!date
){
alert(
"Please fill all fields."
);
return;
}

if(
!emailPattern.test(email)
){
alert(
"Enter a valid email."
);
return;
}

if(
phone.length < 10
){
alert(
"Enter valid phone number."
);
return;
}

alert(
`🎉 Booking Request Received!
    We'll contact you within 24 hours with a full itinerary and pricing. Get excited — your adventure is coming!

Destination: ${country}

Thank you for choosing Wonder World!`
);

window.location.href =
"index.html";
}

document.addEventListener(
"DOMContentLoaded",
() => {

loadCountries();

fillDropdown();

}
);
let scrollTimer;

window.addEventListener("scroll", () => {
document.body.classList.add("scrolling");

clearTimeout(scrollTimer);

scrollTimer = setTimeout(() => {
document.body.classList.remove("scrolling");
}, 150);
});