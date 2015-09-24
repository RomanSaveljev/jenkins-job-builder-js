'use strict';
var util$915 = require('../../../misc/util.js');
var WebAccess$916 = require('./tfs/web-access.js');
var Tfs$918 = function (upper$926, obj$927) {
    this.upper = upper$926;
    this.obj = obj$927;
};
Tfs$918.prototype.up = function () {
    return this.upper;
};
Tfs$918.prototype.and = Tfs$918.prototype.up;
module.exports = Tfs$918;
Tfs$918.prototype[util$915.camelize('server-url')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'server-url',
        value$928
    ]);
};
Tfs$918.prototype[util$915.camelize('project-path')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'project-path',
        value$929
    ]);
};
Tfs$918.prototype[util$915.camelize('login')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'login',
        value$930
    ]);
};
Tfs$918.prototype[util$915.camelize('use-update')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'use-update',
        value$931
    ]);
};
Tfs$918.prototype[util$915.camelize('local-path')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'local-path',
        value$932
    ]);
};
Tfs$918.prototype[util$915.camelize('workspace')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'workspace',
        value$933
    ]);
};
Tfs$918.prototype[util$915.camelize('web-access')] = function (value$934) {
    return util$915.objectArrayAccessor.apply(this, [
        'web-access',
        WebAccess$916,
        value$934
    ]);
};