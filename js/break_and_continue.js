"use strict";

do {
    var userNumber = Number(prompt("enter an odd number between 1 and 50"));

    if (userNumber %2 ===0) {
        alert(userNumber + " is not odd, please pick again")
    } else if (userNumber < 1 || userNumber > 50) {
        alert(userNumber + " is not between 1 and 50, please pick again");
    } else if (isNaN(userNumber)) {
        alert(userNumber + " is not a number, please pick again");
    } else {
        alert("congrats you picked the right number");
        break;
    }
} while (true)

for (var i = 1; i <= 50; i+=2){
  if(i === userNumber) {
      console.log("yikes! skipping number: " + i);
      continue;
  }
  console.log("here is an odd number: " + i);
}