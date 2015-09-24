'use strict';
var util$915 = require('../../../misc/util.js');
var ScanBuild$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
ScanBuild$917.prototype.up = function () {
    return this.upper;
};
ScanBuild$917.prototype.and = ScanBuild$917.prototype.up;
module.exports = ScanBuild$917;
ScanBuild$917.prototype[util$915.camelize('mark-unstable')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'mark-unstable',
        value$923
    ]);
};
ScanBuild$917.prototype[util$915.camelize('threshold')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'threshold',
        value$924
    ]);
};
ScanBuild$917.prototype[util$915.camelize('exclude-paths')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'exclude-paths',
        value$925
    ]);
};