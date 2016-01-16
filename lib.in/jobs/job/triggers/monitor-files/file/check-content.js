"use strict";

var util = require('../../../../../misc/util.js');
var MonitorKeys = require('./monitor-keys.js');

uppableArrayProxy(CheckContent)
keyedPrimitiveElement(util, CheckContent, 'simple')
keyedPrimitiveElement(util, CheckContent, 'jar')
keyedPrimitiveElement(util, CheckContent, 'tar')
keyedPrimitiveElement(util, CheckContent, 'zip')
keyedArrayElement(util, CheckContent, 'source-manifest', MonitorKeys)
keyedArrayElement(util, CheckContent, 'jar-manifest', MonitorKeys)
keyedArrayElement(util, CheckContent, 'properties', MonitorKeys)
keyedPrimitiveArrayElement(util, CheckContent, 'xml')
keyedPrimitiveArrayElement(util, CheckContent, 'text')
