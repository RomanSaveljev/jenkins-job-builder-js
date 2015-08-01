"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(Choice)
primitive(util, Choice, 'name')
primitiveArray(util, Choice, 'choices')
primitive(util, Choice, 'description')
