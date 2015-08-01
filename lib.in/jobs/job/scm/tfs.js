"use strict";

var util = require('../../../misc/util.js');
var WebAccess = require('./tfs/web-access.js');

var Tfs = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Tfs.prototype, 'upper');
Tfs.prototype.serverUrl = util.generatePrimitiveAccessor('obj', 'server-url');
Tfs.prototype.projectPath = util.generatePrimitiveAccessor('obj', 'project-path');
Tfs.prototype.login = util.generatePrimitiveAccessor('obj', 'login');
Tfs.prototype.useUpdate = util.generatePrimitiveAccessor('obj', 'use-update');
Tfs.prototype.localPath = util.generatePrimitiveAccessor('obj', 'local-path');
Tfs.prototype.workspace = util.generatePrimitiveAccessor('obj', 'workspace');
Tfs.prototype.webAccess = util.generateObjectArrayAccessor('obj', 'web-access', WebAccess);

module.exports = Tfs;
