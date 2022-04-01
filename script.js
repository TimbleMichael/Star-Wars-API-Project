const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click',() => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})


let peopleButton = document.getElementById('people-button')
let planetButton = document.getElementById('planet-button')


function getPeople() {

    let numberPeople = Math.floor((Math.random()*82)+1)
    let apiUrl = 'https://swapi.dev/api/people/' +  numberPeople 

    fetch(apiUrl)
    .then(function(response){
        return response.json()
    })
    .then (function(json){
        console.log(json)
        let name = document.getElementById('name')
        let DOB = document.getElementById('DOB')
        let height = document.getElementById('height')
        let weight = document.getElementById('weight')
        let gender = document.getElementById('gender')

        name.innerText = `Name: ${json['name']}`;
        DOB.innerText = `Date of Brith: ${json['birth_year']}`;
        height.innerText = `Height: ${json['height']}`;
        weight.innerText = `Weight: ${json['mass']}`;
        gender.innerText = `Gender: ${json['gender']}`;
    })
}

function getPlanet() {

    let numberPlanet = Math.floor((Math.random()*60)+1)
    let apiUrl = 'https://swapi.dev/api/planets/' +  numberPlanet

    fetch(apiUrl)
    .then(function(response){
        return response.json()
    })
    .then (function(json){
        console.log(json)
        let name = document.getElementById('planet-name')
        let climate = document.getElementById('climate')
        let terrain = document.getElementById('terrain')
        let population = document.getElementById('population')
        let rotationPeriod = document.getElementById('rotation-period')

        name.innerText = `Name: ${json['name']}`;
        climate.innerText = `Climate: ${json['climate']}`;
        terrain.innerText = `Terrain: ${json['terrain']}`;
        population.innerText = `Population: ${json['population']}`;
        rotationPeriod.innerText = `Rotation Period: ${json['rotation_period']}`;

    })
}


peopleButton.addEventListener('click', getPeople)
planetButton.addEventListener('click', getPlanet)
