"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(Ownership)
primitive(util, Ownership, 'enabled')
primitive(util, Ownership, 'owner')
primitiveArray(util, Ownership, 'co-owners')
