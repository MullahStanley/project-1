const base_src = "http://localhost:3000/meals";
function appendCarousel(meals) {
  let div = document.createElement("div")
  div.innerHTML = `
    <div class="carousel-inner" style="padding:10px;">
    <div class="carousel-item active">
      <img src="${meals.image}" class="d-block w-100" alt="${meals.name}">
      <div class="carousel-caption d-none d-md-block">
        <h>${meals.country}.</h3>
        <h5>${meals.name}.</h5>
        <p>${meals.description}.</p>
      </div>
    </div>
    </div>
    `
  document.querySelector("#div-1").appendChild(div)
}
//prev and next
function nextSlide() {
  fetch("http://localhost:3000/meals/id")
    .then(res => res.json())
    .then((meals) => {
      meals.forEach((id) => {
        prevSlide(id)
      })
    })
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

//table for displaying data
function tableAdd(meals) {
  let tableRow = document.createElement("tr")
  tableRow.id = "table-row"
  tableRow.innerHTML = `
  <th scope="row">${meals.id}</th>
  <td>${meals.country}</td>
  <td>${meals.name}</td>
  <td>${meals.image}</td>
  <td>${meals.description}</td>
  <td><button class="btn" style="background-colour:green;" id="edit">Edit</button></td>
  <td><button class="btn" style="background-colour:red;" id="delete">Remove</button></td>
  `
  document.querySelector("#table1").appendChild(tableRow)
  tableRow.querySelector("#edit").addEventListener("click", () => {
    updateMeals(meals.id)
  })
  tableRow.querySelector("delete").addEventListener("click", () => {
    tableRow.remove()
    deleteRecord(meals.id)
  })
}

//collect form data
let formData;
function gatherInfo() {
  const form = document.querySelector("#form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    formData = {
      name: e.target.name.value,
      country: e.target.country.value,
      image: e.target.image.value,
      description: e.target.description.value
    }
    postMeals()
  })
}
gatherInfo()
//POST
function postMeals() {
  fetch(base_src, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => console.log(data))
}
postMeals()
//updating meals
function updateMeals() {
  fetch(base_src, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify()
  })
    .then(res => res.json())
    .then(meals => console.log(meals))
}
updateMeals()
//deleting meals
function deleteRecord() {
  fetch(`${base_src / id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(meals => console.log(meals))
}
deleteRecord()
