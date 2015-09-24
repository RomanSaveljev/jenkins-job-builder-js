'use strict';
var util$915 = require('../../misc/util.js');
var String$916 = require('./parameters/value.js');
var Bool$917 = require('./parameters/value.js');
var Choice$918 = require('./parameters/choice.js');
var DynamicChoice$919 = require('./parameters/dynamic.js');
var DynamicChoiceScriptler$920 = require('./parameters/dynamic-scriptler.js');
var DynamicString$921 = require('./parameters/dynamic.js');
var DynamicStringScriptler$922 = require('./parameters/dynamic-scriptler.js');
var ExtendedChoice$923 = require('./parameters/extended-choice.js');
var File$924 = require('./parameters/file.js');
var Label$925 = require('./parameters/value.js');
var MatrixCombinations$926 = require('./parameters/matrix-combinations.js');
var Node$927 = require('./parameters/node.js');
var Password$928 = require('./parameters/value.js');
var Run$929 = require('./parameters/run.js');
var SvnTags$930 = require('./parameters/svn-tags.js');
var Text$931 = require('./parameters/value.js');
var ValidatingString$932 = require('./parameters/validating-string.js');
var Parameters$934 = function (upper$952, array$953) {
    this.upper = upper$952;
    this.array = array$953;
};
Parameters$934.prototype.up = function () {
    return this.upper;
};
Parameters$934.prototype.and = Parameters$934.prototype.up;
module.exports = Parameters$934;
Parameters$934.prototype[util$915.camelize('bool')] = function (value$954) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'bool',
        Bool$917,
        value$954
    ]);
};
Parameters$934.prototype[util$915.camelize('choice')] = function (value$955) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'choice',
        Choice$918,
        value$955
    ]);
};
Parameters$934.prototype[util$915.camelize('dynamic-choice')] = function (value$956) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'dynamic-choice',
        DynamicChoice$919,
        value$956
    ]);
};
Parameters$934.prototype[util$915.camelize('dynamic-choice-scriptler')] = function (value$957) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'dynamic-choice-scriptler',
        DynamicChoiceScriptler$920,
        value$957
    ]);
};
Parameters$934.prototype[util$915.camelize('dynamic-string')] = function (value$958) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'dynamic-string',
        DynamicString$921,
        value$958
    ]);
};
Parameters$934.prototype[util$915.camelize('dynamic-string-scriptler')] = function (value$959) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'dynamic-string-scriptler',
        DynamicStringScriptler$922,
        value$959
    ]);
};
Parameters$934.prototype[util$915.camelize('extended-choice')] = function (value$960) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'extended-choice',
        ExtendedChoice$923,
        value$960
    ]);
};
Parameters$934.prototype[util$915.camelize('file')] = function (value$961) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'file',
        File$924,
        value$961
    ]);
};
Parameters$934.prototype[util$915.camelize('label')] = function (value$962) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'label',
        Label$925,
        value$962
    ]);
};
Parameters$934.prototype[util$915.camelize('matrix-combinations')] = function (value$963) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'matrix-combinations',
        MatrixCombinations$926,
        value$963
    ]);
};
Parameters$934.prototype[util$915.camelize('node')] = function (value$964) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'node',
        Node$927,
        value$964
    ]);
};
Parameters$934.prototype[util$915.camelize('password')] = function (value$965) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'password',
        Password$928,
        value$965
    ]);
};
Parameters$934.prototype[util$915.camelize('run')] = function (value$966) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'run',
        Run$929,
        value$966
    ]);
};
Parameters$934.prototype[util$915.camelize('string')] = function (value$967) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'string',
        String$916,
        value$967
    ]);
};
Parameters$934.prototype[util$915.camelize('svn-tags')] = function (value$968) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'svn-tags',
        SvnTags$930,
        value$968
    ]);
};
Parameters$934.prototype[util$915.camelize('text')] = function (value$969) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'text',
        Text$931,
        value$969
    ]);
};
Parameters$934.prototype[util$915.camelize('validating-string')] = function (value$970) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'validating-string',
        ValidatingString$932,
        value$970
    ]);
};