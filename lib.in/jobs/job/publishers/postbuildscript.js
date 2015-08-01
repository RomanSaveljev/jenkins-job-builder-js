"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(PostBuildScript)
primitiveArray(util, PostBuildScript, 'generic-script')
primitiveArray(util, PostBuildScript, 'groovy-script')
primitiveArray(util, PostBuildScript, 'groovy')
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
primitive(util, PostBuildScript, 'script-only-if-succeeded')
primitive(util, PostBuildScript, 'script-only-if-failed')
primitive(util, PostBuildScript, 'execute-on')
