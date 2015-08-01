"use strict";

var util = require('../../../misc/util.js');
var Thresholds = require('./valgrind/thresholds.js');

uppableObjectProxy(Valgrind)
primitive(util, Valgrind, 'pattern')
object(util, Valgrind, 'thresholds', Thresholds)
primitive(util, Valgrind, 'fail-no-reports')
primitive(util, Valgrind, 'fail-invalid-reports')
primitive(util, Valgrind, 'publish-if-aborted')
primitive(util, Valgrind, 'publish-if-failed')
