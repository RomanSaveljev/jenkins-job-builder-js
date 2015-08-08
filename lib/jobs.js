'use strict';
var util$890 = require('./misc/util.js');
var Job$891 = require('./jobs/job.js');
var Jobs$892 = function () {
    this.array = [];
    return this;
};
Jobs$892.prototype[util$890.camelize('job')] = function (value$894) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'job',
        Job$891,
        value$894
    ]);
};
module.exports = Jobs$892;