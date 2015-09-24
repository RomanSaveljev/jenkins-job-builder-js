'use strict';
var util$915 = require('../../../misc/util.js');
var Ant$917 = function (upper$922, obj$923) {
    this.upper = upper$922;
    this.obj = obj$923;
};
Ant$917.prototype.up = function () {
    return this.upper;
};
Ant$917.prototype.and = Ant$917.prototype.up;
module.exports = Ant$917;
Ant$917.prototype[util$915.camelize('targets')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'targets',
        value$924
    ]);
};
Ant$917.prototype[util$915.camelize('buildfile')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'buildfile',
        value$925
    ]);
};
Ant$917.prototype.properties = util$915.generateToDoMember('Need to figure out the undefined method proxy');
Ant$917.prototype[util$915.camelize('ant-name')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'ant-name',
        value$926
    ]);
};
Ant$917.prototype[util$915.camelize('java-opts')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'java-opts',
        value$927
    ]);
};