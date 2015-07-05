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
Timeout.prototype.fail = util.generateNestedAccessor('timeoutRef', 'fail');
Timeout.prototype.abort = util.generateNestedAccessor('timeoutRef', 'abort');
Timeout.prototype.writeDescription = util.generateNestedAccessor('timeoutRef', 'write-description');
Timeout.prototype.timeout = util.generateNestedAccessor('timeoutRef', 'timeout');
Timeout.prototype.timeoutVar = util.generateNestedAccessor('timeoutRef', 'timeout-var');
Timeout.prototype.type = util.generateNestedAccessor('timeoutRef', 'type');
Timeout.prototype.elasticPercentage = util.generateNestedAccessor('timeoutRef', 'elastic-percentage');
Timeout.prototype.elasticNumberBuilds = util.generateNestedAccessor('timeoutRef', 'elastic-number-builds');
Timeout.prototype.elasticDefaultTimeout = util.generateNestedAccessor('timeoutRef', 'elastic-default-timeout');

module.exports = Timeout;
