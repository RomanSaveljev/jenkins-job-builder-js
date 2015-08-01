"use strict";

var util = require('../../../../misc/util.js');

uppableObjectProxy(SparseCheckout)
SparseCheckout.prototype.paths = util.generatePrimtiveArrayAccessor('obj', 'paths');
