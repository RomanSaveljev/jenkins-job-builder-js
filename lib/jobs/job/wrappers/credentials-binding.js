'use strict';
var util$890 = require('../../../misc/util.js');
var Credential$891 = require('./credentials-binding/credential.js');
uppableArrayProxy(CredentialsBinding);
CredentialsBinding.prototype[util$890.camelize('zip-file')] = function (value$896) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'zip-file',
        Credential$891,
        value$896
    ]);
};
CredentialsBinding.prototype[util$890.camelize('file')] = function (value$897) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'file',
        Credential$891,
        value$897
    ]);
};
CredentialsBinding.prototype[util$890.camelize('username-password')] = function (value$898) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'username-password',
        Credential$891,
        value$898
    ]);
};
CredentialsBinding.prototype[util$890.camelize('text')] = function (value$899) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'text',
        Credential$891,
        value$899
    ]);
};