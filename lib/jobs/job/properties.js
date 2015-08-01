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
uppableArrayProxy(Properties);
Properties.prototype.authorization = util$890.generateToDomember('TODO: need to decide on adding user defined properties');
Properties.prototype[util$890.camelize('batch-tasks')] = function (value$921) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'batch-tasks',
        BatchTasks$891,
        value$921
    ]);
};
Properties.prototype[util$890.camelize('build-blocker')] = function (value$922) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'build-blocker',
        BuildBlocker$892,
        value$922
    ]);
};
Properties.prototype[util$890.camelize('builds-chain-fingerprinter')] = function (value$923) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'builds-chain-fingerprinter',
        BuildsChainFingerprinter$893,
        value$923
    ]);
};
Properties.prototype[util$890.camelize('copyartifact')] = function (value$924) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'copyartifact',
        CopyArtifact$894,
        value$924
    ]);
};
Properties.prototype[util$890.camelize('delivery-pipeline')] = function (value$925) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'delivery-pipeline',
        DeliveryPipeline$895,
        value$925
    ]);
};
Properties.prototype[util$890.camelize('github')] = function (value$926) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'github',
        Github$896,
        value$926
    ]);
};
Properties.prototype[util$890.camelize('heavy-job')] = function (value$927) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'heavy-job',
        HeavyJob$897,
        value$927
    ]);
};
Properties.prototype[util$890.camelize('inject')] = function (value$928) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'inject',
        Inject$898,
        value$928
    ]);
};
Properties.prototype[util$890.camelize('least-load')] = function (value$929) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'least-load',
        LeastLoad$899,
        value$929
    ]);
};
Properties.prototype[util$890.camelize('ownership')] = function (value$930) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'ownership',
        Ownership$900,
        value$930
    ]);
};
Properties.prototype[util$890.camelize('priority-sorter')] = function (value$931) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'priority-sorter',
        PrioritySorter$901,
        value$931
    ]);
};
Properties.prototype[util$890.camelize('promoted-build')] = function (value$932) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'promoted-build',
        PromotedBuild$902,
        value$932
    ]);
};
Properties.prototype[util$890.camelize('slave-utilization')] = function (value$933) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'slave-utilization',
        SlaveUtilization$903,
        value$933
    ]);
};
Properties.prototype[util$890.camelize('throttle')] = function (value$934) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'throttle',
        Throttle$904,
        value$934
    ]);
};
Properties.prototype[util$890.camelize('zeromq-event')] = function (value$935) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'zeromq-event',
        ZeromqEvent$905,
        value$935
    ]);
};