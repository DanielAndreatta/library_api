const { Library, Book } = require("../models");

const createLibrary = async (library) => {
    try {
        const newLibrary = await Library.create(library);
        return newLibrary;
    } catch (err) {
        console.error("Error when creating Library", err);
        throw err;
    }
};

const getAllLibrary = async () => {
    try {
        const libraries = await Library.findAll({
            include: Book
        });
        return libraries;
    } catch (err) {
        console.error("Error when search Libraries", err);
        throw err;
    }
};

const getLibrary = async (libraryId) => {
    try {
        const libraries = await Library.findByPk(libraryId,{
            include: Book
        });
        return libraries;
    } catch (err) {
        console.error("Error when search a Library", err);
        throw err;
    }
};

const deleteLibrary = async (libraryId) => {
    try {
        const library = await Library.findByPk(libraryId);
        if (!library) {
            return { statusCode: 404, message: "Library Not Found" };
        }

        const libraryRemove = await library.destroy();

        if (!libraryRemove) {
            return { statusCode: 404, message: "Error deleting a Library" }
        } else {
            return { statusCode: 200, message: "Library successfully Deleted!" }
        }

    } catch (err) {
        console.error("Error deleting a Library", err);
        throw err;
    }
};

module.exports = { createLibrary, getAllLibrary, getLibrary, deleteLibrary };