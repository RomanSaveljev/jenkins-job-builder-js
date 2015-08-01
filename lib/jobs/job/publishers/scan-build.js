'use strict';
var util$890 = require('../../../misc/util.js');
var ScanBuild$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
ScanBuild$892.prototype.up = function () {
    return this.upper;
};
ScanBuild$892.prototype.and = ScanBuild$892.prototype.up;
module.exports = ScanBuild$892;
ScanBuild$892.prototype[util$890.camelize('mark-unstable')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'mark-unstable',
        value$898
    ]);
};
ScanBuild$892.prototype[util$890.camelize('threshold')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'threshold',
        value$899
    ]);
};
ScanBuild$892.prototype[util$890.camelize('exclude-paths')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'exclude-paths',
        value$900
    ]);
};