"use strict";

// 1. function called hello that return the string "hello, edabit.com"
function hello() {
    return "hello edabit.com"
}

// 2. function called getFirstValue that returns the first item of an array
function getFirstValue(arr) {
    return arr[0]
}

// 3. function called howManySeconds that takes in a number of hours and converts it to seconds
function howManySeconds(hours) {
    return (hours * 3600)
}

// 4. function called triArea that takes in the base and height of triangle and returns the area of the triangle
function triArea(base, height) {
    return (base * height)/2
}

// 5. function called nextEdge that takes in the 2 sides and returns the maximum range for the third edge
function nextEdge(side1, side2) {
    return (side1 + side2)-1
}

// 6. function that returns true if the values are equal and false if they are not equal values
function checkEquality(a, b) {
    return a === b
}

// 7. function called remainder takes in 2 numbers and returns the remainder of those numbers
function remainder(x, y) {
    return x % y
}

// 8. function that takes in the number of each animal and returns the total number of legs for all animals
function animals(chickens, cows, pigs) {
    return (chickens*2) + (cows*4) + (pigs*4)
}

// 9. function that takes a number and returns true if number is divisible by 5
function divisibleByFive(n) {
    return n %5 === 0
}

// 10. function that returns true if the product of "prob" and "prize" is greater than the value of "pay"
function profitableGamble(prob, prize, pay) {
    if ((prob * prize)> pay){
        return true
    } else {
        return false
    }
}

// 11. a function that takes in a number and returns the value of that number squared
function squared(b) {
    return b*b;
}

// 12. function that takes in a string and returns the length
function length(str) {
    return str.length
}

// 13. function that takes in a number and returns true if the value of that number is less than or equal to 0, else returns false
function lessThanOrEqualToZero(num) {
    if (num <= 0) {
        return true
    } else {
        return false
    }
}

// 14. function that takes in an array and returns the array in reverse
function reverse(arr) {
    return arr.reverse()
}

// 15. function that takes in a number and returns true if that number is divisible by 100
function divisible(num) {
    if (num % 100 ===0) {
        return true
    } else {
        return false
    }
}

// 16. function that takes in an array and returns the last item of that array
function getLastItem(arr) {
    return arr.pop()
}

// 17. function that takes argument object "sizes" and returns the value of the volume of a box (height, width, length)
function volumeOfBox(sizes) {
    return sizes.height * sizes.width * sizes.length;
}

// 18. using arrow function instead of normal function
// const helloName = name => "Hello "+ name + "!"
// helloName("Ed") ➞ "Hello Ed!"

// 19. function that returns true if the length of string1 is equal to the length of string2
function comp(str1, str2) {
    if (str1.length === str2.length) {
        return true
    } else {
        return false
    }
}

// 20. function that takes in a number and returns the number incremented by 1
function addition(num) {
    return num +1
}

// 21. function that takes a number and returns "even" if that number is even, else returns "odd"
function isEvenOrOdd(num) {
    if (num % 2 ==0) {
        return "even"
    } else {
        return "odd"
    }
}

// 22. function that takes in hours and minutes, converts them to seconds and returns the sum
function convert(hours, minutes) {
    return (hours * 3600) + (minutes *60)
}

// 23.


// 24.


// 25.