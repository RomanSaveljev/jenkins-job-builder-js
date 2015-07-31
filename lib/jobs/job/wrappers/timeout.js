/*!
 * timeout - lib/wrappers/timeout.js
 * Copyright(c) 2015 Roman Saveljev <roman.saveljev@haltian.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */
var util = require('../util.js');

var Timeout = function(upper, timeoutRef) {
  this.upper = upper;
  this.timeoutRef = timeoutRef;
};
util.makeUppable(Timeout.prototype, 'upper');
Timeout.prototype.fail = util.generatePrimitiveAccessor('timeoutRef', 'fail');
Timeout.prototype.abort = util.generatePrimitiveAccessor('timeoutRef', 'abort');
Timeout.prototype.writeDescription = util.generatePrimitiveAccessor('timeoutRef', 'write-description');
Timeout.prototype.timeout = util.generatePrimitiveAccessor('timeoutRef', 'timeout');
Timeout.prototype.timeoutVar = util.generatePrimitiveAccessor('timeoutRef', 'timeout-var');
Timeout.prototype.type = util.generatePrimitiveAccessor('timeoutRef', 'type');
Timeout.prototype.elasticPercentage = util.generatePrimitiveAccessor('timeoutRef', 'elastic-percentage');
Timeout.prototype.elasticNumberBuilds = util.generatePrimitiveAccessor('timeoutRef', 'elastic-number-builds');
Timeout.prototype.elasticDefaultTimeout = util.generatePrimitiveAccessor('timeoutRef', 'elastic-default-timeout');

module.exports = Timeout;
