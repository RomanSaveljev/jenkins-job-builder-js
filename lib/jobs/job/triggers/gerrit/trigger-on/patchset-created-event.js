'use strict';
var util$915 = require('../../../../../misc/util.js');
var PatchsetCreatedEvent$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
PatchsetCreatedEvent$917.prototype.up = function () {
    return this.upper;
};
PatchsetCreatedEvent$917.prototype.and = PatchsetCreatedEvent$917.prototype.up;
module.exports = PatchsetCreatedEvent$917;
PatchsetCreatedEvent$917.prototype[util$915.camelize('exclude-drafts')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'exclude-drafts',
        value$923
    ]);
};
PatchsetCreatedEvent$917.prototype[util$915.camelize('exclude-trivial-rebase')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'exclude-trivial-rebase',
        value$924
    ]);
};
PatchsetCreatedEvent$917.prototype[util$915.camelize('exclude-no-code-change')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'exclude-no-code-change',
        value$925
    ]);
};