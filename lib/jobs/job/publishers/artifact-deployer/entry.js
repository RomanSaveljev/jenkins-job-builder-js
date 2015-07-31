"use strict";

var util = require('../util.js');

var Entry = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Entry.prototype, 'upper');
Entry.prototype.files = util.generatePrimitiveAccessor('obj', 'files');
Entry.prototype.basedir = util.generatePrimitiveAccessor('obj', 'basedir');
Entry.prototype.excludes = util.generatePrimitiveAccessor('obj', 'excludes');
Entry.prototype.remote = util.generatePrimitiveAccessor('obj', 'remote');
Entry.prototype.flatten = util.generatePrimitiveAccessor('obj', 'flatten');
Entry.prototype.deleteRemote = util.generatePrimitiveAccessor('obj', 'delete-remote');
Entry.prototype.deleteRemoteArtifacts = util.generatePrimitiveAccessor('obj', 'delete-remote-artifacts');
Entry.prototype.failNoFiles = util.generatePrimitiveAccessor('obj', 'fail-no-files');
Entry.prototype.groovyScript = util.generatePrimitiveAccessor('obj', 'groovy-script');

module.exports = Entry;
