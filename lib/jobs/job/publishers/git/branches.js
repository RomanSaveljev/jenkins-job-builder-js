'use strict';
var util$890 = require('../../../../misc/util.js');
var Branch$891 = require('./branch.js');
uppableArrayProxy(Branches);
Branches.prototype[util$890.camelize('branch')] = function (value$893) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'branch',
        Branch$891,
        value$893
    ]);
};