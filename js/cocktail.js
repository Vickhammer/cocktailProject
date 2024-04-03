document.querySelector('button').addEventListener('click',getDrink)

function getDrink () {
    let drink = document.querySelector('input').value
}


fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=" + drink)
    .then( res=> res.json())
    .then( data => { 
        console.log(data);
    })
    .catch(err => {
        console.log(`error ${err}`)
        });
