"use strict";

var util = require('../../../../misc/util.js');
var Threshold = require('./threshold.js');

uppableArrayProxy(Thresholds)
keyedObjectElement(util, Thresholds, 'failed', Threshold)
keyedObjectElement(util, Thresholds, 'skipped', Threshold)
