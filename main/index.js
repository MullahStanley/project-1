function appendCarousel(meals) {
  let div = document.createElement("div")
  /*div.innerHTML = `
    <div class="carousel-inner" style="padding:10px;">
    <div class="carousel-item active">
      <img src="${meals.image}" class="d-block w-100" alt="${meals.name}" title="${meals.description}">
      <div class="carousel-caption d-none d-md-block" id="divi">
        <h>${meals.country}.</h3>
        <h5>${meals.name}.</h5>
        <p>${meals.description}.</p>
      </div>
    </div>
    </div>
    `*/
    div.className= "card-container"
    div.innerHTML =`
    <div class="card">
    <img src="${meals.image}" class="card-img-top" alt="${meals.name}" title="${meals.description}">
    <div class="card-body">
    <h3 class="card-text">${meals.name}</h3>
    <h4 class="card-text">${meals.country}</h4>
    <p class="card-text">${meals.description}.</p>
    </div>
    </div>
    `
  document.querySelector("#div-1").appendChild(div)
}
//fetching
function fetchMeals() {
  fetch("http://localhost:3000/meals")
    .then(res => res.json())
    .then((meals) => {
      meals.forEach((meal) => {
        appendCarousel(meal)
      })
    })
}
fetchMeals()

