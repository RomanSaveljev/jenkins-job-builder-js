'use strict';
var util$890 = require('../../../../misc/util.js');
var SkipVote$892 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
SkipVote$892.prototype.up = function () {
    return this.upper;
};
SkipVote$892.prototype.and = SkipVote$892.prototype.up;
module.exports = SkipVote$892;
SkipVote$892.prototype[util$890.camelize('successful')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'successful',
        value$899
    ]);
};
SkipVote$892.prototype[util$890.camelize('failed')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'failed',
        value$900
    ]);
};
SkipVote$892.prototype[util$890.camelize('unstable')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'unstable',
        value$901
    ]);
};
SkipVote$892.prototype[util$890.camelize('notbuilt')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'notbuilt',
        value$902
    ]);
};