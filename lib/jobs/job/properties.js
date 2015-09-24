'use strict';
var util$915 = require('../../misc/util.js');
var BatchTasks$916 = require('./properties/batch-tasks.js');
var BuildBlocker$917 = require('./properties/build-blocker.js');
var BuildsChainFingerprinter$918 = require('./properties/builds-chain-fingerprinter.js');
var CopyArtifact$919 = require('./properties/copyartifact.js');
var DeliveryPipeline$920 = require('./properties/delivery-pipeline.js');
var Github$921 = require('./properties/github.js');
var HeavyJob$922 = require('./properties/heavy-job.js');
var Inject$923 = require('./wrappers/inject.js');
var LeastLoad$924 = require('./properties/least-load.js');
var Ownership$925 = require('./properties/ownership.js');
var PrioritySorter$926 = require('./properties/priority-sorter.js');
var PromotedBuild$927 = require('./properties/promoted-build.js');
var SlaveUtilization$928 = require('./properties/slave-utilization.js');
var Throttle$929 = require('./properties/throttle.js');
var ZeromqEvent$930 = require('../../misc/empty-proxy.js');
var Properties$932 = function (upper$948, array$949) {
    this.upper = upper$948;
    this.array = array$949;
};
Properties$932.prototype.up = function () {
    return this.upper;
};
Properties$932.prototype.and = Properties$932.prototype.up;
module.exports = Properties$932;
Properties$932.prototype.authorization = util$915.generateToDoMember('TODO: need to decide on adding user defined properties');
Properties$932.prototype[util$915.camelize('batch-tasks')] = function (value$950) {
    return util$915.keyedArrayElementAccessor.apply(this, [
        'batch-tasks',
        BatchTasks$916,
        value$950
    ]);
};
Properties$932.prototype[util$915.camelize('build-blocker')] = function (value$951) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'build-blocker',
        BuildBlocker$917,
        value$951
    ]);
};
Properties$932.prototype[util$915.camelize('builds-chain-fingerprinter')] = function (value$952) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'builds-chain-fingerprinter',
        BuildsChainFingerprinter$918,
        value$952
    ]);
};
Properties$932.prototype[util$915.camelize('copyartifact')] = function (value$953) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'copyartifact',
        CopyArtifact$919,
        value$953
    ]);
};
Properties$932.prototype[util$915.camelize('delivery-pipeline')] = function (value$954) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'delivery-pipeline',
        DeliveryPipeline$920,
        value$954
    ]);
};
Properties$932.prototype[util$915.camelize('github')] = function (value$955) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'github',
        Github$921,
        value$955
    ]);
};
Properties$932.prototype[util$915.camelize('heavy-job')] = function (value$956) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'heavy-job',
        HeavyJob$922,
        value$956
    ]);
};
Properties$932.prototype[util$915.camelize('inject')] = function (value$957) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'inject',
        Inject$923,
        value$957
    ]);
};
Properties$932.prototype[util$915.camelize('least-load')] = function (value$958) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'least-load',
        LeastLoad$924,
        value$958
    ]);
};
Properties$932.prototype[util$915.camelize('ownership')] = function (value$959) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'ownership',
        Ownership$925,
        value$959
    ]);
};
Properties$932.prototype[util$915.camelize('priority-sorter')] = function (value$960) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'priority-sorter',
        PrioritySorter$926,
        value$960
    ]);
};
Properties$932.prototype[util$915.camelize('promoted-build')] = function (value$961) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'promoted-build',
        PromotedBuild$927,
        value$961
    ]);
};
Properties$932.prototype[util$915.camelize('slave-utilization')] = function (value$962) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'slave-utilization',
        SlaveUtilization$928,
        value$962
    ]);
};
Properties$932.prototype[util$915.camelize('throttle')] = function (value$963) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'throttle',
        Throttle$929,
        value$963
    ]);
};
Properties$932.prototype[util$915.camelize('zeromq-event')] = function (value$964) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'zeromq-event',
        ZeromqEvent$930,
        value$964
    ]);
};