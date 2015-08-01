"use strict";

var util = require('../../../misc/util.js');
var Thresholds = require('./dry/thresholds.js');

uppableObjectProxy(Dry)
primitive(util, Dry, 'pattern')
primitive(util, Dry, 'can-run-on-failed')
primitive(util, Dry, 'should-detect-modules')
primitive(util, Dry, 'healthy')
primitive(util, Dry, 'unhealthy')
primitive(util, Dry, 'health-threshold')
primitive(util, Dry, 'high-threshold')
primitive(util, Dry, 'normal-threshold')
object(util, Dry, 'thresholds', Thresholds)
primitive(util, Dry, 'default-encoding')
primitive(util, Dry, 'do-not-resolve-relative-paths')
primitive(util, Dry, 'dont-compute-new')
primitive(util, Dry, 'use-stable-build-as-reference')
primitive(util, Dry, 'use-delta-values')
