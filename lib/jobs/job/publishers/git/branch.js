'use strict';
var util$940 = require('../../../../misc/util.js');
var Branch$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
Branch$942.prototype.up = function () {
    return this.upper;
};
Branch$942.prototype.and = Branch$942.prototype.up;
module.exports = Branch$942;
Branch$942.prototype[util$940.camelize('remote')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'remote',
        value$947
    ]);
};
Branch$942.prototype[util$940.camelize('name')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$948
    ]);
};