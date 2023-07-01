
const { bookProvider } = require("../providers");

const createBook = async (book) => {
    try {
        const newBook = await bookProvider.createBook(book);
        return newBook;
    } catch (err) {
        console.error("There was an error creating a Book:", err);
        return null;
    }
}

const getAllBook = async () => {
    try {
        const books = await bookProvider.getAllBook();
        return books
    } catch (err) {
        console.error("There was an error getting all Books:", err);
        return null;
    }
}

const getBook = async (bookId) => {
    try {
        const book = await bookProvider.getBook(bookId);
        return book
    } catch (err) {
        console.error("There was an error getting a Book:", err);
        return null;
    }
}

const updateBook = async (bookId, body) => {
    try {
        const book = await bookProvider.updateBook(bookId, body);
        return book;
    } catch (err) {
        console.error("There was an error updating a book:", err);
        return null;
    }
}

const deleteBook = async (bookId) => {
    try {
        const response = await bookProvider.deleteBook(bookId);
        return response
    } catch (err) {
        console.error("There was an error deleting a Book:", err);
        return null;
    }
}

module.exports = { createBook, getAllBook, getBook, updateBook, deleteBook };