'use strict';
var util$915 = require('../../../misc/util.js');
var SshBuilder$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
SshBuilder$917.prototype.up = function () {
    return this.upper;
};
SshBuilder$917.prototype.and = SshBuilder$917.prototype.up;
module.exports = SshBuilder$917;
SshBuilder$917.prototype[util$915.camelize('ssh-user-ip')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'ssh-user-ip',
        value$922
    ]);
};
SshBuilder$917.prototype[util$915.camelize('command')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'command',
        value$923
    ]);
};