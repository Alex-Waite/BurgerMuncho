var connection = require("./connection.js");
// Object Relational Mapper (ORM)
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
    selectAll: function () {
        return new Promise((resolve, reject) => {
            var queryString = "SELECT * FROM burgers";
            console.log(queryString);
            connection.query(queryString, function (err, result) {
                if (err) return reject(err);
                console.log(result);
                return resolve(result)
            });
        })
    },
    // Insert a new table int database (will be non-devoured by default)
    insertOne: function (table, affectValue, actualValue) {
        return new Promise((resolve, reject) => {

            var queryString = "INSERT INTO burgers (??) VALUES (??)";
            console.log(queryString);
            connection.query(queryString, [table, affectValue, actualValue], function (err, result) {
                if (err) return reject(err);
                console.log(result);
                return resolve(result)
            })
        });
    },
    // Update the value of one burger
    updateOne: function (newValue, colValue) {
        return new Promise((resolve, reject) => {
            var queryString = "UPDATE burgers SET ? WHERE id = ?";
            console.log(queryString);
            connection.query(
                queryString,
                [newValue, colValue],
                function (err, result) {
                    if (err) return reject(err);
                    console.log(result);
                    return resolve(result)
                }
            );
        })
    }
};

module.exports = orm;