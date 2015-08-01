"use strict";

var util = require('../../../../misc/util.js');
var Unstable = require('./threshold.js');
var Failed = require('./threshold.js');

uppableObjectProxy(Thresholds)
object(util, Thresholds, 'unstable', Unstable)
object(util, Thresholds, 'failed', Failed)
