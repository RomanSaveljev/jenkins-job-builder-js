'use strict';
var util$890 = require('../../../../misc/util.js');
var Target$891 = require('./target.js');
var Targets$893 = function (upper$896, array$897) {
    this.upper = upper$896;
    this.array = array$897;
};
Targets$893.prototype.up = function () {
    return this.upper;
};
Targets$893.prototype.and = Targets$893.prototype.up;
module.exports = Targets$893;
Targets$893.prototype[util$890.camelize('total-coverage')] = function (value$898) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'total-coverage',
        Target$891,
        value$898
    ]);
};
Targets$893.prototype[util$890.camelize('code-coverage')] = function (value$899) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'code-coverage',
        Target$891,
        value$899
    ]);
};