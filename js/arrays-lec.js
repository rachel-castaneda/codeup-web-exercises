"use strict";

// intro to arrays, iterating arrays

// var pets = [];
//  pets[0] = "toby";
//  pets[1] = "princess";
//  pets[2] = "samson";
//  pets[3] = "jill";
//  pets[4] = "bubbles";
//  pets[5] = "malu";
//
//  for (var i = 0; i < pets.length; i++) {
//      console.log(pets[i]);
//  }
//
// pets.forEach(function (pet, i, arr) {
//     console.log(pet)
// })


// manipulating arrays //

// var fruit = ['apple', 'orange', 'banana'];
 // fruit[fruit.length] = 'pear'    // add item to end of array, this method not really used; as opposed to the 'push' method
// console.log(fruit);

// console.log(fruit.join(" + "))

// fruit.push('pear');  // adds item to end of array
// fruit.push('pineapple');  // adds item to end of array
// fruit.push('grape');  // adds item to end of array
// fruit.push('mango');  // adds item to end of array

// console.log(fruit.shift())  // fruit.shift() removes item from the start of the array
// fruit.unshift('strawberry') // adds item to the start of the array

// console.log(fruit.pop())    // pulls item off the end of an array, opposite to the 'push' method

// console.log(fruit); // final array after manipulation

    //pop, push, shift, unshift//

// var dogs = ['toby', 'gus', 'bullet', 'duncan'];
// console.log(dogs);
// dogs.indexOf('toby')
// console.log(dogs.indexOf('toby'))
// dogs.push('lucky')
// console.log(dogs)
// dogs.pop()
// / console.log(dogs)
// dogs.shift()
// console.log(dogs)
// dogs.unshift('lucky')
// console.log(dogs)


// var sentence = "the quick brown fox jumps over the lazy dog";
// var words = sentence.split(" ");
// words.forEach(function (word) {
//    var letters = word.split();
//    var firstLetter =
//        word.charAt(0).toUpperCase()
// })

    //split and slice//

// var fruits = ['strawberry', 'apple', 'banana','orange', 'pear', 'mango','grapes', 'apple', 'kiwi'];
// console.log(fruits)
// var fruit1thru3 = fruits.slice(0,3);
// var fruit6thru8 = fruits.slice(5,8);
// console.log(fruit1thru3)
// console.log(fruit6thru8)
