const { Book } = require("../models");
const { param } = require("../routes/book");

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

const getBook = async (bookId) => {
    try {
        const book = await Book.findByPk(bookId);
        return book;
    } catch (err) {
        console.error("Error when search a Book", err);
        throw err;
    }
};

const updateBook = async (bookId, body) => {
    try {
        const book = await Book.findByPk(bookId);
        if (!book) {
            return { statusCode: 404, message: "Book Not Found" };
        }

        const { isbn, title, author, year } = body;
        const bookUpdate = await book.update({
            isbn, 
            title, 
            author, 
            year
        });

        if (!bookUpdate) {
            return { statusCode: 404, message: "Error updating a Book" }
        } else {
            return { statusCode: 200, message: "Book successfully Updated!" }
        }

    } catch (err) {
        console.error("Error updating a Book", err);
        throw err;
    }
};

const deleteBook = async (bookId) => {
    try {
        const book = await Book.findByPk(bookId);
        if (!book) {
            return { statusCode: 404, message: "Book Not Found" };
        }

        const bookRemove = await book.destroy();

        if (!bookRemove) {
            return { statusCode: 404, message: "Error deleting a Book" }
        } else {
            return { statusCode: 200, message: "Book successfully Deleted!" }
        }

    } catch (err) {
        console.error("Error deleting a Book", err);
        throw err;
    }
};

module.exports = { createBook, getAllBook, getBook, updateBook, deleteBook };