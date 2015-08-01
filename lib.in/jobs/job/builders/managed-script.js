"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(ManagedScript)
primitive(util, ManagedScript, 'script-id')
primitive(util, ManagedScript, 'type')
primitiveArray(util, ManagedScript, 'args')
