'use strict';
var util$890 = require('../../misc/util.js');
var Axis$891 = require('./axis.js');
uppableArrayProxy(Axes);
Axes.prototype[util$890.camelize('axis')] = function (value$893) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'axis',
        Axis$891,
        value$893
    ]);
};