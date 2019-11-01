var connection = require("./connection.js");

var orm = {
    selectAll: function (table, burgers) {
        var queryString = "SELECT FROM";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            console.log(result);
            burgers(result);
        });
    },

    insertOne: function (nameOfBurger, isDevoured) {
        var queryString = "INSERT INTO burgers(burger_name, devoured);"
        connection.query(queryString, [nameOfBurger, isDevoured], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    updateOne: function (isDevoured, id) {
        var queryString = "UPDATE burgers SET devoured"
        connection.query(queryString, [isDevoured, id], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};
module.exports = orm;