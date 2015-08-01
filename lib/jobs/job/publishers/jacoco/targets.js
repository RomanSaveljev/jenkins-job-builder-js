'use strict';
var util$890 = require('../../../../misc/util.js');
var Target$891 = require('./target.js');
uppableArrayProxy(Targets);
Targets.prototype[util$890.camelize('branch')] = function (value$897) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'branch',
        Target$891,
        value$897
    ]);
};
Targets.prototype[util$890.camelize('complexity')] = function (value$898) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'complexity',
        Target$891,
        value$898
    ]);
};
Targets.prototype[util$890.camelize('line')] = function (value$899) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'line',
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
Targets.prototype[util$890.camelize('class')] = function (value$901) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'class',
        Target$891,
        value$901
    ]);
};