'use strict';
var util$890 = require('../../misc/util.js');
var Email$891 = require('./publishers/email.js');
var FindBugs$892 = require('./publishers/findbugs.js');
var Reporters$894 = function (upper$897, array$898) {
    this.upper = upper$897;
    this.array = array$898;
};
Reporters$894.prototype.up = function () {
    return this.upper;
};
Reporters$894.prototype.and = Reporters$894.prototype.up;
module.exports = Reporters$894;
Reporters$894.prototype[util$890.camelize('email')] = function (value$899) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'email',
        Email$891,
        value$899
    ]);
};
Reporters$894.prototype[util$890.camelize('findbugs')] = function (value$900) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'findbugs',
        FindBugs$892,
        value$900
    ]);
};