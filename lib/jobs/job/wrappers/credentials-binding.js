'use strict';
var util$915 = require('../../../misc/util.js');
var Credential$916 = require('./credentials-binding/credential.js');
var CredentialsBinding$918 = function (upper$923, array$924) {
    this.upper = upper$923;
    this.array = array$924;
};
CredentialsBinding$918.prototype.up = function () {
    return this.upper;
};
CredentialsBinding$918.prototype.and = CredentialsBinding$918.prototype.up;
module.exports = CredentialsBinding$918;
CredentialsBinding$918.prototype[util$915.camelize('zip-file')] = function (value$925) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'zip-file',
        Credential$916,
        value$925
    ]);
};
CredentialsBinding$918.prototype[util$915.camelize('file')] = function (value$926) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'file',
        Credential$916,
        value$926
    ]);
};
CredentialsBinding$918.prototype[util$915.camelize('username-password')] = function (value$927) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'username-password',
        Credential$916,
        value$927
    ]);
};
CredentialsBinding$918.prototype[util$915.camelize('text')] = function (value$928) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'text',
        Credential$916,
        value$928
    ]);
};