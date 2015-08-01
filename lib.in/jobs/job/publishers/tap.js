"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(Tap)
primitive(util, Tap, 'results')
primitive(util, Tap, 'fail-if-no-results')
primitive(util, Tap, 'failed-tests-mark-build-as-failure')
primitive(util, Tap, 'output-tap-to-console')
primitive(util, Tap, 'enable-subtests')
primitive(util, Tap, 'discard-old-reports')
primitive(util, Tap, 'todo-is-failure')
