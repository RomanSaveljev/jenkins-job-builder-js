'use strict';
var util$890 = require('../../../../misc/util.js');
var Tag$891 = require('./tag.js');
uppableArrayProxy(Tags);
Tags.prototype[util$890.camelize('tag')] = function (value$893) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'tag',
        Tag$891,
        value$893
    ]);
};