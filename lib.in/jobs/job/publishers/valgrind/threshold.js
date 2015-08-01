"use strict";

var util = require('../../../../misc/util.js');

uppableObjectProxy(Threshold)
primitive(util, Threshold, 'invalid-read-write')
primitive(util, Threshold, 'definitely-lost')
primitive(util, Threshold, 'total')
