// array 

const myArr = [0, 1, 2, 3, 4, 5]
const myArr1 = [0, 1, 2, 3, 4, 5]
const myArrname = ["Dharmik", "Kanani"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(8)
// myArr.push(45)

//myArr.unshift(21) // it adds the number in starting of the array.
//myArr.shift() // it removes the first number of array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(19));


const newArr = myArr.join()
// console.log(newArr);
// console.log( typeof newArr);


// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1 , 3) // which is not consider last number of limit.
console.log(myn1);

console.log("B ", myArr);
const myn2 = myArr.splice(1 , 3)// which consider last number of limit
console.log("C ", myArr);
console.log(myn2);

