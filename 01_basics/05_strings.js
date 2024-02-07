const name = "dharmik"
const repoCount = 3

// syntax = console.log(name + repoCount + "value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Cash-On-Delivery')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(11));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
//console.log(newString);

const anotherString = gameName.slice(-16, 10)
//console.log(anotherString);

const anotherStringOne = "  Dharmik   "
//console.log(anotherStringOne);
//console.log(anotherStringOne.trim());

const url ="https://google.com/dharmik%24kanani"

console.log(url.replace('%24','-'));

console.log(gameName.split('-'));