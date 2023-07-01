
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
        const book = await bookProvider.getAllBook();
        return book;
    } catch (err) {
        console.error("There was an error getting all Books:", err);
        return null;
    }
}

module.exports = { createBook, getAllBook };