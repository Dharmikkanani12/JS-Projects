// Primitive

/* 7 types : String, 
             Number, 
             Boolean, 
             null,
             undefined, 
             Symbol, 
             BigInt */

const score  = 100
const scoreValue  = 100.3

const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 132456789541222n //treated as bigint





// Reference (Non primitive)
// Array, Objects, Functions


const heros =["DK", "EVman", "speedy"];
let myObj = {
    name: "Dharmik",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

//https://262.ecma-international.org/5.1/#sec-11.4.3