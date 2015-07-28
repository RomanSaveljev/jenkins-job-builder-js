"use strict";

var util = require('../../util.js');
var Note = require('./note.js');

var Notes = function(upper, array) {
  this.upper = upper;
  this.array = array;
};
util.makeUppable(Notes.prototype, 'upper');
Notes.prototype.note = util.generateKeyedObjectElementAccessor('obj', 'note', Note);

module.exports = Notes;
