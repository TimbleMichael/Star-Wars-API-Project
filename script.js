// Tab-Nav selection


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

// Fetching information from SWAPI

let peopleButton = document.getElementById('people-button')
let planetButton = document.getElementById('planet-button')
let speciesButton = document.getElementById('species-button')



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
        height.innerText = `Height: ${json['height']} cm`;
        weight.innerText = `Weight: ${json['mass']} kg`;
        gender.innerText = `Gender: ${json['gender']}`;
    
        
        fetch(`${json['homeworld']}`)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            console.log(json)
            let homeWorld = document.getElementById('home-world')

            homeWorld.innerText = `Home Planet: ${json['name']}`;
        })

        fetch('./db.json')
            .then(results => results.json())
            .then(data => {
                console.log(data.people)

                var url = data.people[numberPeople-1]['imgUrl']
                
                var image = new Image();
                image.src = url
                image.width = 400;
                image.height = 400;

                document.getElementById('header').appendChild(image)

            })

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
        let diameter = document.getElementById('diameter')
        let climate = document.getElementById('climate')
        let terrain = document.getElementById('terrain')
        let population = document.getElementById('population')
        let rotationPeriod = document.getElementById('rotation-period')

        name.innerText = `Name: ${json['name']}`;
        diameter.innerText = `Diameter: ${json['diameter']}m`;
        climate.innerText = `Climate: ${json['climate']}`;
        terrain.innerText = `Terrain: ${json['terrain']}`;
        population.innerText = `Population: ${json['population']}`;
        rotationPeriod.innerText = `Rotation Period: ${json['rotation_period']}`;
    })
    
}

function getSpecies() {

    let numberSpecies = Math.floor((Math.random()*37)+1)
    let apiUrl = 'https://swapi.dev/api/species/' +  numberSpecies

    fetch(apiUrl)
    .then(function(response){
        return response.json()
    })
    .then (function(json){
        console.log(json)
        let name = document.getElementById('species-name')
        let classification = document.getElementById('classification')
        let designation = document.getElementById('designation')
        let language = document.getElementById('language')
        let lifespan = document.getElementById('lifespan')

        name.innerText = `Species Name: ${json['name']}`;
        classification.innerText = `Classification: ${json['classification']}`;
        designation.innerText = `Designation: ${json['designation']}`;
        language.innerText = `Language: ${json['language']}`;
        lifespan.innerText = `Lifespan: ${json['average_lifespan']} years`;


        // fetch('https://swapi.dev/api/species/1')
        // .then(response => response.json())
        // .then(data => {
        //     loadPeople(data)
        // })

        // loadPeople = (data) => {
        //     const urls = data.people
            
        //     const promises = urls.map(url => fetch(url)
        //         .then(r => r.json())
                
        //         .then(person => person.name));
            
        //     Promise.all(promises)
        //         .then(nameArray => {
                    
        //         })
        // }


        Promise.all(json.people.map(url => fetch(url)
        .then(r => r.json())
        .then(details => details.name)))
        .then(names => document.getElementById('inhabitants').innerText = "Inhabitants: " + names.join(', '));

    })
    
}

peopleButton.addEventListener('click', getPeople)
planetButton.addEventListener('click', getPlanet)
speciesButton.addEventListener('click', getSpecies)
