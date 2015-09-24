'use strict';
var util$915 = require('../../../misc/util.js');
var WorkspaceFileScanner$916 = require('./warnings/workspace-file-scanner.js');
var TotalThresholds$917 = require('./warnings/total-thresholds.js');
var NewThresholds$918 = require('./warnings/new-thresholds.js');
var Warnings$920 = function (upper$936, obj$937) {
    this.upper = upper$936;
    this.obj = obj$937;
};
Warnings$920.prototype.up = function () {
    return this.upper;
};
Warnings$920.prototype.and = Warnings$920.prototype.up;
module.exports = Warnings$920;
Warnings$920.prototype[util$915.camelize('console-log-parsers')] = function (value$938) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'console-log-parsers',
        value$938
    ]);
};
Warnings$920.prototype[util$915.camelize('workspace-file-scanners')] = function (value$939) {
    return util$915.objectArrayAccessor.apply(this, [
        'workspace-file-scanners',
        WorkspaceFileScanner$916,
        value$939
    ]);
};
Warnings$920.prototype[util$915.camelize('files-to-include')] = function (value$940) {
    return util$915.primitiveAccessor.apply(this, [
        'files-to-include',
        value$940
    ]);
};
Warnings$920.prototype[util$915.camelize('files-to-ignore')] = function (value$941) {
    return util$915.primitiveAccessor.apply(this, [
        'files-to-ignore',
        value$941
    ]);
};
Warnings$920.prototype[util$915.camelize('run-always')] = function (value$942) {
    return util$915.primitiveAccessor.apply(this, [
        'run-always',
        value$942
    ]);
};
Warnings$920.prototype[util$915.camelize('detect-modules')] = function (value$943) {
    return util$915.primitiveAccessor.apply(this, [
        'detect-modules',
        value$943
    ]);
};
Warnings$920.prototype[util$915.camelize('resolve-relative-paths')] = function (value$944) {
    return util$915.primitiveAccessor.apply(this, [
        'resolve-relative-paths',
        value$944
    ]);
};
Warnings$920.prototype[util$915.camelize('health-threshold-high')] = function (value$945) {
    return util$915.primitiveAccessor.apply(this, [
        'health-threshold-high',
        value$945
    ]);
};
Warnings$920.prototype[util$915.camelize('health-threshold-low')] = function (value$946) {
    return util$915.primitiveAccessor.apply(this, [
        'health-threshold-low',
        value$946
    ]);
};
Warnings$920.prototype[util$915.camelize('health-priorities')] = function (value$947) {
    return util$915.primitiveAccessor.apply(this, [
        'health-priorities',
        value$947
    ]);
};
Warnings$920.prototype[util$915.camelize('total-thresholds')] = function (value$948) {
    return util$915.objectAccessor.apply(this, [
        'total-thresholds',
        TotalThresholds$917,
        value$948
    ]);
};
Warnings$920.prototype[util$915.camelize('new-thresholds')] = function (value$949) {
    return util$915.objectAccessor.apply(this, [
        'new-thresholds',
        NewThresholds$918,
        value$949
    ]);
};
Warnings$920.prototype[util$915.camelize('use-delta-for-new-warnings')] = function (value$950) {
    return util$915.primitiveAccessor.apply(this, [
        'use-delta-for-new-warnings',
        value$950
    ]);
};
Warnings$920.prototype[util$915.camelize('only-use-stable-builds-as-reference')] = function (value$951) {
    return util$915.primitiveAccessor.apply(this, [
        'only-use-stable-builds-as-reference',
        value$951
    ]);
};
Warnings$920.prototype[util$915.camelize('default-encoding')] = function (value$952) {
    return util$915.primitiveAccessor.apply(this, [
        'default-encoding',
        value$952
    ]);
};