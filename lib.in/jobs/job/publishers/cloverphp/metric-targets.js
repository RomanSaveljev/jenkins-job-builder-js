"use strict";

var util = require('../../../../misc/util.js');
var Healthy = require('./metric-target.js');
var Unhealthy = require('./metric-target.js');
var Failing = require('./metric-target.js');

uppableArrayProxy(MetricTargets)
keyedObjectElement(util, MetricTargets, 'healthy', Healthy)
keyedObjectElement(util, MetricTargets, 'unhealthy', Unhealthy)
keyedObjectElement(util, MetricTargets, 'failing', Failing)
