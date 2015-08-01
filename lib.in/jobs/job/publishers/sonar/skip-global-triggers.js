"use strict";

var util = require('../../../../misc/util.js');

uppableObjectProxy(SkipGlobalTriggers)
primitive(util, SkipGlobalTriggers, 'skip-when-scm-change')
primitive(util, SkipGlobalTriggers, 'skip-when-upstream-build')
primitive(util, SkipGlobalTriggers, 'skip-when-envvar-defined')
