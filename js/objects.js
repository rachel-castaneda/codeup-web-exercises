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
    //     lastName: 'Castaneda'
    // }
    // console.log(person.firstName)
    // console.log(person.lastName)

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // person.sayHello = function (){
    //     return "hello from " + this.firstName + " " + this.lastName + "!";
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

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    //
    // ];
    // shoppers.forEach(function (shopper) {
    //     var discount = 0;
    //     if (shopper.amount > 200)
    //         discount = shopper.amount * .12;
    //     var total = shopper.amount - discount;
    //     console.log(shopper.name + "'s total was $" + shopper.amount + ". They received a discount of $" + discount + " and their total was $" + total + ".")
    // });

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

    var books = [
        {
                // book #1 //
            title: 'The Great Gatsby',
            author : {firstName: 'F. Scott', lastName: 'Fitzgerald',}
        },
        {
                // book #2 //
            title: 'A Study in Scarlet',
            author : {firstName: 'Sir Arthur Conan', lastName: 'Doyle',}
        },
        {
                // book #3 //
            title: 'Night',
            author : {firstName: 'Elie', lastName: 'Wiesel',}
        },
        {
        //         book #4 //
            title: 'The Count of Monte Cristo',
            author : {firstName: 'Alexandre', lastName: 'Dumas',}
        },
        {
        //         book #5 //
            title: 'The Things They Carried',
            author : {firstName: 'Tim', lastName: "O'Brien",}
        }
    ];
    // for (var i =0; i<=5; i++) {
    //     console.log(books[i].title " " + books[i].author.firstName + " " + books[i].author.lastName)
    // }
    // books.forEach(function (book) {
    //     console.log(book.title + 'is a great book by: ' + books.author[0] + ' ' + books.author[0] + " .")
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

    // books.forEach(function (book, i) {
    //     console.log("Book # " +(i+1))
    //     console.log("Title: " + book.title)
    //     console.log("Author: " + book.author.firstName + " " +book.author.lastName)
    //     console.log("---")
    // })

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

    var createBook = function(title, authorFirstName, authorLastName) {
        var book = {};
        book.title = title;
        book.author = {};
        book.author.firstName = authorFirstName;
        book.author.lastName = authorLastName;
        return book;
    }

    books.push(createBook('Catcher in the Rye', 'J.D', 'Salinger'))

    var showBookInfo = function (book, i) {
        console.log("Book # " +(i+1))
        console.log("Title: " + book.title)
        console.log("Author: " + book.author.firstName + " " +book.author.lastName)
        console.log("---")
    }

    books.forEach(showBookInfo);
        // console.log("Book # " +(i+1))
        // console.log("Title: " + book.title)
        // console.log("Author: " + book.author.firstName + " " +book.author.lastName)
        // console.log("---")




})();
