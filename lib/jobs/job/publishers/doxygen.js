'use strict';
var util$915 = require('../../../misc/util.js');
var Doxygen$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
Doxygen$917.prototype.up = function () {
    return this.upper;
};
Doxygen$917.prototype.and = Doxygen$917.prototype.up;
module.exports = Doxygen$917;
Doxygen$917.prototype[util$915.camelize('doxyfile')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'doxyfile',
        value$923
    ]);
};
Doxygen$917.prototype[util$915.camelize('keepall')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'keepall',
        value$924
    ]);
};
Doxygen$917.prototype[util$915.camelize('folder')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'folder',
        value$925
    ]);
};