'use strict';
var util$890 = require('../../../../misc/util.js');
var Note$892 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
Note$892.prototype.up = function () {
    return this.upper;
};
Note$892.prototype.and = Note$892.prototype.up;
module.exports = Note$892;
Note$892.prototype[util$890.camelize('remote')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'remote',
        value$899
    ]);
};
Note$892.prototype[util$890.camelize('message')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'message',
        value$900
    ]);
};
Note$892.prototype[util$890.camelize('namespace')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'namespace',
        value$901
    ]);
};
Note$892.prototype[util$890.camelize('replace-note')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'replace-note',
        value$902
    ]);
};