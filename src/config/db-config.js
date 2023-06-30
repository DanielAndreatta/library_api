const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite",
});

const initializeDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Conexión a la base de datos establecida");
        await sequelize.sync({ force: false });  // sincronizamos el modelo con las tablas de bd, force en true crea la base de datos cada vez q inicializa la aplicacion.
    } catch (error) {
        console.error("Hubo un error al inicializar la base de datos", error);
    }
}

module.exports = { sequelize, initializeDB };