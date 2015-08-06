"use strict";

var util = require('../../misc/util.js');
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
var Text = require('./parameters/value.js');
var ValidatingString = require('./parameters/validating-string.js');

uppableArrayProxy(Parameters)
keyedObjectElement(util, Parameters, 'bool', Bool)
keyedObjectElement(util, Parameters, 'choice', Choice)
keyedObjectElement(util, Parameters, 'dynamic-choice', DynamicChoice)
keyedObjectElement(util, Parameters, 'dynamic-choice-scriptler', DynamicChoiceScriptler)
keyedObjectElement(util, Parameters, 'dynamic-string', DynamicString)
keyedObjectElement(util, Parameters, 'dynamic-string-scriptler', DynamicStringScriptler)
keyedObjectElement(util, Parameters, 'extended-choice', ExtendedChoice)
keyedObjectElement(util, Parameters, 'file', File)
keyedObjectElement(util, Parameters, 'label', Label)
keyedObjectElement(util, Parameters, 'matrix-combinations', MatrixCombinations)
keyedObjectElement(util, Parameters, 'node', Node)
keyedObjectElement(util, Parameters, 'password', Password)
keyedObjectElement(util, Parameters, 'run', Run)
keyedObjectElement(util, Parameters, 'string', String)
keyedObjectElement(util, Parameters, 'svn-tags', SvnTags)
keyedObjectElement(util, Parameters, 'text', Text)
keyedObjectElement(util, Parameters, 'validating-string', ValidatingString)
