/**
 * Created by majw on 2017/4/12.
 */
// var md5Lib = require('blueimp-md5')
var constantMap = {
    items: 'items'
};

var
storage = {
    setItems: function (items) {
        sessionStorage.setItem(constantMap.items, items);
    },
    getItems: function () {
        return (sessionStorage.getItem(constantMap.items) || []);
    }
};

module.exports = {
    setItems: storage.setItems,
    getItems: storage.getItems
};
