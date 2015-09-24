'use strict';
var util$915 = require('../../../misc/util.js');
var SshAgentCredentials$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
SshAgentCredentials$917.prototype.up = function () {
    return this.upper;
};
SshAgentCredentials$917.prototype.and = SshAgentCredentials$917.prototype.up;
module.exports = SshAgentCredentials$917;
SshAgentCredentials$917.prototype[util$915.camelize('users')] = function (value$921) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'users',
        value$921
    ]);
};