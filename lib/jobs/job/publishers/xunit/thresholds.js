'use strict';
var util$890 = require('../../../../misc/util.js');
var Threshold$891 = require('./threshold.js');
uppableArrayProxy(Thresholds);
Thresholds.prototype[util$890.camelize('failed')] = function (value$894) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'failed',
        Threshold$891,
        value$894
    ]);
};
Thresholds.prototype[util$890.camelize('skipped')] = function (value$895) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'skipped',
        Threshold$891,
        value$895
    ]);
};