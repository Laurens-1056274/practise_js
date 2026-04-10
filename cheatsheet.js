// To write something in the console use:
console.log(`Hello World`);

// To create a alert use:
window.alert(`This is a alert`);

// To change the text from a specefic HTMl ID use:
document.getElementById(`myH1`).textContent = `Hello World`;

// You can change the text to a specefied variable by usung for example this
let price = 10.99;
document.getElementById(`myP`).textContent = `price = ${price}`

// To declare a variable use:
let;
// for example
let x;
x = 100;
// or 
let y = 100;
// or
let age = 99;
console.log(`you are ${age} years old`);

//Booleans are either:
true
// or 
false


/*
Arithic operators
*/

// examples arethic operators
let students;
students = 30;
// addition
students = students + 1;
// subtraction
students = students - 1;
// multiplication
students = students * 1;
// division
students = students / 1;
// square
students = students ** 2;
// modulus (in this case studenst /2. what remains after that is the number of ExtraStudents)
let ExtrasStudents = students % 2;
// Just like in python you can note the arethic operator before the =, like for example
students **= 2
// if you want to subtract or add only one:
students--;
students++;


/* 
Accept user input
*/

// There are 2 ways to accept user input

// 1. Easy but non professional way = window prompt

let username_test_1 = window.prompt(`whats your username?`);

console.log(username_test_1);

// 2. Professional way = html textbox
let username_test_2;

document.getElementById("mySubmit").onclick = function(){
    username_test_2 = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username_test_2}`

}

/*
How to ddo type conversion
*/

// on default user input = string
let age_2 = window.prompt(`how old are thy?`);
//change datatype to a number
age_2 = Number(age_2);
//change datatype to a string
age_2 = String(age_2)
//change datatype to a boolean (you can use this to check if user input is empty)
age_2 = Boolean(age_2)

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