"use strict";

var util = require('../../../misc/util.js');
var Parameter = require('./dynamic-choice-scriptler/parameter.js');

uppableObjectProxy(DynamicScriptler)
primitive(util, DynamicScriptler, 'name')
primitive(util, DynamicScriptler, 'description')
primitive(util, DynamicScriptler, 'script-id')
objectArray(util, DynamicScriptler, 'parameters', Parameter)
primitive(util, DynamicScriptler, 'remote')
primitive(util, DynamicScriptler, 'read-only')
