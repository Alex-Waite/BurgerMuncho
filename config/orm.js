var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    // Not nececary but would be cool to get working in future

    // selectAllByValue: function (tableInput, colToSearch, valOfCol) {
    //     var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    //     connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
    //         if (err) throw err;
    //         console.log(result);
    //     });
    // },

    // Selects all burgers, eaten or not
    selectAll: function (table) {
        var queryString = "SELECT * FROM ??";
        console.log(queryString);
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    // Insert a new table int database (will be non-devoured by default)
    insertOne: function (table, affectValue, actualValue) {
        var queryString = "INSERT INTO ?? (??) VALUES (??)";
        console.log(queryString);
        connection.query(queryString, [table, affectValue, actualValue], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    // Update the value of one burger
    updateOne: function (table, newValue, column, colValue) {
        var queryString = "UPDATE ?? SET ?? WHERE ?? = ?";
        console.log(queryString);
        connection.query(
            queryString,
            [table, newValue, column, colValue],
            function (err, result) {
                if (err) throw err;
                console.log(result);
            }
        );
    }
};

module.exports = orm;