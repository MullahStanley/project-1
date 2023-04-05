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
//event listeners
function forms(meals){
  let tableRow= document.createElement("tr")
  tableRow.id= "table-row"
  tableRow.innerHTML=`
  <th scope="row">${meals.id}</th>
  <td>${meals.country}</td>
  <td>${meals.name}</td>
  <td>${meals.image}</td>
  <td><button class="btn" style="background-colour:green;" id="edit">Review</button></td>
  <td><button class="btn" style="background-colour:red;" id="delete">Review</button></td>
  `

}