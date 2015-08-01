"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(TextFinder)
primitive(util, TextFinder, 'regexp')
primitive(util, TextFinder, 'fileset')
primitive(util, TextFinder, 'also-check-console-output')
primitive(util, TextFinder, 'succeed-if-found')
primitive(util, TextFinder, 'unstable-if-found')
