'use strict';
var util$915 = require('../../misc/util.js');
var Email$916 = require('./publishers/email.js');
var FindBugs$917 = require('./publishers/findbugs.js');
var Reporters$919 = function (upper$922, array$923) {
    this.upper = upper$922;
    this.array = array$923;
};
Reporters$919.prototype.up = function () {
    return this.upper;
};
Reporters$919.prototype.and = Reporters$919.prototype.up;
module.exports = Reporters$919;
Reporters$919.prototype[util$915.camelize('email')] = function (value$924) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'email',
        Email$916,
        value$924
    ]);
};
Reporters$919.prototype[util$915.camelize('findbugs')] = function (value$925) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'findbugs',
        FindBugs$917,
        value$925
    ]);
};