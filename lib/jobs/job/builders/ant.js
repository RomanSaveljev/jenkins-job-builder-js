'use strict';
var util$940 = require('../../../misc/util.js');
var Ant$942 = function (upper$947, obj$948) {
    this.upper = upper$947;
    this.obj = obj$948;
};
Ant$942.prototype.up = function () {
    return this.upper;
};
Ant$942.prototype.and = Ant$942.prototype.up;
module.exports = Ant$942;
Ant$942.prototype[util$940.camelize('targets')] = function (value$949) {
    return util$940.primitiveAccessor.apply(this, [
        'targets',
        value$949
    ]);
};
Ant$942.prototype[util$940.camelize('buildfile')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'buildfile',
        value$950
    ]);
};
Ant$942.prototype.properties = util$940.generateToDoMember('Need to figure out the undefined method proxy');
Ant$942.prototype[util$940.camelize('ant-name')] = function (value$951) {
    return util$940.primitiveAccessor.apply(this, [
        'ant-name',
        value$951
    ]);
};
Ant$942.prototype[util$940.camelize('java-opts')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'java-opts',
        value$952
    ]);
};