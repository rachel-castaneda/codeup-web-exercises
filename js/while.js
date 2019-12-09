// var i =2
// while (i <= 65536) {
//     console.log(i);
//     i *=2
// }

// 1. generate total amount of cones - happens once = allCones
// 2. customer asks to buy x number of cones = conesPurchased
// 3. need to check if we have that amount of cones available to sell
// 4. if not --> sorry message
// 5. if we do have enough --> purchase message
//      re-evaluate the total number of cones left
//      subtract amount of cones sold from allCones
// 6. repeat until all cones are sold allCones = 0
// This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
//
// do{
//     // This expression will generate a random number between 1 and 5
//     var conesPurchased = Math.floor(Math.random() * 5) + 1;
//     //  checks if i have enough cones to sell
//     if (conesPurchased > allCones) {
//         // (sorry message) i cant sell the customer cones because i dont have enough
//         var conesSorryMessage = "sorry, i cant sell you " + conesPurchased + " i only have " + allCones + "..."
//         console.log(conesSorryMessage);
//     } else {
//         allCones -= conesPurchased;
//         // (happy message) i can sell you the cones you want to purchase
//         var conesHappyMessage = conesPurchased + " cones sold ..." + allCones + " cones to go";
//         console.log(conesHappyMessage);
//     }
//
// } while (allCones > 0)
// console.log("yay i sold all my cones!")
