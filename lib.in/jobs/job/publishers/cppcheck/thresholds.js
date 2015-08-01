"use strict";

var util = require('../../../../misc/util.js');
var Severity = require('./thresholds/severity.js');

uppableObjectProxy(Thresholds)
primitive(util, Thresholds, 'unstable')
primitive(util, Thresholds, 'new-unstable')
primitive(util, Thresholds, 'failure')
primitive(util, Thresholds, 'new-failure')
object(util, Thresholds, 'severity', Severity)
