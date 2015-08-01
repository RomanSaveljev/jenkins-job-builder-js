'use strict';
var util$890 = require('../../../../misc/util.js');
var Branch$891 = require('./branch.js');
var Branches$893 = function (upper$895, array$896) {
    this.upper = upper$895;
    this.array = array$896;
};
Branches$893.prototype.up = function () {
    return this.upper;
};
Branches$893.prototype.and = Branches$893.prototype.up;
module.exports = Branches$893;
Branches$893.prototype[util$890.camelize('branch')] = function (value$897) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'branch',
        Branch$891,
        value$897
    ]);
};