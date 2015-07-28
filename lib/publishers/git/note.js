"use strict";

var util = require('../../util.js');

var Note = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Note.prototype, 'upper');
Note.prototype.remote = util.generatePrimtiveAccessor('obj', 'remote');
Note.prototype.message = util.generatePrimtiveAccessor('obj', 'message');
Note.prototype.namespace = util.generatePrimtiveAccessor('obj', 'namespace');
Note.prototype.replaceNote = util.generatePrimtiveAccessor('obj', 'replace-note');

module.exports = Note;
