"use strict";

var util = require('../../../../misc/util.js');

var Note = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Note.prototype, 'upper');
Note.prototype.remote = util.generatePrimitiveAccessor('obj', 'remote');
Note.prototype.message = util.generatePrimitiveAccessor('obj', 'message');
Note.prototype.namespace = util.generatePrimitiveAccessor('obj', 'namespace');
Note.prototype.replaceNote = util.generatePrimitiveAccessor('obj', 'replace-note');

module.exports = Note;
