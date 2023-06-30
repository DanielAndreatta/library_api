const { DataTypes } = require('sequelize');
const { sequelize } = require("../config/db-config");
const Library = require('./library');

const Book = sequelize.define("book", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    isbn: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    libraryId: {
        type: DataTypes.INTEGER,
        references: {
            model: Library,
            key:'id'
        }
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    },
}, { 
    paranoid: true,
    timestamps: true 
});

Book.belongsTo(Library, { foreignKey: "libraryId" });
Library.hasMany(Book, { foreignKey: "libraryId", onDelete:"SET NULL" });

module.exports = Book;