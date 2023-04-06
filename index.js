const base_src="http://localhost:3000/meals";
function appendCarousel(meals){
    let div = document.createElement("div")
    div.innerHTML=`
    <div class="w3-card-4" id="card">
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

//table for displaying data
function forms(meals){
  let tableRow= document.createElement("tr")
  tableRow.id= "table-row"
  tableRow.innerHTML=`
  <th scope="row">${meals.id}</th>
  <td>${meals.country}</td>
  <td>${meals.name}</td>
  <td>${meals.image}</td>
  <td><button class="btn" style="background-colour:green;" id="edit">Add</button></td>
  <td><button class="btn" style="background-colour:red;" id="delete">Remove</button></td>
  `
  document.querySelector("#table-body").appendChild(tableRow)
  tableRow.querySelector("#edit").addEventListener("click",()=>{
    updateMeals(meals.id)
  })
  tableRow.querySelector("delete").addEventListener("click",()=>{
    tableRow.remove()
    deleteRecord(meals.id)
  })
}
forms()
//collect form data
let formData;
function gatherInfo(){
  let form= document.querySelector("#form")
  form.addEventListener("submit",(event)=>{
    event.preventDefault()
    formData= {
      name: event.target.name.value,
      country: event.target.country.value,
      image:event.target.image.value,
      description:event.target.description.value
    }
    postMeals()
  })
}
gatherInfo(); 

//POST
function postMeals(){
  fetch(base_src,{
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(meals=>console.log(meals))
}
postMeals()
//updating meals
function updateMeals(){
  fetch(base_src,{
    method: "PATCH",
    headers: {
      "Content-Type":"application/json"
    },
    body : JSON.stringify({
      meals})
  })
  .then(res=>res.json())
  .then(meals=>console.log(meals))
}
updateMeals()
//deleting meals
function deleteRecord(){
  fetch(`${base_src/id}`,{
    method: "DELETE",
    headers:{
      "Content-Type": "application/json"
    }
  })
  .then (res=> res.json())
  .then (meals=>console.log(meals))
}
deleteRecord()
