const base_src="http://localhost:3000/meals";
function appendCarousel(meals){
    let div = document.createElement("div")
    div.innerHTML=`
    <div class="w3-card-4">
  <div class="w3-container w3-center">
    <h2>${meals.name}</h2>
    <h3>${meals.country}</h3>
    <p>${meals.description}</p>
  </div>
  <img src="${meals.image}" alt="${meals.name}">
  </div>
    `
    document.querySelector("#div-1").appendChild(div)
}

//fetching
function fetchMeals(){
    fetch(base_src)
    .then(res => res.json())
    .then((meals)=>{
      meals.forEach((meal)=>{
        appendCarousel(meal)
      })
    })
}
fetchMeals()