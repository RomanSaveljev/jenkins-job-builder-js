'use strict';
var util$890 = require('../../../../misc/util.js');
var Note$891 = require('./note.js');
uppableArrayProxy(Notes);
Notes.prototype[util$890.camelize('note')] = function (value$893) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'note',
        Note$891,
        value$893
    ]);
};