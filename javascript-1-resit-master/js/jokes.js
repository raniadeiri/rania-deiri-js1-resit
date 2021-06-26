const url = "https://official-joke-api.appspot.com/random_ten";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".container");

async function jokeApiCall() {
    try {
        const response = await fetch(corsFix);

        const results = await response.json();

        console.log(results);
        resultsContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {

 if (i === 5){ break; } 
     



            resultsContainer.innerHTML += `<div class="card">
                     <h4 class="type">${results[i].type}</h4>
<div class="setup">${results[i].setup}</div>
<div class="punchline">${results[i].punchline}</div
>
</div>`
        
        document.title = `${results[2].setup} "" `;
        
        }




    } 
    catch (error) {
        console.log(error);
        


        resultsContainer.innerHTML = `<main class="container">
 <h1>  Error </h1>
  </main>`;


    }

}

jokeApiCall();
