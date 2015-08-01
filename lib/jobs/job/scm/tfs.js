'use strict';
var util$890 = require('../../../misc/util.js');
var WebAccess$891 = require('./tfs/web-access.js');
var Tfs$893 = function (upper$901, obj$902) {
    this.upper = upper$901;
    this.obj = obj$902;
};
Tfs$893.prototype.up = function () {
    return this.upper;
};
Tfs$893.prototype.and = Tfs$893.prototype.up;
module.exports = Tfs$893;
Tfs$893.prototype[util$890.camelize('server-url')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'server-url',
        value$903
    ]);
};
Tfs$893.prototype[util$890.camelize('project-path')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'project-path',
        value$904
    ]);
};
Tfs$893.prototype[util$890.camelize('login')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'login',
        value$905
    ]);
};
Tfs$893.prototype[util$890.camelize('use-update')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'use-update',
        value$906
    ]);
};
Tfs$893.prototype[util$890.camelize('local-path')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'local-path',
        value$907
    ]);
};
Tfs$893.prototype[util$890.camelize('workspace')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'workspace',
        value$908
    ]);
};
Tfs$893.prototype[util$890.camelize('web-access')] = function (value$909) {
    return util$890.objectArrayAccessor.apply(this, [
        'web-access',
        WebAccess$891,
        value$909
    ]);
};