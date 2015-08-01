'use strict';
var util$890 = require('../../../misc/util.js');
var Doxygen$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
Doxygen$892.prototype.up = function () {
    return this.upper;
};
Doxygen$892.prototype.and = Doxygen$892.prototype.up;
module.exports = Doxygen$892;
Doxygen$892.prototype[util$890.camelize('doxyfile')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'doxyfile',
        value$898
    ]);
};
Doxygen$892.prototype[util$890.camelize('keepall')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'keepall',
        value$899
    ]);
};
Doxygen$892.prototype[util$890.camelize('folder')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'folder',
        value$900
    ]);
};