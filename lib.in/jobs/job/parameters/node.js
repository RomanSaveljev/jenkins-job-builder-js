"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(Node)
primitive(util, Node, 'name')
primitive(util, Node, 'description')
primitiveArray(util, Node, 'default-nodes')
primitiveArray(util, Node, 'allowed-slaves')
primitive(util, Node, 'ignore-offline-nodes')
primitive(util, Node, 'allowed-multiselect')
