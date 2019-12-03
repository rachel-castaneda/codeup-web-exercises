"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin

// if(isAdmin) {
//     // show admin navbar
//     // showAdminNavbar() <--function
// }

//TODO Together: Send a 20% off coupon if its users birthday

// if(isBirthday) {
//     // send 20% off coupon
//     // calls a function sendBirthdayEmail()
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true

// var isRainy = true;
// if(isRainy === true) {
//     alert("it's raining!")
// }
// if(isRainy) {
//     alert("it's raining!")
// }

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.

// var itemCost = 300;
// var currentBalance = 200;
// if(itemCost <= currentBalance) {
//     alert("you have enough money!")
// } else {
//     alert("you dont have enough money!")
// }

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0

// var numberOfLives = 0
// if(numberOfLives === 0) {
//     alert("Sorry, game over!")
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

// var isSnow = true
// if(isSnow === true) {
//     alert("it's snowing!")
// }
// if(isSnow) {
//     alert("it's snowing!")
// }

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

// var numberInput = 12
// if(numberInput > 10) {
//     alert("TRUE")
// }

//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.

//var numberOfLives = function (num) {
//     if(num === 0) {
//         return true
//     }
// }
// console.log(numberOfLives(0));

//  var isSnow = function(input) {
//     if(input === true) {
//         return alert("it's snowing!")
//     }
// }
// console.log(isSnow(true));

// var numberInput = function(numinput) {
//      if(numinput > 10) {
//          return alert("true")
//      }
// }
// console.log(numberInput(12));

// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar

// var isAdmin = true;
// if(isAdmin) {
//     //show admin navbar
//     alert("user is an admin")
// } else {
//     //show regular navbar
//     alert("user is not an admin")
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else alert "have a nice day!"

// var isRainy = true;
// if(isRainy) {
//     alert("it's raining")
// } else {
//     alert("have a nice day")
// }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

// var numberOfLives = 0
// if(numberOfLives === 0) {
//     alert("sorry, game over")
// } else {
//     alert("next level")
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

// var weather = "snow"
// if(weather === "snow") {
//     alert("it's snowing!")
// } else {
//     alert("check back later for more details")
// }

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

// var numberInput = 9
// if(numberInput > 10) {
//     alert("the number is greater than 10")
// } else {
//     alert("the number is less than 10")
// }

//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!. 

// var checkIfGameIsOver = function(numberOfLives) {
//     if (numberOfLives === 0) {
//         alert("sorry game over")
//     } else {
//         alert("next level")
//     }
// }
// checkIfGameIsOver(0)

// OR

// function checkIfGameIsOver(numberOfLives) {
//     if(numberOfLives === 0) {
//         return "sorry, game over"
//     } else {
//         return "next level"
//     }
// }
// console.log(checkIfGameIsOver(0))
//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.

// var isSnow = function (weatherInput) {
//     if (weatherInput === true) {
//         alert("it's snowing!")
//     } else {
//         alert("have a nice day!")
//     }
// }
// console.log(isSnow(true));

// SHOULD WE DELETE STUFF EXAMPLE

// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
// console.log("the value of the confirm is : " + weShouldDeleteStuff);
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert("DELETE EVERYTHING")
// } else {
//     alert("Operation Canceled!");
// }

//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

// var weather = "windy";
// if(weather === "snowing") {
//     alert("it's snowing")
// } else if(weather === "raining") {
//     alert("it's raining")
// } else if (weather === "sunny") {
//     alert("it's sunny")
// } else {
//     alert("have a nice day!")
// }

//TODO Together: refactor the above statement as a function

// function checkWeather(weather) {
//     if (weather === "snowing") {
//         return ("it's snowing")
//     } else if (weather === "raining") {
//         return ("it's raining")
//     } else if (weather === "sunny") {
//         return ("it's sunny")
//     } else {
//         return ("have a nice day!")
//     }
// }
// console.log(checkWeather("snowing"));

// TODO Together: PIZZA PREFERENCE EXAMPLE

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }

//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

// function trafficLight(colorInput) {
//     console.log("traffic light: " + colorInput);
//     if (colorInput === "green") {
//         return "go"
//     } else if (colorInput === "yellow") {
//         return "slow down"
//     } else if (colorInput === "red") {
//         return "stop"
//     } else {
//         return "that's not a real traffic light"
//     }
// }
// console.log(trafficLight("purple"));

// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.

// 1. under 15 = not eligible for permit
// 2. else = they are eligible for permit
// 3. 15 = not eligible for license
// 4. 16+ && have permit = eligible for license
// 5. 16+ && !permit = not eligible for license

// var userAge = 15;
// var hasPermit = true;
//
// if(userAge < 15) {
//     alert("sorry, you're not eligible for a permit");
// } else {
//     if (userAge === 15){
//         alert("you're eligible for a permit")
//     } else if (userAge >= 16 && hasPermit) {
//         alert("you're eligible for a license")
//     } else if (userAge >= 16 && !hasPermit) {
//         alert("sorry, you're not eligible for a license");
//     } else {
//         alert("please see the front desk")
//     }
// }

// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!



// =============== SWITCH STATEMENT ================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.


//TODO: Rewrite the intersection function from earlier as a switch statement.



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

