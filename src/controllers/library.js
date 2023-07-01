
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
    ;
}

const updateLibrary = async (req,res) => {
    ;
}

const deleteLibrary = async (req,res) => {
    ;
}


module.exports = { createLibrary, getAllLibrary, getLibrary, updateLibrary, deleteLibrary };