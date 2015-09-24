'use strict';
var util$915 = require('../../../misc/util.js');
var File$916 = require('./scp/file.js');
var Scp$918 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
Scp$918.prototype.up = function () {
    return this.upper;
};
Scp$918.prototype.and = Scp$918.prototype.up;
module.exports = Scp$918;
Scp$918.prototype[util$915.camelize('site')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'site',
        value$923
    ]);
};
Scp$918.prototype[util$915.camelize('files')] = function (value$924) {
    return util$915.objectArrayAccessor.apply(this, [
        'files',
        File$916,
        value$924
    ]);
};