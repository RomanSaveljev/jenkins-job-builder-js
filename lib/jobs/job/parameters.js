'use strict';
var util$890 = require('../../misc/util.js');
var String$891 = require('./parameters/value.js');
var Bool$892 = require('./parameters/value.js');
var Choice$893 = require('./parameters/choice.js');
var DynamicChoice$894 = require('./parameters/dynamic.js');
var DynamicChoiceScriptler$895 = require('./parameters/dynamic-scriptler.js');
var DynamicString$896 = require('./parameters/dynamic.js');
var DynamicStringScriptler$897 = require('./parameters/dynamic-scriptler.js');
var ExtendedChoice$898 = require('./parameters/extended-choice.js');
var File$899 = require('./parameters/file.js');
var Label$900 = require('./parameters/value.js');
var MatrixCombinations$901 = require('./parameters/matrix-combinations.js');
var Node$902 = require('./parameters/node.js');
var Password$903 = require('./parameters/value.js');
var Run$904 = require('./parameters/run.js');
var SvnTags$905 = require('./parameters/svn-tags.js');
var Text$906 = require('./parameters/text.js');
var ValidatingString$907 = require('./parameters/validating-string.js');
uppableArrayProxy(Parameters);
Parameters.prototype[util$890.camelize('bool')] = function (value$925) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'bool',
        Bool$892,
        value$925
    ]);
};
Parameters.prototype[util$890.camelize('choice')] = function (value$926) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'choice',
        Choice$893,
        value$926
    ]);
};
Parameters.prototype[util$890.camelize('dynamic-choice')] = function (value$927) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'dynamic-choice',
        DynamicChoice$894,
        value$927
    ]);
};
Parameters.prototype[util$890.camelize('dynamic-choice-scriptler')] = function (value$928) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'dynamic-choice-scriptler',
        DynamicChoiceScriptler$895,
        value$928
    ]);
};
Parameters.prototype[util$890.camelize('dynamic-string')] = function (value$929) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'dynamic-string',
        DynamicString$896,
        value$929
    ]);
};
Parameters.prototype[util$890.camelize('dynamic-string-scriptler')] = function (value$930) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'dynamic-string-scriptler',
        DynamicStringScriptler$897,
        value$930
    ]);
};
Parameters.prototype[util$890.camelize('extended-choice')] = function (value$931) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'extended-choice',
        ExtendedChoice$898,
        value$931
    ]);
};
Parameters.prototype[util$890.camelize('file')] = function (value$932) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'file',
        File$899,
        value$932
    ]);
};
Parameters.prototype[util$890.camelize('label')] = function (value$933) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'label',
        Label$900,
        value$933
    ]);
};
Parameters.prototype[util$890.camelize('matrix-combinations')] = function (value$934) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'matrix-combinations',
        MatrixCombinations$901,
        value$934
    ]);
};
Parameters.prototype[util$890.camelize('node')] = function (value$935) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'node',
        Node$902,
        value$935
    ]);
};
Parameters.prototype[util$890.camelize('password')] = function (value$936) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'password',
        Password$903,
        value$936
    ]);
};
Parameters.prototype[util$890.camelize('run')] = function (value$937) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'run',
        Run$904,
        value$937
    ]);
};
Parameters.prototype[util$890.camelize('string')] = function (value$938) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'string',
        String$891,
        value$938
    ]);
};
Parameters.prototype[util$890.camelize('svn-tags')] = function (value$939) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'svn-tags',
        SvnTags$905,
        value$939
    ]);
};
Parameters.prototype[util$890.camelize('text')] = function (value$940) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'text',
        Text$906,
        value$940
    ]);
};
Parameters.prototype[util$890.camelize('validating-string')] = function (value$941) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'validating-string',
        ValidatingString$907,
        value$941
    ]);
};