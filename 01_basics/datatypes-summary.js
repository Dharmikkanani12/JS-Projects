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




// +++++++++++++++++++++++++++++++++++++++++++
//memory in js
// Stack {Primitive}, Heap {Non-primitive}

/*Stack memory*/
let myYoutubename = "dharmikkananicode"
let anothername = myYoutubename
anothername = "chai aur code"

/*Heap memory*/
console.log(myYoutubename);
console.log(anothername);

let userOne = {
   username: "admin",
   password: "admin",
   email: "admin@google.com"
}

let userTwo = userOne

userTwo.password = "9276"

console.log(userOne.password);
console.log(userTwo.password);