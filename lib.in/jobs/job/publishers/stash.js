"use strict";

var util = require('../../../misc/util.js');

var Stash = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Stash.prototype, 'upper');
Stash.prototype.url = util.generatePrimitiveAccessor('obj', 'url');
Stash.prototype.username = util.generatePrimitiveAccessor('obj', 'username');
Stash.prototype.password = util.generatePrimitiveAccessor('obj', 'password');
Stash.prototype.ignoreSsl = util.generatePrimitiveAccessor('obj', 'ignore-ssl');
Stash.prototype.commitSha1 = util.generatePrimitiveAccessor('obj', 'commit-sha1');
Stash.prototype.includeBuildNumber = util.generatePrimitiveAccessor('obj', 'include-build-number');

module.exports = Stash;
