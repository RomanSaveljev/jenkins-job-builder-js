"use strict";

var util = require('../../../misc/util.js');

var PostBuildScript = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(PostBuildScript.prototype, 'upper');
PostBuildScript.prototype.genericScript = util.generatePrimitiveArrayAccessor('obj', 'generic-script');
PostBuildScript.prototype.groovyScript = util.generatePrimitiveArrayAccessor('obj', 'groovy-script');
PostBuildScript.prototype.groovy = util.generatePrimitiveArrayAccessor('obj', 'groovy');
PostBuildScript.prototype.builders = function(value) {
    if (value === undefined) {
      // this is to avoid circular dependencies
      var Builders = require('../builders.js');
      // always create a fresh array to enforce declarative code style
      this[outer][inner] = [];
      return new Builders(this, this[outer][inner]);
    } else {
      throw 'TODO: setter is not implemented';
    }
  };
};
PostBuildScript.prototype.scriptOnlyIfSucceeded = util.generatePrimitiveAccessor('obj', 'script-only-if-succeeded');
PostBuildScript.prototype.scriptOnlyIfFailed = util.generatePrimitiveAccessor('obj', 'script-only-if-failed');
PostBuildScript.prototype.executeOn = util.generatePrimitiveAccessor('obj', 'execute-on');

module.exports = PostBuildScript;
