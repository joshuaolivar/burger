var orm = require("../config/orm.js");

var burger = {
    selectAll: function(burgers) {
      orm.selectAll("burgers", function(res) {
        burgers(res);
      });
    },
    insertOne: function(cols, vals, burgers) {
      orm.insertOne("burgers", cols, vals, function(res) {
        burgers(res);
      });
    },
    updateOne: function(objColVals, condition, burgers) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        burgers(res);
      });
    },
    delete: function(condition, burgers) {
      orm.delete("burgers", condition, function(res) {
        burgers(res);
      });
    }
  };