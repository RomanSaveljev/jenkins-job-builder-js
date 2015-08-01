"use strict";

var util = require('../../../../misc/util.js');
var CheckContent = require('./url/check-content.js');

var Url = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Url.prototype, 'upper');
Url.prototype.url = util.generatePrimitiveAccessor('obj', 'url');
Url.prototype.proxy = util.generatePrimitiveAccessor('obj', 'proxy');
Url.prototype.timeout = util.generatePrimitiveAccessor('obj', 'timeout');
Url.prototype.username = util.generatePrimitiveAccessor('obj', 'username');
Url.prototype.password = util.generatePrimitiveAccessor('obj', 'password');
Url.prototype.checkStatus = util.generatePrimitiveAccessor('obj', 'check-status');
Url.prototype.checkEtag = util.generatePrimitiveAccessor('obj', 'check-etag');
Url.prototype.checkDate = util.generatePrimitiveAccessor('obj', 'check-date');
Url.prototype.checkContent = util.generateObjectArrayAccessor('obj', 'check-content', CheckContent);

module.exports = Url;
