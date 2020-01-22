"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array. filter takes in a function which receives an item and decides (returns boolean) whether the item should make it or not
let threeLang = users.filter(user => user.languages.length >=3);
console.log(threeLang);
console.log('=============');

// TODO: Use .map to create an array of strings where each element is a user's email address
let emailList = users.map(user => user.email);
console.log(emailList);
console.log('==============');

// TODO: Use .reduce to get the total years of experience from the list of users.
let totalYears = users.reduce((runningTotal, user) => {
    return runningTotal += user.yearsOfExperience;
}, 0);
console.log(totalYears);
console.log('total years of experience: ${totalYears} Average: ${totalYears/users.length}');
console.log('=============');

// TODO: Use .reduce to get the longest email from the list of users.
let longestEmail = users.reduce((longestSoFar, user) => {
    if (user.email.length > longestSoFar.length) return user.email;
    else return longestSoFar;
}, '@');
console.log(longestEmail);
console.log('===========');

// TODO: Use .reduce to get the list of user's names in a single string.
let singleString = users.reduce((runningGreeting, user) => {
    return runningGreeting += user.name + ', ';
}, 'your instructors are: ');
singleString = singleString.substring(0,singleString.length-2) + '.';
console.log(singleString);
console.log('==============');

// TODO: Bonus - Use .reduce to get the unique list of languages from the list of users.
let knownLang = users.reduce((knownLang, users) => {
    users.languages.forEach((language) => {
        if (knownLang.includes(language)){

        }else{
            knownLang.push(language);
        }
    });
    return knownLang;
}, []);
console.log(knownLang);
console.log('===========');