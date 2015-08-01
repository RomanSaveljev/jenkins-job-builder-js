'use strict';
var util$890 = require('../../../../misc/util.js');
var Note$891 = require('./note.js');
var Notes$893 = function (upper$895, array$896) {
    this.upper = upper$895;
    this.array = array$896;
};
Notes$893.prototype.up = function () {
    return this.upper;
};
Notes$893.prototype.and = Notes$893.prototype.up;
module.exports = Notes$893;
Notes$893.prototype[util$890.camelize('note')] = function (value$897) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'note',
        Note$891,
        value$897
    ]);
};