// There are 2 ways to accept user input

// 1. Easy but non professional way = window prompt

let username_test_1 = window.prompt(`whats ur un?`);

console.log(username_test_1);

// 2. Professional way = html textbox
let username_test_2;

document.getElementById("mySubmit").onclick = function(){
    username_test_2 = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username_test_2}`

}
