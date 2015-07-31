/*!
 * parameters - lib/parameters.js
 * Copyright(c) 2015 Roman Saveljev <roman.saveljev@haltian.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */
var util = require('./util.js');
var String = require('./parameters/value.js');
var Bool = require('./parameters/value.js');
var Choice = require('./parameters/choice.js');
var DynamicChoice = require('./parameters/dynamic.js');
var DynamicChoiceScriptler = require('./parameters/dynamic-scriptler.js');
var DynamicString = require('./parameters/dynamic.js');
var DynamicStringScriptler = require('./parameters/dynamic-scriptler.js');
var ExtendedChoice = require('./parameters/extended-choice.js');
var File = require('./parameters/file.js');
var Label = require('./parameters/value.js');
var MatrixCombinations = require('./parameters/matrix-combinations.js');
var Node = require('./parameters/node.js');
var Password = require('./parameters/value.js');
var Run = require('./parameters/run.js');
var SvnTags = require('./parameters/svn-tags.js');
var Text = require('./parameters/text.js');
var ValidatingString = require('./parameters/validating-string.js');

var Parameters = function(upper, array) {
  this.upper = upper;
  this.array = array;
  return this;
};

util.makeUppable(Parameters.prototype, 'upper');
Parameters.prototype.bool = util.generateKeyedObjectElementAccessor('array', 'bool', Bool);
Parameters.prototype.choice = util.generateKeyedObjectElementAccessor('array', 'choice', Choice);
Parameters.prototype.dynamicChoice = util.generateKeyedObjectElementAccessor('array', 'dynamic-choice', DynamicChoice);
Parameters.prototype.dynamicChoiceScriptler = util.generateKeyedObjectElementAccessor('array', 'dynamic-choice-scriptler', DynamicChoiceScriptler);
Parameters.prototype.dynamicString = util.generateKeyedObjectElementAccessor('array', 'dynamic-string', DynamicString);
Parameters.prototype.dynamicStringScriptler = util.generateKeyedObjectElementAccessor('array', 'dynamic-string-scriptler', DynamicStringScriptler);
Parameters.prototype.extendedChoice = util.generateKeyedObjectElementAccessor('array', 'extended-choice', ExtendedChoice);
Parameters.prototype.file = util.generateKeyedObjectElementAccessor('array', 'file', File);
Parameters.prototype.label = util.generateKeyedObjectElementAccessor('array', 'label', Label);
Parameters.prototype.matrixCombinations = util.generateKeyedObjectElementAccessor('array', 'matrix-combinations', MatrixCombinations);
Parameters.prototype.node = util.generateKeyedObjectElementAccessor('array', 'node', Node);
Parameters.prototype.password = util.generateKeyedObjectElementAccessor('array', 'password', Password);
Parameters.prototype.run = util.generateKeyedObjectElementAccessor('array', 'run', Run);
Parameters.prototype.string = util.generateKeyedObjectElementAccessor('array', 'string', String);
Parameters.prototype.svnTags = util.generateKeyedObjectElementAccessor('array', 'svn-tags', SvnTags);
Parameters.prototype.text = util.generateKeyedObjectElementAccessor('array', 'text', Text);
Parameters.prototype.validatingString = util.generateKeyedObjectElementAccessor('array', 'validating-string', ValidatingString);

module.exports = Parameters;
