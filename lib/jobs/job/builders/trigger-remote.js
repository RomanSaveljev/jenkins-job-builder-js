'use strict';
var util$915 = require('../../../misc/util.js');
var TriggerRemote$917 = function (upper$927, obj$928) {
    this.upper = upper$927;
    this.obj = obj$928;
};
TriggerRemote$917.prototype.up = function () {
    return this.upper;
};
TriggerRemote$917.prototype.and = TriggerRemote$917.prototype.up;
module.exports = TriggerRemote$917;
TriggerRemote$917.prototype[util$915.camelize('remote-jenkins-name')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'remote-jenkins-name',
        value$929
    ]);
};
TriggerRemote$917.prototype[util$915.camelize('job')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'job',
        value$930
    ]);
};
TriggerRemote$917.prototype[util$915.camelize('should-not-fail-build')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'should-not-fail-build',
        value$931
    ]);
};
TriggerRemote$917.prototype[util$915.camelize('prevent-remote-build-queue')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'prevent-remote-build-queue',
        value$932
    ]);
};
TriggerRemote$917.prototype[util$915.camelize('block')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'block',
        value$933
    ]);
};
TriggerRemote$917.prototype[util$915.camelize('poll-interval')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'poll-interval',
        value$934
    ]);
};
TriggerRemote$917.prototype[util$915.camelize('connection-retry-limit')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'connection-retry-limit',
        value$935
    ]);
};
TriggerRemote$917.prototype[util$915.camelize('predefined-parameters')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'predefined-parameters',
        value$936
    ]);
};
TriggerRemote$917.prototype[util$915.camelize('property-file')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'property-file',
        value$937
    ]);
};