'use strict';
var util$890 = require('../../../misc/util.js');
var M2RepositoryCleanup$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
M2RepositoryCleanup$892.prototype.up = function () {
    return this.upper;
};
M2RepositoryCleanup$892.prototype.and = M2RepositoryCleanup$892.prototype.up;
module.exports = M2RepositoryCleanup$892;
M2RepositoryCleanup$892.prototype[util$890.camelize('patterns')] = function (value$896) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'patterns',
        value$896
    ]);
};