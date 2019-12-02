// first portion of the exercise
//  alert("Welcome to my Website!")
//
//  var inputColor = prompt("What is your favorite color?")
//
//  console.log(inputColor);
//
//  alert("That's my favorite color too!")
// second portion of the exercise

// part one
// var littleMermaid = prompt("How many days will you be renting The Little Mermaid?")
// var hercules = prompt("How many days will you be renting Hercules?")
// var brotherBear = prompt("How many days will you be renting Brother Bear?")
// var movies = ((Number(littleMermaid) + Number(hercules) + Number(brotherBear)) * 3)
// alert("Your rental will cost $" + (movies))

//
// // part two
// var googlePay = prompt("How many hours have you worked for Google this week?")
// var amazonPay = prompt("How many hours have you worked for Amazon this week?")
// var facebookPay = prompt("How many hours have you worked for Facebook this week?")
// var weekPay = ((Number(googlePay)*400 + Number(amazonPay)*380 + Number(facebookPay)*350))
// alert("You made $" + (weekPay))


// part three
var classSize = prompt("How many students are in this class?")
var classTime = prompt("Does this class time conflict with your schedule?")
var classTime = function(classTime) {
    if (classTime > 10 ){
        return  "You may schedule this class";
    } else {
    return "You cannot schedule this class time."
    }
}
console.log(morningClass(11));
console.log(morningClass(8));

var classSize = function(numStudents) {
    if (numStudents < 130) {
        return "This class has open seats."
    } else {
        return "This class is full."
    }
}
console.log(classSize(180));
console.log(classSize(90));

// part four
// var offerApplied = function(numItems) {
//     if (numItems >= 2) {
//         return "Offer Applied!"
//     }
// }
// console.log(offerApplied(3));
// var offerExpired = function (dateInput) {
//     if (dateInput < 12/2/2019) {
//         return "Sorry, this offer has expired."
//     } else {
//         return "Offer Applied!"
//     }
// }
// console.log(offerExpired(12/1/2019));