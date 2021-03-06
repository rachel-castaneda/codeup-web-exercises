"use strict";


  // TODO:
  // Write some JavaScript that uses a `confirm` dialog to ask the user if they
  // would like to enter a number. If they click 'Ok', prompt the user for a
  // number, then use 3 separate alerts to tell the user:
  // 1. confirm if user wants to enter number
  // 2. prompt user for number if confirm is true
    // create three separate alerts:
  // - whether the number is even or odd
  // - what the number plus 100 is
  // - if the number is negative or positive
  //
  // if what the user enters is not a number, use an alert to tell them that, and
  // do *not* display any of the above information.
  //
  // Can you refactor your code to use functions?2


// var wouldYouLikeTo = confirm("would you like to enter a number?");
// var enterYourNumber = prompt("enter your number here: ")

// function numberInput(enterYourNumber) {
//     if (enterYourNumber % 2 === 0) {
//         alert("this is an even number")
//     } else {
//         alert("this is an odd number")
//     }
// }
// console.log(numberInput(2))
// function addOneHundred(enterYourNumber) {
//     var sumWithOneHundred  = (enterYourNumber + 100)
//     alert("this is your number plus 100: " + sumWithOneHundred)
// }
// console.log(addOneHundred(2))
// function isPositiveOrNegative(enterYourNumber) {
//     if(enterYourNumber > 0) {
//         alert("this is a positive number")
//     } else {
//         alert("this is a negative number")
//     }
// }
// console.log(isPositiveOrNegative(2))
/* ########################################################################## */

  // TODO:
  // Create a function named `analyzeColor` that accepts a string that is a color
  // name as input. This function should return a message that related to that
  // color. Only worry about the colors defined below, if the color passed is not
  // one of the ones defined below, return a message that says so
  //
  // Example:
  //  > analyzeColor('blue') // returns "blue is the color of the sky"
  //  > analyzeColor('red') // returns "Strawberries are red"
  //  > analyzeColor('cyan') // returns "I don't know anything about cyan"
  //
  // You should use an if-else-if-else block to return different messages.
  //
  // Test your function by passing various string literals to it and
  // console.logging the function's return value

function analyzeColor(colorInput) {
    if(colorInput === "blue") {
        return "blue is the color of the sky"
    } else if (colorInput === "red") {
        return "strawberries are red"
    } else if (colorInput === "cyan") {
        return "i don't know anything about cyan"
    } else {
        return "that's not a real color"
    }
}
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("red"));
// console.log(analyzeColor("cyan"));
// console.log(analyzeColor("purple"));



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

  // TODO:
  // Pass the `randomColor` variable to your function and console.log the results.
  // You should see a different message every time you refresh the page

    // function colorMessages (colorInput) {
    //     console.log(colorInput)
    //     if(colorInput === "blue") {
    //         return "blue is the color of the sky"
    //     } else if (colorInput === "red") {
    //         return "strawberries are red"
    //     } else if (colorInput === "cyan") {
    //         return "i don't know anything about cyan"
    //     } else {
    //         return "that's not a real color"
    //     }
    // }
    // console.log(colorMessages(randomColor))
  // TODO:
  // Refactor your above function to use a switch-case statement
// function colorMessages(colorInput) {
//     var colorMessages
//     switch (colorInput) {
//         case "blue" :
//             colorMessages = "blue is the color of the sky"
//             break;
//         case "red" :
//             colorMessages = "strawberries are red"
//             break;
//         case "cyan" :
//             colorMessages = "i dont know anything about cyan"
//             break;
//         default:
//             colorMessages = "that's not a real color"
//             break;
//     }
//     return colorMessages;
// }
// console.log(colorMessages("purple"))

  // TODO:
  // Prompt the user for a color when the page loads, and pass the input from the
  // user to your `analyzeColor` function. Alert the return value from your
  // function to show it to the user.

// var pickColor = prompt("enter a color")
// function analyzeColor(pickColor) {
//     if(pickColor === "blue") {
//         alert ("blue is the color of the sky")
//     } else if (pickColor === "red") {
//         alert ("strawberries are red")
//     } else if (pickColor === "cyan") {
//         alert("i don't know anything about cyan")
//     } else {
//         alert("that's not a real color")
//     }
// }
// console.log(analyzeColor("red"))
// console.log(analyzeColor("blue"));
// console.log(analyzeColor("cyan"));
// console.log(pickColor)
// alert("you chose this color: " + pickColor)
/* ########################################################################## */

  // TODO:
  // Suppose there's a promotion in Walmart, each customer is given a randomly
  // generated "lucky number" between 0 and 5. If your lucky number is 0 you have
  // no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
  // the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
  // all for free!.
  //
  // Write a function named `calculateTotal` that accepts a lucky number and total
  // amount, and returns the discounted price.
//   //
var totalAmount;
var luckyNumber;
var calculateTotal = function(luckyNumber, totalAmount) {

    var discountMessage;
        switch (luckyNumber) {
            case "0" :
                alert("sorry, no discount");
                break;
            case "1" :
                alert("congrats, you received 10% off your purchase");
                break;
            case "2" :
                alert("congrats, you received 25% off your purchase");
                break;
            case "3" :
                alert("congrats, you received 35% off your purchase");
                break;
            case "4" :
                alert("congrats, you received 50% off your purchase");
                break;
            case "5" :
                alert("congrats, you're getting your purchase for free");
                break;
            default:
                alert("sorry, no discount. please proceed to checkout");
                break;
        }

        return totalAmount * (1-luckyNumber)


    }

    console.log(calculateTotal(0, 100));

  // Example:
  // calculateTotal(0, 100) // returns 100
  // calculateTotal(4, 100) // returns 50
  // calculateTotal(5, 100) // returns 0
  //
  // Test your function by passing it various values and checking for the expected
  // return value.


  // TODO:
  // Uncomment the line below to generate a random number between 0 and 6.
  // Prompt the user for their total bill, then use your `calculateTotal` function
  // and alerts to display to the user what their lucky number was, what their
  // price before the discount was, and what their price after the discount is.

// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
