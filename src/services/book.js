
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

module.exports = { createBook, getAllBook, getBook };