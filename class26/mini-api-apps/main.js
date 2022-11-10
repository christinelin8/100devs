document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const choice = document.querySelector('input').value
    const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

    fetch(url)
        .then(res => res.json())
        .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.name
        document.querySelector('p').innerText = data.species.url
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

