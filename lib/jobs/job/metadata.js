'use strict';
var util$890 = require('../../misc/util.js');
var DateObject$891 = require('./metadata/date.js');
var Primitive$892 = require('./metadata/primitive.js');
uppableArrayProxy(Metadata);
Metadata.prototype[util$890.camelize('date')] = function (value$896) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'date',
        DateObject$891,
        value$896
    ]);
};
Metadata.prototype[util$890.camelize('number')] = function (value$897) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'number',
        Primitive$892,
        value$897
    ]);
};
Metadata.prototype[util$890.camelize('string')] = function (value$898) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'string',
        Primitive$892,
        value$898
    ]);
};