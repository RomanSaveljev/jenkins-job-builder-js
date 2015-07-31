"use strict";

var util = require('../util.js');

var Hg = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Hg.prototype, 'upper');
Hg.prototype.url = util.generatePrimitiveAccessor('obj', 'url');
Hg.prototype.credentialsId = util.generatePrimitiveAccessor('obj', 'credentials-id');
Hg.prototype.revisionType = util.generatePrimitiveAccessor('obj', 'revision-type');
Hg.prototype.revision = util.generatePrimitiveAccessor('obj', 'revision');
Hg.prototype.modules = util.generatePrimitiveArrayAccessor('obj', 'modules');
Hg.prototype.clean = util.generatePrimitiveAccessor('obj', 'clean');
Hg.prototype.subdir = util.generatePrimitiveAccessor('obj', 'subdir');
Hg.prototype.disableChangelog = util.generatePrimitiveAccessor('obj', 'disable-changelog');
Hg.prototype.browser = util.generatePrimitiveAccessor('obj', 'browser');
Hg.prototype.browserUrl = util.generatePrimitiveAccessor('obj', 'browser-url');

module.exports = Hg;
