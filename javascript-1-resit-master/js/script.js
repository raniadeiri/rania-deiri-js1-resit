const url = "https://official-joke-api.appspot.com/random_joke";

const resultsContainer = document.querySelector("main.container");

async function fetchJoke() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);





        resultsContainer.innerHTML = `<main class="container">
 <h2> ${json.type}  joke  </h2>
 <div class="joke setup"> ${json.setup}</div> 
<div class="joke punchline"> ${json.punchline}</div> </main>`


        document.title = `${json.setup} "" `;




    } catch (error) {
        console.log(error);


        resultsContainer.innerHTML = `<main class="container">
 <h2>  Error </h2>
  </main>`;


    }

}


fetchJoke();
