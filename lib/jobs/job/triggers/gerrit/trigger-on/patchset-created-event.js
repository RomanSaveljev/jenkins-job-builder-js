'use strict';
var util$890 = require('../../../../../misc/util.js');
var PatchsetCreatedEvent$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
PatchsetCreatedEvent$892.prototype.up = function () {
    return this.upper;
};
PatchsetCreatedEvent$892.prototype.and = PatchsetCreatedEvent$892.prototype.up;
module.exports = PatchsetCreatedEvent$892;
PatchsetCreatedEvent$892.prototype[util$890.camelize('exclude-drafts')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'exclude-drafts',
        value$898
    ]);
};
PatchsetCreatedEvent$892.prototype[util$890.camelize('exclude-trivial-rebase')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'exclude-trivial-rebase',
        value$899
    ]);
};
PatchsetCreatedEvent$892.prototype[util$890.camelize('exclude-no-code-change')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'exclude-no-code-change',
        value$900
    ]);
};