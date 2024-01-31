const accountID = 12345678
let accountEmail = "dharmik@google.com"
let accountPassword = "#123#"
accountCity = "Peterborough"
var accountState = "ON";
console.log(accountID);

console.table([accountID,accountEmail,accountPassword,accountCity,accountState]) 

/*
Prefer to not to use var 
becuase of issue in block scope and functional scope 
*/