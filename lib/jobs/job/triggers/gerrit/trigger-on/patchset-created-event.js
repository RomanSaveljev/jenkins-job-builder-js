"use strict";

var util = require('../../../util.js');

var PatchsetCreatedEvent = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(PatchsetCreatedEvent.prototype, 'upper');
PatchsetCreatedEvent.prototype.excludeDrafts = util.generatePrimitiveAccessor('obj', 'exclude-drafts');
PatchsetCreatedEvent.prototype.excludeTrivialRebase = util.generatePrimitiveAccessor('obj', 'exclude-trivial-rebase');
PatchsetCreatedEvent.prototype.excludeNoCodeChange = util.generatePrimitiveAccessor('obj', 'exclude-no-code-change');

module.exports = PatchsetCreatedEvent;
