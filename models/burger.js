var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (col1, col2, cb) {
        orm.insertOne("burgers", col1, col2, function (res) {
            cb(res);
        });
    },
    updateOne: function (columnValue, condition, cb) {
        orm.updateOne("burgers", columnValue, condition, function (res) {
            cb(res);
        });
    }
};

module.export = burger;