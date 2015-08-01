"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(Robot)
primitive(util, Robot, 'output-path')
primitive(util, Robot, 'log-file-link')
primitive(util, Robot, 'report-html')
primitive(util, Robot, 'log-html')
primitive(util, Robot, 'output-xml')
primitive(util, Robot, 'pass-threshold')
primitive(util, Robot, 'unstable-threshold')
primitive(util, Robot, 'only-critical')
primitiveArray(util, Robot, 'other-files')
primitive(util, Robot, 'archive-output-xml')
