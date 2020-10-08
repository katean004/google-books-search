const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googleboks"
);

const bookSeed = {
    authors: ["Rick Riordan"],
    description: "Percy Jackson is about to be kicked out of boarding school...again. And that's the least of his troubles. Lately, mythological monsters and the gods of Mount Olympus seem to be walking straight out of the pages of Percy’s Greek mythology textbook and into his life. And worse, he’s angered a few of them. Zeus’s master lightning bolt has been stolen, and Percy is the prime suspect.",
    image: "data:image/jpeg;base64,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",
    link: "https://www.google.com/books/edition/Percy_Jackson_and_the_Olympians_Book_One/sAOJngEACAAJ?hl=en",
    title: "Percy Jackson and the Olympians, Book One: Lightning Thief"
}

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });