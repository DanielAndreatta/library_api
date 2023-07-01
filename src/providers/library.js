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

module.exports = { createLibrary, getAllLibrary };