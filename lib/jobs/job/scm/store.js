"use strict";

var util = require('../util.js');
var Pundle = require('./store/pundle.js');

var Store = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Store.prototype, 'upper');
Store.prototype.script = util.generatePrimitiveAccessor('obj', 'script');
Store.prototype.repository = util.generatePrimitiveAccessor('obj', 'repository');
Store.prototype.versionRegex = util.generatePrimitiveAccessor('obj', 'version-regex');
Store.prototype.minimumBlessing = util.generatePrimitiveAccessor('obj', 'minimum-blessing');
Store.prototype.parcelBuilderFile = util.generatePrimitiveArrayAccessor('obj', 'parcel-builder-file');
Store.prototype.pundles = util.generateObjectArrayAccessor('obj', 'pundles', Pundle);

module.exports = Store;
