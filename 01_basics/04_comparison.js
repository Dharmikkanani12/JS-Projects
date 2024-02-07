//console.log(2 > 1);

/*The reasreasonis that an equality check == and comparicomparisons > <>= <= work diffdifferently. 
Comparisons convert null to a number, treating it as 0. 
That's why(3) null >= 0 is true and (1) null >0 is false.*/
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0); // should be avoid because it creates confusion.

// ===
// they verify the datatypes


console.log("2" === 2);
