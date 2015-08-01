'use strict';
var util$890 = require('../../../misc/util.js');
var BuildPublisher$892 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
BuildPublisher$892.prototype.up = function () {
    return this.upper;
};
BuildPublisher$892.prototype.and = BuildPublisher$892.prototype.up;
module.exports = BuildPublisher$892;
BuildPublisher$892.prototype[util$890.camelize('publish-unstable-builds')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'publish-unstable-builds',
        value$899
    ]);
};
BuildPublisher$892.prototype[util$890.camelize('publish-failed-builds')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'publish-failed-builds',
        value$900
    ]);
};
BuildPublisher$892.prototype[util$890.camelize('days-to-keep')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'days-to-keep',
        value$901
    ]);
};
BuildPublisher$892.prototype[util$890.camelize('num-to-keep')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'num-to-keep',
        value$902
    ]);
};