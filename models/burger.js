var orm = require("../config/orm.js");

var borger = {
    selectAll: function (cb) {
        orm.selectAll().then(function (res) {
            cb(res);
        });
    },
    insertOne: function (affectValue, actualValue, cb) {
        return orm.insertOne(affectValue, actualValue)

    },
    updateOne: function (newValue, colValue, cb) {
        return orm.updateOne(newValue, colValue)
    },
};

module.exports = borger;