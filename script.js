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
let filmButton = document.getElementById('film-button')
let speciesButton = document.getElementById('species-button')


function getPeople() {

    let numberPeople = Math.floor((Math.random()*83)+1)
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

        fetch('http://localhost:3000/people')
            .then(results => results.json())
            .then(data => {
                console.log(data)

                var img = document.getElementById('image')
                var src = img.getAttribute('src')

                function addImage() {
                    if (img.firstChild === null) {
                        var images = document.createElement('img')
                        images.src = data[numberPeople-1]['imgUrl']
                        images.id = "star-war-img"
                        img.appendChild(images)
                        console.log(src)

                    } else {
                        var imagesSW = document.getElementById('star-war-img')
                        img.removeChild(imagesSW)
                        var images = document.createElement('img')
                        images.src = data[numberPeople-1]['imgUrl']
                        images.id = "star-war-img"
                        img.appendChild(images)
                        console.log(src)
                    }
                }

                addImage()    
                               
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
        let gravity = document.getElementById('gravity')
        let population = document.getElementById('population')
        let rotationPeriod = document.getElementById('rotation-period')

        name.innerText = `Name: ${json['name']}`;
        diameter.innerText = `Diameter: ${json['diameter']}m`;
        climate.innerText = `Climate: ${json['climate']}`;
        gravity.innerText = `Gravity: ${json['gravity']}`;
        population.innerText = `Population: ${json['population']}`;
        rotationPeriod.innerText = `Rotation Period: ${json['rotation_period']}`;

        fetch('http://localhost:3000/planets')
            .then(results => results.json())
            .then(data => {
                console.log(data)


                var img = document.getElementById('image-planet')
                var src = img.getAttribute('src')

                function addImage() {
                    if (img.firstChild === null) {
                        var images = document.createElement('img')
                        images.src = data[numberPlanet-1]['imgUrl']
                        images.id = "star-war-img"
                        img.appendChild(images)
                        console.log(src)

                    } else {
                        var imagesSW = document.getElementById('star-war-img')
                        img.removeChild(imagesSW)
                        var images = document.createElement('img')
                        images.src = data[numberPlanet-1]['imgUrl']
                        images.id = "star-war-img"
                        img.appendChild(images)
                        console.log(src)
                    }
                }

                addImage()

            })

    })
    
}

function getFilm() {
    let numberFilm = Math.floor((Math.random()*6)+1)
    let apiUrl = 'https://swapi.dev/api/films/' +  numberFilm

    fetch(apiUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        console.log(json)
        let title = document.getElementById('film-name')
        let director = document.getElementById('director')
        let producer = document.getElementById('producer')
        let releaseDate = document.getElementById('release')
        let episodeNumber = document.getElementById('episode')

        title.innerText = `Name: ${json["title"]}`
        episodeNumber.innerText = `Episode: ${json['episode_id']}`
        director.innerText = `Director: ${json['director']}`
        producer.innerText = `Producer: ${json['producer']}`
        releaseDate.innerText = `Release: ${json['release_date']}`

        fetch('http://localhost:3000/films')
            .then(results => results.json())
            .then(data => {
                console.log(data)

                var img = document.getElementById('image-film')
                var src = img.getAttribute('src')

                function addImage() {
                    if(img.firstChild === null) {
                        var images = document.createElement('img')
                        images.src = data[numberFilm-1]['imgUrl']
                        images.id = 'star-war-img'
                        img.appendChild(images)
                        console.log(src)
                    } else {
                        var imagesSW = document.getElementById('star-war-img')
                        img.removeChild(imagesSW)
                        var images = document.createElement('img')
                        images.src = data[numberFilm-1]['imgUrl']
                        images.id = "star-war-img"
                        img.appendChild(images)
                        console.log(src)
                    }
                }

                addImage()
            })
        
    })

}


function getSpecies() {
    let numberSpecies = Math.floor((Math.random()*37)+1)
    let apiUrl = 'https://swapi.dev/api/species/' +  numberSpecies

    fetch(apiUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(json){
        console.log(json)
        let speciesName = document.getElementById('species-name')
        let classification = document.getElementById('classification')
        let avgHeight = document.getElementById('avg-height')
        let language = document.getElementById('language')
        let eyeColour = document.getElementById('eye-color')
        let lifespan = document.getElementById('lifespan')

        speciesName.innerText = `Name: ${json["name"]}`
        classification.innerText = `Classification: ${json["classification"]}`
        avgHeight.innerText = `Average Height: ${json["average_height"]}`
        language.innerText = `Language: ${json["language"]}`
        eyeColour.innerText = `Eye Colour: ${json["eye_colors"]}`
        lifespan.innerText = `Lifespan: ${json["average_lifespan"]}`

    })

}



peopleButton.addEventListener('click', getPeople)
planetButton.addEventListener('click', getPlanet)
filmButton.addEventListener('click', getFilm)
speciesButton.addEventListener('click',getSpecies)
