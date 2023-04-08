const base_src = "http://localhost:3000/meals";
function appendCarousel(meals) {
  let div = document.createElement("div")
  div.innerHTML = `
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
    `
  document.querySelector("#div-1").appendChild(div)
}
//fetching
function fetchMeals() {
  fetch(base_src)
    .then(res => res.json())
    .then((meals) => {
      meals.forEach((meal) => {
        appendCarousel(meal)
      })
    })
}
fetchMeals()

