const {Sequelize} = require("sequelize");

//Connection
const connection = new Sequelize("contactsCRUD", "root", "volley-2020",
    {
        host: "localhost",
        dialect: "mysql"
    }
);

module.exports = connection;