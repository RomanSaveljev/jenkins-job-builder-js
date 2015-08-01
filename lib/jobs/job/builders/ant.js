'use strict';
var util$890 = require('../../../misc/util.js');
var Ant$892 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
Ant$892.prototype.up = function () {
    return this.upper;
};
Ant$892.prototype.and = Ant$892.prototype.up;
module.exports = Ant$892;
Ant$892.prototype[util$890.camelize('targets')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'targets',
        value$899
    ]);
};
Ant$892.prototype[util$890.camelize('buildfile')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'buildfile',
        value$900
    ]);
};
Ant$892.prototype.properties = util$890.generateToDoMember('Need to figure out the undefined method proxy');
Ant$892.prototype[util$890.camelize('ant-name')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'ant-name',
        value$901
    ]);
};
Ant$892.prototype[util$890.camelize('java-opts')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'java-opts',
        value$902
    ]);
};