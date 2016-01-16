"use strict";

var util = require('../../../../misc/util.js');

uppableObjectProxy(DeleteStack)
primitiveArray(util, DeleteStack, 'name')
primitive(util, DeleteStack, 'access-key')
primitive(util, DeleteStack, 'secret-key')
primitive(util, DeleteStack, 'prefix')
primitive(util, DeleteStack, 'region')
