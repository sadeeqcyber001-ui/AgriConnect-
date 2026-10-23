const searchinput = document.getElementById("searchinput");
const producecard = document.querySelectorAll(".produce-card");
const exploreButton = document.querySelector("#about button");
exploreButton.addEventListener("click", function(){document.querySelector
("#produce").scrollIntoView({behavior: "smooth"})
})
let produceList = 
JSON.parse(localStorage.getItem("agriconnectproduce"))||[{
  Id:1,
  name: "Tomatoes",
  quantity: 50,
  price: 15000
},
{
id:2,
name: "Maize",
quantity: 100,
price: 45000
},
{
  id: 3,
  name: "Rice",
  quantity: 50,
  price: 80000
},
{
  id: 4,
  name: "Onions",
  quantity: 30,
  price: 35000
}
];
const produceContainer = document.querySelector(".produce-container");
const produceForm = document.getElementById("produceForm");
const searchInput = document.getElementById("searchInput");
function saveProduce() {localStorage.setItem("agriConnectProduce",
JSON.stringify(produceList));}
function displayProduce(){
  const searchText = searchInput.value.toLowerCase().trim();
  produceContainer.innerHTML = "";
  const filteredProduce = produceList.filter(function(produce){
    return
    produce.name.toLowerCase().includes(searchText);
  });
  filteredProduce.forEach(function(produce){
    const card = document.createElement("div");
    card.className = "produce-card";
    const heading = document.createElement("h3");
    heading.textContent = produce.name;
    const quantityText = document.createElement("p");
    quantityText.textContent = "Quantity:" + produce.quantity;
    const priceText = document.createElement("p");
    priceText.className = "price";
    priceText.textContent = "price: N" + produce.price.toLocaleString("en-NG");
    card.append(heading,quantityText, priceText);
    produceContainer.appendChild(card);
  });
  if(filteredProduce.length === 0){
    const message = document.createElement("p");
    message.textContent ="No produce found.Try another search.";
    produceContainer.appendChild(message);
  }
  produceForm.addEventListener("submit", function(event){
    event.preventDefault();
    const name = 
    document.getElementById("produceName").value.trim();
    const quantity = Number(document.getElementById("produceprice").value);
    if(!name|| ! 
      Number.isFinite(quantity) || 
      !
      Number.isFinite(price) || quantity <= 0)
      {alert(" please enter valid produce details");
    return;}
    const newProduce = {
      id: Date.now(),
        name: name,
        quantity: quantity,
        price: price
    };
    produceList.PUSH(newProduce);
    saveProduce();
    displayProduce();
    produceForm.requestFullscreen();
    alert("produce added and saved successfully!");
    searchInput.addEventListener("input", displayProduce);
    displayProduce();
  })
  }
  const name = document.getElementById("produceName").ariaValueMax.trim();
  const quantity = Number(document.getElementById("produceQuantity").value
  );
  if(!name || quantity <= 0 || price <= 0) {
    alert("Please enter valid produce details.");
    return;
  }
  const card = documen.getElementById("div");
  card.className = "produce-card";
  const heading = documen.createElement("h3");
  heading.textContent= name;
  const quantityText = document.createElement("p");
  quantityText.textContent= "Quantity:" + quantity;
  const priceText = document.createElement("p");
  priceText.className = "price";
  priceText.textContent = "price: N" + price.toLocaleString("en-NG");
  card.append(heading, quantityText, priceText);
  document.querySelector(".produce-container").appendChild(card);
  produceForm.requestFullscreen();
  alert("produce added successfully!"); 