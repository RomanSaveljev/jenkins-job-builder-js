'use strict';
var util$890 = require('../../misc/util.js');
var BatchTasks$891 = require('./properties/batch-tasks.js');
var BuildBlocker$892 = require('./properties/build-blocker.js');
var BuildsChainFingerprinter$893 = require('./properties/builds-chain-fingerprinter.js');
var CopyArtifact$894 = require('./properties/copyartifact.js');
var DeliveryPipeline$895 = require('./properties/delivery-pipeline.js');
var Github$896 = require('./properties/github.js');
var HeavyJob$897 = require('./properties/heavy-job.js');
var Inject$898 = require('./wrappers/inject.js');
var LeastLoad$899 = require('./properties/least-load.js');
var Ownership$900 = require('./properties/ownership.js');
var PrioritySorter$901 = require('./properties/priority-sorter.js');
var PromotedBuild$902 = require('./properties/promoted-build.js');
var SlaveUtilization$903 = require('./properties/slave-utilization.js');
var Throttle$904 = require('./properties/throttle.js');
var ZeromqEvent$905 = require('../../misc/empty-proxy.js');
var Properties$907 = function (upper$923, array$924) {
    this.upper = upper$923;
    this.array = array$924;
};
Properties$907.prototype.up = function () {
    return this.upper;
};
Properties$907.prototype.and = Properties$907.prototype.up;
module.exports = Properties$907;
Properties$907.prototype.authorization = util$890.generateToDoMember('TODO: need to decide on adding user defined properties');
Properties$907.prototype[util$890.camelize('batch-tasks')] = function (value$925) {
    return util$890.keyedArrayElementAccessor.apply(this, [
        'batch-tasks',
        BatchTasks$891,
        value$925
    ]);
};
Properties$907.prototype[util$890.camelize('build-blocker')] = function (value$926) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'build-blocker',
        BuildBlocker$892,
        value$926
    ]);
};
Properties$907.prototype[util$890.camelize('builds-chain-fingerprinter')] = function (value$927) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'builds-chain-fingerprinter',
        BuildsChainFingerprinter$893,
        value$927
    ]);
};
Properties$907.prototype[util$890.camelize('copyartifact')] = function (value$928) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'copyartifact',
        CopyArtifact$894,
        value$928
    ]);
};
Properties$907.prototype[util$890.camelize('delivery-pipeline')] = function (value$929) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'delivery-pipeline',
        DeliveryPipeline$895,
        value$929
    ]);
};
Properties$907.prototype[util$890.camelize('github')] = function (value$930) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'github',
        Github$896,
        value$930
    ]);
};
Properties$907.prototype[util$890.camelize('heavy-job')] = function (value$931) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'heavy-job',
        HeavyJob$897,
        value$931
    ]);
};
Properties$907.prototype[util$890.camelize('inject')] = function (value$932) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'inject',
        Inject$898,
        value$932
    ]);
};
Properties$907.prototype[util$890.camelize('least-load')] = function (value$933) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'least-load',
        LeastLoad$899,
        value$933
    ]);
};
Properties$907.prototype[util$890.camelize('ownership')] = function (value$934) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'ownership',
        Ownership$900,
        value$934
    ]);
};
Properties$907.prototype[util$890.camelize('priority-sorter')] = function (value$935) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'priority-sorter',
        PrioritySorter$901,
        value$935
    ]);
};
Properties$907.prototype[util$890.camelize('promoted-build')] = function (value$936) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'promoted-build',
        PromotedBuild$902,
        value$936
    ]);
};
Properties$907.prototype[util$890.camelize('slave-utilization')] = function (value$937) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'slave-utilization',
        SlaveUtilization$903,
        value$937
    ]);
};
Properties$907.prototype[util$890.camelize('throttle')] = function (value$938) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'throttle',
        Throttle$904,
        value$938
    ]);
};
Properties$907.prototype[util$890.camelize('zeromq-event')] = function (value$939) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'zeromq-event',
        ZeromqEvent$905,
        value$939
    ]);
};