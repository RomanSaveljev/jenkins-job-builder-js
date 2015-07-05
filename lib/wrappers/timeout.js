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

var Timeout = function(upper, timeout) {
  this.upper = upper;
  this.timeout = timeout;
};
util.makeUppable(Timeout.prototype, 'upper');
Timeout.prototype.fail = util.generateNestedAccessor('timeout', 'fail');
Timeout.prototype.abort = util.generateNestedAccessor('timeout', 'abort');
Timeout.prototype.writeDescription = util.generateNestedAccessor('timeout', 'write-description');
Timeout.prototype.timeout = util.generateNestedAccessor('timeout', 'timeout');
Timeout.prototype.timeoutVar = util.generateNestedAccessor('timeout', 'timeout-var');
Timeout.prototype.type = util.generateNestedAccessor('timeout', 'type');
Timeout.prototype.elasticPercentage = util.generateNestedAccessor('timeout', 'elastic-percentage');
Timeout.prototype.elasticNumberBuilds = util.generateNestedAccessor('timeout', 'elastic-number-builds');
Timeout.prototype.elasticDefaultTimeout = util.generateNestedAccessor('timeout', 'elastic-default-timeout');

module.exports = Timeout;
