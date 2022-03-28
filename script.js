let button = document.getElementById('button')

function grab() {
    fetch('https://swapi.dev/api/people/1')
    .then(function(response){
        return response.json()
    })
    .then (function(json){
        console.log(json)
    })
}

button.addEventListener('click',grab)