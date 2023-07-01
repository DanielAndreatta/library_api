
const { libraryService } = require('../services');

const createLibrary = async (req,res) => {
    try {
        const newLibrary = await libraryService.createLibrary(req.body);
        if (!newLibrary) {
            res.status(404).json({ action: "createLibrary", error: "Library Not Created" });
        } else {
            res.status(201).json(newLibrary);
        }
    } catch (err) {
        res.status(500).json({ action: "createLibrary", error: err.message });  
    }
}

const getAllLibrary = async  (req,res) => {
    try {
        const libraries = await libraryService.getAllLibrary();
        if (!libraries) {
            res.status(404).json({ action: "getAllLibrary", error: "Libraries Not Found" });
        } else {
            res.status(200).json(libraries);
        } 
    } catch (err) {
        res.status(500).json({ action: "getAllLibrary", error: err.message });        
    }
}

const getLibrary = async (req,res) => {
    try {
        const library = await libraryService.getLibrary(req.params.libraryId);
        if (!library) {
            res.status(404).json({ action: "getLibrary", error: "Library Not Found" });
        } else {
            res.status(200).json(library);
        } 
    } catch (err) {
        res.status(500).json({ action: "getLibrary", error: err.message });        
    }
}

const updateLibrary = async (req,res) => {
    ;
}

const deleteLibrary = async (req,res) => {
    try {
        const response = await libraryService.deleteLibrary(req.params.libraryId);
        const { statusCode, ...responseLibrary } = response;
        if (!response) {
            res.status(statusCode).json({ action: "deleteLibrary", error: "Could Not Delete Library" });
        } else {
            res.status(statusCode).json(responseLibrary);
        } 
    } catch (err) {
        res.status(500).json({ action: "deleteLibrary", error: err.message });       
    }
}


module.exports = { createLibrary, getAllLibrary, getLibrary, updateLibrary, deleteLibrary };