
console.log("hi");

window.alert("hi");

document.getElementById("myh1").textContent = "hi";
document.getElementById("myp").textContent = "i like pizza";

//this is a comment

/* 
 this
 is
 also 
 a 
 comment
*/

// Variables

let x = 123;
console.log(x);

let age = 17;
console.log(age);

console.log(`my age is ${age} years old`);
console.log(typeof age);

let myname = "shachar"
console.log(` my name is ${myname}`);
console.log(typeof myname);

let online = true;
let forsale = false;

document.getElementById("myname").textContent = `my name is ${myname}`;
document.getElementById("age").textContent = `my age is ${age}`;

// Arithmetic operators

let students = 30;
console.log(students);

students = students + 1;
console.log(students);

students = students - 1;
students = students / 2;
students = students * 2;
students = students ** 2;
students = students % 2;

students = 30;

students += 1;
students -= 1;
students *= 2;
students /= 2;
students ** 2;
students %= 2;
students++;
students--;

// User input

// Method 1: window prompt
let userName = window.prompt("What is your name?");
console.log(userName);

// Method 2: input + button
document.getElementById("mySubmit").onclick = function () {
  userName = document.getElementById("username").value;
  document.getElementById("usernameH1").textContent = `Hi! ${userName}`;
};


//type conversion

let age2 = window.prompt("how are you?");
age2 = Number(age2); //to int

age+=1;

x = "pizza";
let y 
let z 

// counst

const PI=3.14159;
let radius;
let cir;

radius = window.prompt("enter the radius")
radius = Number(radius)

cir =  2*PI*radius;
console.log(cir);