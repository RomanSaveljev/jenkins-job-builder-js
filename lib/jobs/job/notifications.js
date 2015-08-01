'use strict';
var util$890 = require('../../misc/util.js');
var Http$891 = require('./notifications/http.js');
var Notifications$893 = function (upper$895, array$896) {
    this.upper = upper$895;
    this.array = array$896;
};
Notifications$893.prototype.up = function () {
    return this.upper;
};
Notifications$893.prototype.and = Notifications$893.prototype.up;
module.exports = Notifications$893;
Notifications$893.prototype[util$890.camelize('http')] = function (value$897) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'http',
        Http$891,
        value$897
    ]);
};