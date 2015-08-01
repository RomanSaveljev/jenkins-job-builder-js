"use strict";

var util = require('../../../misc/util.js');
var Html = require('./cloverphp/html.js');
var MetricTargets = require('./cloverphp/metric-targets.js');

uppableObjectProxy(Cloverphp)
primitive(util, Cloverphp, 'xml-location')
object(util, Cloverphp, 'html', Html)
customArray(util, Cloverphp, 'metric-targets', MetricTargets)
