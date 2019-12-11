"use strict";

// var car = { // object open //
//     make: "toyota", // key value pairs, separated by commas //
//     model: "sienna",
//     year: 2009,
//     isTitled: true,
//     options: ['4wd', 'heated seats', 'leather interior'],
//     // functions as part of an object are known as methods //
//     goGoGo : function (key) {
//         if (key === "key"){
//             console.log("vroom");
//         } else {
//             console.log("...");
//         }
//     }
// }   // object closed //
// console.log("car was made in " + car.year);
// console.log("car has these options: ");
//  car.options.forEach(function (option) {
//      console.log(option)});
// car.goGoGo("key");  // function expecting an argument //
// // dot notation used to interact with the object //
//
//
// var myCar = {
//     make: "bmw",
//     model: "i8",
//     year: 2019,
//     isTitled: true,
//     options: ['twin power turbo engine', 'AWD', 'automatic', 'navigation'],
//     raceMe : function (fast) {
//         if (fast === "fast"){
//             console.log("i win!")
//         } else {
//             console.log("we all lose sometimes...")
//         }
//     },
//     drive : function (feature) {
//         if (this.options.includes(feature)){
//             console.log("my car has so many cool features including: " + feature);
//         } else {
//             console.log("my car sucks and has no cool features :(");
//         }
//     }
// }
// console.log("car is made by: " + myCar.make);
// console.log("my car has these options: ");
// myCar.options.forEach(function (option) {
//     console.log(option)});
// myCar.raceMe("fast");
// myCar.drive("twin power turbo engine");
// //
// var truck = new Object();
// truck.make = "tesla";
// truck.model = "CyberTruck";
// truck.year = 2022;
// truck.goGoGo = function () {
//     console.log("VROOM!!!");
// }
// truck["numberOfWheels"] = 3;
// console.log(truck.make)
// console.log(truck.model)
// console.log(truck.year)
// console.log(truck.goGoGo())
// console.log(truck['numberOfWheels'])
// //
// var cars = [
//     car,
//     {
//         make: 'dodge',
//         model: 'challenger',
//         year: 2015
//     },
//     {
//         make: "ford",
//         model:"shelby GT 500",
//         year: 2016
//
//     },
//     {
//         make: 'cadillac',
//         model: 'escalade',
//         year: 2019,
//         report: function () {
//             console.log(this.year+ " " + this.make+ " " + this.model);
//         }
//     }
// ]
// cars.report = function(){
//     console.log(this.year+ " " + this.make+ " " + this.model);
// }
// cars.forEach(function (car) {
//     cars.report();
//     // console.log(car.year + " " + car.make + " " + car.model);
// })

var dog = new Object()
var dogs = [
    dog,
    {
        breed: 'labrador',
        size: 'large',
        color: 'black',
        bark: 'big Woof'
    },
    {
        breed: 'great dane',
        size: 'extra large',
        color: 'black with white spots',
        bark: 'even bigger WOOF'
    },
    {
        breed: 'golden retriever',
        size: 'large',
        color: 'golden yellow',
        bark: 'cute woof'
    },
    {
        breed: 'corgi',
        size: 'small',
        color: 'tri-colored',
        bark: 'small woof'
    }
]
dogs.forEach(function (dog) {
    console .log(dog.breed + "s are " + dog.size + " dogs and can be " + dog.color + " and usually have a " + dog.bark)
})