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
    document.querySelector("#tble").appendChild(tableRow)
    tableRow.querySelector("#edit").addEventListener("click", () => {
      updateMeals()
    })
    tableRow.querySelector("#delete").addEventListener("click", () => {
      tableRow.remove()
      deleteRecord()
    })
  }
  //fetching
function fetchTable() {
  fetch("http://localhost:3000/meals")
    .then(res => res.json())
    .then((meals) => {
      meals.forEach((meal) => {
        tableAdd(meal)
      })
    })
}
fetchTable()
  //collect form data
  let formData;
  function gatherInfo() {
    const form = document.querySelector("#btn1")
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      formData = {
        Country: e.target.meals.country,
        Food: e.target.meals.name,
        Image: e.target.mealsimage,
        Description: e.target.meals.description
      }
      postMeals()
    })
  }
  gatherInfo()
  //POST
  function postMeals() {
    fetch("http://localhost:3000/meals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(meals => (meals))
  }
  postMeals()
  //updating meals
  function updateMeals() {
    fetch("http://localhost:3000/meals", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({formData})
    })
      .then(res => res.json())
      .then(data => data)
  }
  updateMeals()
  //deleting meals
  function deleteRecord() {
    fetch("http://localhost:3000/meals", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    })
      .then(res => res.json())
      .then(data => (data))
  }
  deleteRecord()
  