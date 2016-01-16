"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(BuildBlocker)
primitive(util, BuildBlocker, 'use-build-blocker')
primitiveArray(util, BuildBlocker, 'blocking-jobs')
primitive(util, BuildBlocker, 'queue-scanning')
