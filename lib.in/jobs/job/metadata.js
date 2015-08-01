"use strict";

var util = require('../../misc/util.js');
var DateObject = require('./metadata/date.js');
var Primitive = require('./metadata/primitive.js');

uppableArrayProxy(Metadata)
keyedObjectElement(util, Metadata, 'date', DateObject)
keyedObjectElement(util, Metadata, 'number', Primitive)
keyedObjectElement(util, Metadata, 'string', Primitive)
