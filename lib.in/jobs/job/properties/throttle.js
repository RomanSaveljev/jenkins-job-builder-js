"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(Throttle)
primitive(util, Throttle, 'max-per-node')
primitive(util, Throttle, 'max-total')
primitive(util, Throttle, 'enabled')
primitive(util, Throttle, 'option')
primitiveArray(util, Throttle, 'categories')
