
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
        const library = await libraryProvider.getAllLibrary();
        return library;
    } catch (err) {
        console.error("There was an error getting all Libraries:", err);
        return null;
    }
}

module.exports = { createLibrary, getAllLibrary };