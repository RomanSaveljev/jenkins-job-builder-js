"use strict";

var util = require('../../../../../misc/util.js');

uppableObjectProxy(CheckContent)
primitive(util, CheckContent, 'simple')
primitiveArray(util, CheckContent, 'json')
primitiveArray(util, CheckContent, 'text')
primitiveArray(util, CheckContent, 'xml')
