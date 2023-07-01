
const { bookService } = require('../services');

const createBook = async (req,res) => {
    try {
        const newBook = await bookService.createBook(req.body);
        if (!newBook) {
            res.status(404).json({ action: "createBook", error: "Book Not Created" });
        } else {
            res.status(201).json(newBook);
        }
    } catch (err) {
        res.status(500).json({ action: "createBook", error: err.message });  
    }
}

const getAllBook = async  (req,res) => {
    try {
        const books = await bookService.getAllBook();
        if (!books) {
            res.status(404).json({ action: "getAllBook", error: "Books Not Found" });
        } else {
            res.status(200).json(books);
        } 
    } catch (err) {
        res.status(500).json({ action: "getAllBook", error: err.message });       
    }
}

const getBook = async (req,res) => {
    try {
        const book = await bookService.getBook(req.params.bookId);
        if (!book) {
            res.status(404).json({ action: "getBook", error: "Book Not Found" });
        } else {
            res.status(200).json(book);
        } 
    } catch (err) {
        res.status(500).json({ action: "getBook", error: err.message });       
    }
}

const updateBook = async (req,res) => {
    try {
        const book = await bookService.updateBook(req.params.bookId, req.body);
        const { statusCode, ...responseBook } = book;
        if (!book) {
            res.status(statusCode).json({ action: "updateBook", error: "Could Not Update Book" });
        } else {
            res.status(statusCode).json(responseBook);
        } 
    } catch (err) {
        res.status(500).json({ action: "updateBook", error: err.message });       
    }
}

const deleteBook = async (req,res) => {
    try {
        const response = await bookService.deleteBook(req.params.bookId);
        const { statusCode, ...responseBook } = response;
        if (!response) {
            res.status(statusCode).json({ action: "deleteBook", error: "Could Not Delete Book" });
        } else {
            res.status(statusCode).json(responseBook);
        } 
    } catch (err) {
        res.status(500).json({ action: "deleteBook", error: err.message });       
    }
}


module.exports = { createBook, getAllBook, getBook, updateBook, deleteBook };
