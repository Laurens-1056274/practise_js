/*
Constants (a variable that cant be changed)
*/

const PI = 3.14159;
let radius;
let circumference;

//If the button gets clicked run function
document.getElementById(`mySubmit`).onclick = function(){
    //Get the radius from the input field
    radius = document.getElementById(`myText`).value;
    radius = Number(radius);
    circumference = 2* PI* radius;
    // Change the textcontent of H1 to the following
    document.getElementById("myH1").textContent = `circle = ${circumference}`;

}
console.log(circumference);