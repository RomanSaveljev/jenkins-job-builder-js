'use strict';
var util$890 = require('../../../misc/util.js');
var TriggerRemote$892 = function (upper$902, obj$903) {
    this.upper = upper$902;
    this.obj = obj$903;
};
TriggerRemote$892.prototype.up = function () {
    return this.upper;
};
TriggerRemote$892.prototype.and = TriggerRemote$892.prototype.up;
module.exports = TriggerRemote$892;
TriggerRemote$892.prototype[util$890.camelize('remote-jenkins-name')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'remote-jenkins-name',
        value$904
    ]);
};
TriggerRemote$892.prototype[util$890.camelize('job')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'job',
        value$905
    ]);
};
TriggerRemote$892.prototype[util$890.camelize('should-not-fail-build')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'should-not-fail-build',
        value$906
    ]);
};
TriggerRemote$892.prototype[util$890.camelize('prevent-remote-build-queue')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'prevent-remote-build-queue',
        value$907
    ]);
};
TriggerRemote$892.prototype[util$890.camelize('block')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'block',
        value$908
    ]);
};
TriggerRemote$892.prototype[util$890.camelize('poll-interval')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'poll-interval',
        value$909
    ]);
};
TriggerRemote$892.prototype[util$890.camelize('connection-retry-limit')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'connection-retry-limit',
        value$910
    ]);
};
TriggerRemote$892.prototype[util$890.camelize('predefined-parameters')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'predefined-parameters',
        value$911
    ]);
};
TriggerRemote$892.prototype[util$890.camelize('property-file')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'property-file',
        value$912
    ]);
};