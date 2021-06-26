


const numbers = document.querySelector("input");

const container = document.querySelector(".dynamic-divs");

numbers.onchange = function (changeEvent) {
    console.log(changeEvent.target.value);

    const selectedValue = changeEvent.target.value;

    container.innerHTML = "";

    for (let i = 1; i <= selectedValue; i++) {
        container.innerHTML += `<div class="dynamic">Number ${i}</div>`;
        
        
    }
    
}




document.querySelector(".reset").addEventListener("click", myFunction);

function myFunction() {
  document.querySelector(".dynamic-divs").innerHTML = "";
};