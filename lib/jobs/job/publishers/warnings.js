'use strict';
var util$890 = require('../../../misc/util.js');
var WorkspaceFileScanner$891 = require('./warnings/workspace-file-scanner.js');
var TotalThresholds$892 = require('./warnings/total-thresholds.js');
var NewThresholds$893 = require('./warnings/new-thresholds.js');
var Warnings$895 = function (upper$911, obj$912) {
    this.upper = upper$911;
    this.obj = obj$912;
};
Warnings$895.prototype.up = function () {
    return this.upper;
};
Warnings$895.prototype.and = Warnings$895.prototype.up;
module.exports = Warnings$895;
Warnings$895.prototype[util$890.camelize('console-log-parsers')] = function (value$913) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'console-log-parsers',
        value$913
    ]);
};
Warnings$895.prototype[util$890.camelize('workspace-file-scanners')] = function (value$914) {
    return util$890.objectArrayAccessor.apply(this, [
        'workspace-file-scanners',
        WorkspaceFileScanner$891,
        value$914
    ]);
};
Warnings$895.prototype[util$890.camelize('files-to-include')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'files-to-include',
        value$915
    ]);
};
Warnings$895.prototype[util$890.camelize('files-to-ignore')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'files-to-ignore',
        value$916
    ]);
};
Warnings$895.prototype[util$890.camelize('run-always')] = function (value$917) {
    return util$890.primitiveAccessor.apply(this, [
        'run-always',
        value$917
    ]);
};
Warnings$895.prototype[util$890.camelize('detect-modules')] = function (value$918) {
    return util$890.primitiveAccessor.apply(this, [
        'detect-modules',
        value$918
    ]);
};
Warnings$895.prototype[util$890.camelize('resolve-relative-paths')] = function (value$919) {
    return util$890.primitiveAccessor.apply(this, [
        'resolve-relative-paths',
        value$919
    ]);
};
Warnings$895.prototype[util$890.camelize('health-threshold-high')] = function (value$920) {
    return util$890.primitiveAccessor.apply(this, [
        'health-threshold-high',
        value$920
    ]);
};
Warnings$895.prototype[util$890.camelize('health-threshold-low')] = function (value$921) {
    return util$890.primitiveAccessor.apply(this, [
        'health-threshold-low',
        value$921
    ]);
};
Warnings$895.prototype[util$890.camelize('health-priorities')] = function (value$922) {
    return util$890.primitiveAccessor.apply(this, [
        'health-priorities',
        value$922
    ]);
};
Warnings$895.prototype[util$890.camelize('total-thresholds')] = function (value$923) {
    return util$890.objectAccessor.apply(this, [
        'total-thresholds',
        TotalThresholds$892,
        value$923
    ]);
};
Warnings$895.prototype[util$890.camelize('new-thresholds')] = function (value$924) {
    return util$890.objectAccessor.apply(this, [
        'new-thresholds',
        NewThresholds$893,
        value$924
    ]);
};
Warnings$895.prototype[util$890.camelize('use-delta-for-new-warnings')] = function (value$925) {
    return util$890.primitiveAccessor.apply(this, [
        'use-delta-for-new-warnings',
        value$925
    ]);
};
Warnings$895.prototype[util$890.camelize('only-use-stable-builds-as-reference')] = function (value$926) {
    return util$890.primitiveAccessor.apply(this, [
        'only-use-stable-builds-as-reference',
        value$926
    ]);
};
Warnings$895.prototype[util$890.camelize('default-encoding')] = function (value$927) {
    return util$890.primitiveAccessor.apply(this, [
        'default-encoding',
        value$927
    ]);
};