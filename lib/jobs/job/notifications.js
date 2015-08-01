'use strict';
var util$890 = require('../../misc/util.js');
var Http$891 = require('./notifications/http.js');
uppableArrayProxy(Notifications);
Notifications.prototype[util$890.camelize('http')] = function (value$893) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'http',
        Http$891,
        value$893
    ]);
};