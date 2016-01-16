"use strict";

var util = require('../../../../misc/util.js');

uppableObjectProxy(CreateStack)
primitive(util, CreateStack, 'name')
primitive(util, CreateStack, 'description')
primitive(util, CreateStack, 'recipe')
primitiveArray(util, CreateStack, 'parameters')
primitive(util, CreateStack, 'timeout')
primitive(util, CreateStack, 'access-key')
primitive(util, CreateStack, 'secret-key')
primitive(util, CreateStack, 'sleep')
primitive(util, CreateStack, 'region')
