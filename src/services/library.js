
const { libraryProvider } = require("../providers");

const createLibrary = async (library) => {
    try {
        const newLibrary = await libraryProvider.createLibrary(library);
        return newLibrary;
    } catch (err) {
        console.error("There was an error creating a Library:", err);
        return null;
    }
}

const getAllLibrary = async () => {
    try {
        const libraries = await libraryProvider.getAllLibrary();
        return libraries;
    } catch (err) {
        console.error("There was an error getting all Libraries:", err);
        return null;
    }
}

const getLibrary = async (libraryId) => {
    try {
        const library = await libraryProvider.getLibrary(libraryId);
        return library;
    } catch (err) {
        console.error("There was an error getting a Library:", err);
        return null;
    }
}

const updateLibrary = async (libraryId, body) => {
    try {
        const library = await libraryProvider.updateLibrary(libraryId, body);
        return library;
    } catch (err) {
        console.error("There was an error updating a Library:", err);
        return null;
    }
}

const deleteLibrary = async (libraryId) => {
    try {
        const response = await libraryProvider.deleteLibrary(libraryId);
        return response
    } catch (err) {
        console.error("There was an error deleting a Library:", err);
        return null;
    }
}

module.exports = { createLibrary, getAllLibrary, getLibrary, updateLibrary, deleteLibrary };