window.addEventListener("DOMContentLoaded",appendCarousel(meals))
function appendCarousel(meals){
    let div = document.createElement("div")
    div.innerHTML=`
    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${meals.id}" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${meals.id}" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${meals.id}" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">vie
      <img src="${meals.image}" class="d-block w-100" alt="${meals.name}">
      <div class="carousel-caption d-none d-md-block">
        <h5>${meals.country}</h5>
        <h4>${meals.name}</h4>
        <p>${meals.description}.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    `
    document.querySelector("#id-1").appendChild(div)
}

//fetching
function fetchMeals(meals){
    fetch("http://localhost:3000/meals")
    .then(res => res.json())
    .then(data =>()=>{
        data.array.forEach(meals => {
            appendCarousel(meals)
        });
    })

}