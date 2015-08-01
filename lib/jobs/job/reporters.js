'use strict';
var util$890 = require('../../misc/util.js');
var Email$891 = require('./reporters/email.js');
var FindBugs$892 = require('./publishers/findbugs.js');
uppableArrayProxy(Reporters);
Reporters.prototype[util$890.camelize('email')] = function (value$895) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'email',
        Email$891,
        value$895
    ]);
};
Reporters.prototype[util$890.camelize('findbugs')] = function (value$896) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'findbugs',
        FindBugs$892,
        value$896
    ]);
};