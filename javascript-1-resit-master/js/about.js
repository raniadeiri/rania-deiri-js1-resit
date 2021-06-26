
let paragraphArray = document.querySelectorAll("p"); 
let revereseParagraphArray = [];

paragraphArray.forEach(paragraph => {
  revereseParagraphArray.unshift(paragraph); 

})

let aboutSection = document.querySelector(".about");

revereseParagraphArray.forEach(paragraph => {
  aboutSection.appendChild(paragraph);
})


  

