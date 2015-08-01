'use strict';
var util$890 = require('../../../../misc/util.js');
var Target$891 = require('./target.js');
uppableArrayProxy(Targets);
Targets.prototype[util$890.camelize('total-coverage')] = function (value$894) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'total-coverage',
        Target$891,
        value$894
    ]);
};
Targets.prototype[util$890.camelize('code-coverage')] = function (value$895) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'code-coverage',
        Target$891,
        value$895
    ]);
};