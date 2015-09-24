'use strict';
var util$915 = require('./misc/util.js');
var Job$916 = require('./jobs/job.js');
var Jobs$917 = function () {
    this.array = [];
    return this;
};
Jobs$917.prototype[util$915.camelize('job')] = function (value$919) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'job',
        Job$916,
        value$919
    ]);
};
module.exports = Jobs$917;