'use strict';
var util$715 = require('../../../misc/util.js');
var Beaker$717 = function (upper$721, obj$722) {
    this.upper = upper$721;
    this.obj = obj$722;
};
Beaker$717.prototype.up = function () {
    return this.upper;
};
Beaker$717.prototype.and = Beaker$717.prototype.up;
module.exports = Beaker$717;
Beaker$717.prototype[util$715.camelize('content')] = function (value$723) {
    return util$715.primitiveAccessor.apply(this, [
        'content',
        value$723
    ]);
};
Beaker$717.prototype[util$715.camelize('path')] = function (value$724) {
    return util$715.primitiveAccessor.apply(this, [
        'path',
        value$724
    ]);
};
Beaker$717.prototype[util$715.camelize('download-logs')] = function (value$725) {
    return util$715.primitiveAccessor.apply(this, [
        'download-logs',
        value$725
    ]);
};