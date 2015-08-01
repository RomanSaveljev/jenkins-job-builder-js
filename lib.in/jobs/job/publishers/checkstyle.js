"use strict";

var util = require('../../../misc/util.js');
var Thresholds = require('./checkstyle/thresholds.js');

uppableObjectProxy(CheckStyle)
primitive(util, CheckStyle, 'pattern')
primitive(util, CheckStyle, 'can-run-on-failed')
primitive(util, CheckStyle, 'should-detect-modules')
primitive(util, CheckStyle, 'healthy')
primitive(util, CheckStyle, 'unhealthy')
primitive(util, CheckStyle, 'health-threshold')
object(util, CheckStyle, 'thresholds', Thresholds)
primitive(util, CheckStyle, 'default-encoding')
primitive(util, CheckStyle, 'do-not-resolve-relative-paths')
primitive(util, CheckStyle, 'dont-compute-new')
primitive(util, CheckStyle, 'use-stable-build-as-reference')
primitive(util, CheckStyle, 'use-delta-values')
