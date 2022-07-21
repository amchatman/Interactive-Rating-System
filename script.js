const form = document.getElementById("form");

//Declears radioInput to class name
const radioInput = document.getElementsByClassName("radio-input");

let ratingValue = 0;

for(let i = 0; i<5; i++){
    radioInput[i].addEventListener("click",() =>{
        ratingValue = radioInput[i].attributes[1].radioInput;
    })
}
console.log(ratingValue);

  
