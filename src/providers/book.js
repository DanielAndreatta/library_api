const { Book } = require("../models");

const createBook = async (book) => {
    try {
        const newBook = await Book.create(book);
        return newBook;
    } catch (err) {
        console.error("Error when creating Book", err);
        throw err;
    }
};

const getAllBook = async () => {
    try {
        const books = await Book.findAll();
        return books;
    } catch (err) {
        console.error("Error when search Books", err);
        throw err;
    }
};

module.exports = { createBook, getAllBook };