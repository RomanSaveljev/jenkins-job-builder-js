"use strict";

var util = require('../../../../misc/util.js');
var Instance = require('./instance.js');

uppableObjectProxy(Instances)
Instances.prototype.build = util.generateCustomKeyObjectElementAccessor('obj', Instance);
