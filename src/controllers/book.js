
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
    ;
}

const updateBook = async (req,res) => {
    ;
}

const deleteBook = async (req,res) => {
    ;
}


module.exports = { createBook, getAllBook, getBook, updateBook, deleteBook };
