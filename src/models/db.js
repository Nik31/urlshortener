const { Sequelize, DataTypes} = require("sequelize");

const db = new Sequelize({
    dialect : 'postgres',
    database : 'urlshortener',
    username : 'nikhil',
    password : 'nikhil',
});

const URLS = db.define('urls', {
    id : {
        primaryKey : true,
        type : DataTypes.INTEGER
    },
    url_code : {
       type : DataTypes.STRING(7),
       unique : true    
    } , 
    url : {
       type : DataTypes.TEXT     
    }
});
module.exports = {db, URLS};