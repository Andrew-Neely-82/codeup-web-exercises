(function() {
    "use strict";

    /**
     * TODO 1:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */



    let person = {
        firstName: `Andrew`,
        lastName: `Neely`,
        sayHello: function () {
            return `TODO 2: Hello, ${person.firstName} ${person.lastName}`
        }
    }

    console.log(`TODO 1: ${person.firstName} ${person.lastName}`);
    console.log(``)



    /**
     * TODO 2:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    console.log(person.sayHello());
    console.log(``);

    /** TODO 3:
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



    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    console.log(`TODO 3: `)

    shoppers.forEach(function(shopper) {
        let discount = shopper.amount * 0.12;
        let total = shopper.amount - discount;
        if (shopper.amount > 200) {
           console.log(`${shopper.name} spent ${shopper.amount} and received a discount of ${discount} for a total of ${total}`);
        }
        else {
            console.log(`Sorry ${shopper.name}, you spent ${shopper.amount} and don't qualify for a discount`);
        }
    });

    console.log(``)


    /** TODO 4:
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

    let books = [{
        bookNumber: `book 1`,
        title: `Something 1`,
        author: {
            firstName: `Andrew`,
            lastName: `Neely`
        }},
        {
            bookNumber: 2,
            title: `Something 2`,
            author: {
                firstName: `Jacob`,
                lastName: `Neely`
            }},
        {
            bookNumber: 3,
            title: `Something 3`,
            author: {
                firstName: `Dustin`,
                lastName: `Neely`
            }},
        {
            bookNumber: 4,
            title: `Something 4`,
            author: {
                firstName: `Harold`,
                lastName: `Neely`
            }},
        {
            bookNumber: 5,
            title: `Something 5`,
            author: {
                firstName: `Jill`,
                lastName: `Neely`
            }}
    ]

    console.log(`TODO 4:`)
    console.log(`First book`)
    console.log(`Title: ${books[0].title}`)
    console.log(`Author first name: ${books[0].author.firstName}`)
    console.log(`Author last name: ${books[0].author.lastName}`)
    console.log(``)
    console.log(`Second book`)
    console.log(`Title:  ${books[1].title}`)
    console.log(`Author first name: ${books[1].author.firstName}`)
    console.log(`Author last name: ${books[1].author.lastName}`)
    console.log(``)
    console.log(`Third book`)
    console.log(`Title:  ${books[2].title}`)
    console.log(`Author first name: ${books[2].author.firstName}`)
    console.log(`Author last name: ${books[2].author.lastName}`)
    console.log(``)
    console.log(`Fourth book`)
    console.log(`Title:  ${books[3].title}`)
    console.log(`Author first name: ${books[3].author.firstName}`)
    console.log(`Author last name: ${books[3].author.lastName}`)
    console.log(``)
    console.log(`Fifth book`)
    console.log(`Title:  ${books[4].title}`)
    console.log(`Author first name: ${books[4].author.firstName}`)
    console.log(`Author last name: ${books[4].author.lastName}`)
    console.log(``)




    /**
     * TODO 5:
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

    console.log(`TODO 5: `)

    books.forEach(function(book, x){
        console.log(`#${x + 1} Title: ${book.title}, Author: by ${book.author.firstName} ${book.author.lastName}`);
    })



    /**
     * TODO Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    function createBook(title, author) {
        let book = {
            title: title, author: author}
        return book;
    }

    console.log(createBook());

    function showBookInfo(book) {
        return `${book.title} by ${book.author.firstName} ${book.author.lastName}`
    }

    console.log(showBookInfo());

})();
