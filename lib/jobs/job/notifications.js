'use strict';
var util$915 = require('../../misc/util.js');
var Http$916 = require('./notifications/http.js');
var Notifications$918 = function (upper$920, array$921) {
    this.upper = upper$920;
    this.array = array$921;
};
Notifications$918.prototype.up = function () {
    return this.upper;
};
Notifications$918.prototype.and = Notifications$918.prototype.up;
module.exports = Notifications$918;
Notifications$918.prototype[util$915.camelize('http')] = function (value$922) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'http',
        Http$916,
        value$922
    ]);
};