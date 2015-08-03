"use strict";

var util = require('../../../misc/util.js');
var Thresholds = require('./dry/thresholds.js');

uppableObjectProxy(Pmd)
primitive(util, Pmd, 'pattern')
primitive(util, Pmd, 'can-run-on-failed')
primitive(util, Pmd, 'should-detect-modules')
primitive(util, Pmd, 'healthy')
primitive(util, Pmd, 'unhealthy')
primitive(util, Pmd, 'health-threshold')
object(util, Pmd, 'thresholds', Thresholds)
primitive(util, Pmd, 'default-encoding')
primitive(util, Pmd, 'do-not-resolve-relative-paths')
primitive(util, Pmd, 'dont-compute-new')
primitive(util, Pmd, 'use-stable-build-as-reference')
primitive(util, Pmd, 'use-delta-values')
