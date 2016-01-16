"use strict";

var util = require('../../../../../misc/util.js');
var Module = require('./module.js');

uppableObjectProxy(Location)
primitive(util, Location, 'type')
primitive(util, Location, 'name')
primitive(util, Location, 'use-head')
objectArray(util, Location, 'modules', Module)
