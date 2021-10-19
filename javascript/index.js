document.getElementById("h1").innerHTML="My First Java Script Program!"


// JS Dates

var date = new Date();
//alert(date);
let date1 = new Date(2021,9,18,09,49,40,95);
console.log(date1);

let year=date.getFullYear();
let month=date.getMonth();
let day=date.getDay();
let hours=date.getHours();
let minutes=date.getMinutes();

console.log(year);
console.log(month);
console.log(day);
console.log(hours);
console.log(minutes);

let date2= new Date("2020-01-01");
console.log(date2);


//functions

function sum(a,b){
    let c  = a + b;
    return c;
}

let z = sum(23,79);
console.log(z);

function myFunction(){
    alert("Hello there!");
}
myFunction();

// JS Objects

var cars={
    company:"Fiat",
    model:"500",
    weight:"850",
    color:"white"
};
console.log(cars);
console.log("Car model:" + cars.model);

const myDetails = {
    firstName:"Aditya Prasad",
    lastName:"Sahu",
    age:"22",
    location:"Berhampur,Odisha"
}
function fullName(){
    let x = myDetails.firstName + " " + myDetails.lastName;
    console.log(x);
}
 fullName();

 // Event 
