'use strict';

let userName = prompt('please enter your name');
console.log(userName);



let gender = prompt('please enter your gender');
let title = ""
switch (gender) {
    case "male":
        title = "Mr"
        break
    case "female":
        title = "Ms"
        break
}

let age = prompt('please enter your age');
if (age <= 0) {
    alert('hello, please enter the true value :)')
} else console.log(age);


if (confirm('do you want to skip the welcome massage?') != true) {
    alert("Hello " + title + " " + userName);
}


// first
let qua = prompt('Do you like pizza? yes or no?');
//2nd 
let qua1 = prompt('are you love coding? yes or no?');
//3rd
let qua2 = prompt('Do you like CSGO game? yes or no?');

let arr = []

function check(qus) {
    if (qus === "yes" || qus === "no") {
        arr.push(qus)
    } else console.log("invaled")
}
check(qua)
check(qua1)
check(qua2)
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
