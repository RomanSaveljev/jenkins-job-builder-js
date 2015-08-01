"use strict";

var util = require('../../misc/util.js');
var Http = require('./notifications/http.js');

uppableArrayProxy(Notifications)
keyedObjectElement(util, Notifications, 'http', Http)
