'use strict';
var util$890 = require('../../../misc/util.js');
var SshAgentCredentials$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
SshAgentCredentials$892.prototype.up = function () {
    return this.upper;
};
SshAgentCredentials$892.prototype.and = SshAgentCredentials$892.prototype.up;
module.exports = SshAgentCredentials$892;
SshAgentCredentials$892.prototype[util$890.camelize('users')] = function (value$896) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'users',
        value$896
    ]);
};