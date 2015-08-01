"use strict";

var util = require('../../misc/util.js');
var Http = require('./notifications/http.js');

var Notifications = function(upper, array) {
  this.upper = upper;
  this.array = array;
};
util.makeUppable(Notifications.prototype, 'upper');
Notifications.prototype.http = util.generateKeyedObjectElementAccessor('array', 'http', Http);

module.exports = Notifications;
