"use strict";

var util = require('../../../misc/util.js');
var Thresholds = require('./dry/thresholds.js');

uppableObjectProxy(FindBugs)
primitive(util, FindBugs, 'pattern')
primitive(util, FindBugs, 'rank-priority')
primitive(util, FindBugs, 'include-files')
primitive(util, FindBugs, 'exclude-files')
primitive(util, FindBugs, 'can-run-on-failed')
primitive(util, FindBugs, 'should-detect-modules')
primitive(util, FindBugs, 'healthy')
primitive(util, FindBugs, 'unhealthy')
primitive(util, FindBugs, 'health-threshold')
primitive(util, FindBugs, 'dont-compute-new')
primitive(util, FindBugs, 'use-delta-values')
primitive(util, FindBugs, 'use-previous-build-as-reference')
primitive(util, FindBugs, 'use-stable-build-as-reference')
object(util, FindBugs, 'thresholds', Thresholds)
