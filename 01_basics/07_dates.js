// Dates is type of object

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());

let myCreateDate = new Date(2024, 1, 7, 17, 38)
//console.log(myCreateDate.toLocaleString());

let myNewDate = Date.now()
//console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000)); /// To compare time in milisemilliseconds.

let NewDate = new Date()
console.log(NewDate);
console.log(NewDate.getDay());
console.log(NewDate.getFullYear());


console.log(NewDate.toLocaleString('default', {
   weekday: "narrow"
}))