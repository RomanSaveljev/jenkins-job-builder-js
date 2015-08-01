'use strict';
var util$890 = require('../../../../misc/util.js');
var Healthy$891 = require('./metric-target.js');
var Unhealthy$892 = require('./metric-target.js');
var Failing$893 = require('./metric-target.js');
uppableArrayProxy(MetricTargets);
MetricTargets.prototype[util$890.camelize('healthy')] = function (value$897) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'healthy',
        Healthy$891,
        value$897
    ]);
};
MetricTargets.prototype[util$890.camelize('healthy')] = function (value$898) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'healthy',
        Unhealthy$892,
        value$898
    ]);
};
MetricTargets.prototype[util$890.camelize('failing')] = function (value$899) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'failing',
        Failing$893,
        value$899
    ]);
};