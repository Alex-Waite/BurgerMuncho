var orm = require("../config/orm.js");

var borger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (affectValue, actualValue, cb) {
        orm.insertOne("burgers", affectValue, actualValue, function (res) {
            cb(res);
        });
    },
    updateOne: function (newValue, column, colValue, cb) {
        orm.update("burgers", newValue, column, colValue, function (res) {
            cb(res);
        });
    },
};

module.exports = burger;