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
    tableRow.querySelector("#edit").addEventListener("click",()=>{
      updateMeals(meals.id)
    })
    tableRow.querySelector("#delete").addEventListener("click", () => {
      tableRow.remove()
      deleteRecord(meals.id)
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
    const form = document.querySelector("#form")
    //adding event listener for submitting form
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      const name= document.querySelector("#foodName");
      const country= document.querySelector("#country");
      const image= document.querySelector("#image");
      const description= document.querySelector("#description");
      //filling formData 
      formData= {}
        formData[country]=country.value,
        formData[foodName]=name.value,
        formData[image]=image.value,
        formData[description]=description.value
      /*formData = {
        country: e.target.country.value,
        foodName: e.target.foodName.value,
        image: e.target.image.value,
        description: e.target.description.value
      }*/

      postMeals(formData)
      tableAdd()
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
      .then(products => console.log(products))
  }
  postMeals()
  //updating meals
  function updateMeals(id) {
    fetch(`http://localhost:3000/meals/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({formData})
    })
      .then(res => res.json())
      .then((data) => console.log(data))
  }
  //deleting meals
  function deleteRecord(id) {
    fetch(`http://localhost:3000/meals/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data=> console.log(data))
  }