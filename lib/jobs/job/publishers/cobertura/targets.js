'use strict';
var util$890 = require('../../../../misc/util.js');
var Target$891 = require('./target.js');
uppableArrayProxy(Targets);
Targets.prototype[util$890.camelize('files')] = function (value$898) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'files',
        Target$891,
        value$898
    ]);
};
Targets.prototype[util$890.camelize('packages')] = function (value$899) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'packages',
        Target$891,
        value$899
    ]);
};
Targets.prototype[util$890.camelize('method')] = function (value$900) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'method',
        Target$891,
        value$900
    ]);
};
Targets.prototype[util$890.camelize('classes')] = function (value$901) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'classes',
        Target$891,
        value$901
    ]);
};
Targets.prototype[util$890.camelize('line')] = function (value$902) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'line',
        Target$891,
        value$902
    ]);
};
Targets.prototype[util$890.camelize('conditional')] = function (value$903) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'conditional',
        Target$891,
        value$903
    ]);
};