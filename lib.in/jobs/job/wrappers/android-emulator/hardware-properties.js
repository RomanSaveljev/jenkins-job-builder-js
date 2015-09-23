"use strict";

var util = require('../../../../misc/util.js');

uppableObjectProxy(HardwareProperties)
HardwareProperties.prototype.set = util.generateNamedPrimitiveAccessor('obj')
