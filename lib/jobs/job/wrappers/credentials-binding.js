'use strict';
var util$890 = require('../../../misc/util.js');
var Credential$891 = require('./credentials-binding/credential.js');
var CredentialsBinding$893 = function (upper$898, array$899) {
    this.upper = upper$898;
    this.array = array$899;
};
CredentialsBinding$893.prototype.up = function () {
    return this.upper;
};
CredentialsBinding$893.prototype.and = CredentialsBinding$893.prototype.up;
module.exports = CredentialsBinding$893;
CredentialsBinding$893.prototype[util$890.camelize('zip-file')] = function (value$900) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'zip-file',
        Credential$891,
        value$900
    ]);
};
CredentialsBinding$893.prototype[util$890.camelize('file')] = function (value$901) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'file',
        Credential$891,
        value$901
    ]);
};
CredentialsBinding$893.prototype[util$890.camelize('username-password')] = function (value$902) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'username-password',
        Credential$891,
        value$902
    ]);
};
CredentialsBinding$893.prototype[util$890.camelize('text')] = function (value$903) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'text',
        Credential$891,
        value$903
    ]);
};