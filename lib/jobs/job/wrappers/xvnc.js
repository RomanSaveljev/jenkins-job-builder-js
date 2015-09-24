'use strict';
var util$915 = require('../../../misc/util.js');
var Xvnc$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
Xvnc$917.prototype.up = function () {
    return this.upper;
};
Xvnc$917.prototype.and = Xvnc$917.prototype.up;
module.exports = Xvnc$917;
Xvnc$917.prototype[util$915.camelize('screenshot')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'screenshot',
        value$922
    ]);
};
Xvnc$917.prototype[util$915.camelize('xauthority')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'xauthority',
        value$923
    ]);
};