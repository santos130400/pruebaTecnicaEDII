const { DataTypes } = require("sequelize");
const db = require("../db/connection");

const Contact = db.define('contacts',{
    idContacts:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true,
        field: 'idContacts'
    },
    names:{
        type:DataTypes.STRING,
        allowNull: false
    },
    secondNames:{
        type:DataTypes.STRING,
        allowNull: false
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false
    },
    cel:{
        type:DataTypes.STRING,
        allowNull: false
    },
    direction:{
        type:DataTypes.STRING,
        allowNull: false
    },
},
{
    timestamps: false,
    tableName: "contacts"
});
module.exports = Contact;