(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    // var person = {
    //     firstName: 'Rachel',
    //     lastName: 'Castaneda',
    //     sayHello : function () {
    //         if (this.firstName.includes(name)){
    //             console.log(person.sayHello())
    //         } else {
    //             console.log('not a name');
    //         }
    //     }
    // }
    // console.log(person.firstName)
    // console.log(person.lastName)
    // console.log(person.sayHello())

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // person = {
    //     sayHello: 'Hello, '+ person.firstName + " " + person.lastName + '!'
    // }
    // console.log(person.sayHello())
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // function offer(amount) {
    //     if (amount <= 200) {
    //         console.log('sorry, no discount for you. buy more to receive offer');
    //     } else if (amount > 200) {
    //         console.log('thank you for shopping!')
    //     }
    // }
    // console.log(offer(200));
    // console.log(offer(380));

    // var discount; //amount*0.12
    // var amountAfter; //= amount - discount
    // var sorryMessage = 'sorry, ' + name + ", no discount for you"
    // var discountMessage = 'congrats, ' + name + ', you received a discount of: ' + discount + 'and your total after discount is: ' + amountAfter + '!'
    // var shoppers = [
    //     {name: 'Cameron', amount: 180, offer: function () {console.log(sorryMessage)}},
    //     {name: 'Ryan', amount: 250, offer: function () {console.log(discountMessage)}},
    //     {name: 'George', amount: 320, offer: function () {console.log(discountMessage)}}
    //
    // ];
    // shoppers.forEach(function (shopper) { shopper.offer() })
    //
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    // var book = new Object()
    // var books = [
    //     book,
    //     {
                // book #1 //
    //         title: 'The Great Gatsby',
    //         author : new Object(),
    //             firstName: 'F. Scott',
    //             lastName: 'Fitzgerald',
    //     },
    //     {
                // book #2 //
    //         title: 'A Study in Scarlet',
    //         author: new Object(),
    //                 firstName: 'Arthur Conan',
    //                 lastName: 'Doyle',
    //     },
    //     {
                // book #3 //
    //         title: 'Night',
    //         author: new Object(),
    //                 firstName: 'Elie',
    //                 lastName: 'Wiesel',
    //     },
    //     {
                // book #4 //
    //         title: 'The Count of Monte Cristo',
    //         author: new Object(),
    //                 firstName: 'Alexandre',
    //                 lastName: 'Dumas',
    //     },
    //     {
                // book #5 //
    //         title: 'The Things They Carried',
    //         author: new Object(),
    //                 firstName: 'Tim',
    //                 lastName: "O'Brien",
    //     }
    // ]
    // books.forEach(function (book) {
    //     console.log(book.title + 'is a great book by: ' + book.author.firstName + ' ' + book.author.lastName + " .")
    // })

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
