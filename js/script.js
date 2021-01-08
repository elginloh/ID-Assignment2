const sForm = document.querySelector('form');
const sResultDiv = document.querySelector('.result');
const cont = document.querySelector('.body1')
let sQuery = '';

const appID = '22df6f28';
const appKEY = '7cfb81166b9209dcb226e98e5dc57ea7';

sForm.addEventListener('submit', (e) => 
{
    e.preventDefault();
    sQuery = e.target.querySelector('input').value;
    fetchRECIPE();
})

async function fetchRECIPE ()
{
    const URL = `https://api.edamam.com/search?q=${sQuery}&app_id=${appID}&app_key=${appKEY}&to=30`;
    const response = await fetch(URL);
    const data = await response.json();
    genHTML(data.hits)
    console.log(data);
}

function  genHTML(results)
{
    let generateHTML = '';
    results.map(result => {
        generateHTML +=
        `
        <div class="details">
            <img src="${result.recipe.image}" alt="Food">
            <div class="content">
                <h1 class="title">${result.recipe.label}</h1>
                <a class="viewbtn" href="${result.recipe.url}" target="_blank">View Recipe</a>
            </div>
            <p class="info">Calories: ${result.recipe.calories.toFixed(2)}</p>
        </div>
        `
    })
    sResultDiv.innerHTML = generateHTML;
}


