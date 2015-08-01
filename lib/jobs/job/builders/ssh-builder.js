'use strict';
var util$890 = require('../../../misc/util.js');
var SshBuilder$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
SshBuilder$892.prototype.up = function () {
    return this.upper;
};
SshBuilder$892.prototype.and = SshBuilder$892.prototype.up;
module.exports = SshBuilder$892;
SshBuilder$892.prototype[util$890.camelize('ssh-user-ip')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'ssh-user-ip',
        value$897
    ]);
};
SshBuilder$892.prototype[util$890.camelize('command')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'command',
        value$898
    ]);
};