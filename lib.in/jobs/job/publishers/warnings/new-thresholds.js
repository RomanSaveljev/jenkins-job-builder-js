"use strict";

var util = require('../../../../misc/util.js');
var NewThreshold = require('./new-threshold.js');

uppableObjectProxy(NewThresholds)
object(util, NewThresholds, 'unstable', NewThreshold)
object(util, NewThresholds, 'failed', NewThreshold)
