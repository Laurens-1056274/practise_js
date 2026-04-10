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
