/*!
* util - lib/util.js
* Copyright(c) 2015 Roman Saveljev <roman.saveljev@haltian.com>
* MIT Licensed
*/

"use strict";

var PrimitiveArrayProxy = require('./proxies/primitive-array-proxy.js');
var ObjectArrayProxy = require('./proxies/object-array-proxy.js');

exports.fancyDeepClone = function(object) {
  return JSON.parse(JSON.stringify(object));
};

/**
 * This method may be attached to a proxy object. Inside a proxy object we
 * always have a dedicated field to hold on to a referenced object. This field
 * name is configured by `outer` parameter. The `inner` parameter tells what
 * field to touch inside the referenced object.
 */
exports.generatePrimitiveAccessor = function(outer, inner) {
  return function(value) {
    if (value === undefined) {
      throw "TODO: getter is not implemented. Have to decide on what is actually returned";
    } else {
      this[outer][inner] = value;
      return this;
    }
  };
};

exports.generateObjectAccessor = function(outer, inner, constructor) {
  return function(value) {
    if (value === undefined) {
      if (this[outer][inner] === undefined) {
        this[outer][inner] = {};
      }
      return new constructor(this, this[outer][inner]);
    } else {
      throw 'TODO: setter is not implemented';
    }
  }
};

exports.generatePrimitiveArrayProxyAccessor = function(outer, inner) {
  return function(value) {
    if (value === undefined) {
      // TODO: should we return empty array every time?
      if (this[outer][inner] === undefined) {
        this[outer][inner] = [];
      }
      return new PrimitiveArrayProxy(this, this[outer][inner]);
    } else {
      throw 'TODO: setter is not implemented';
    }
  };
};

exports.generateObjectArrayProxyAccessor = function(outer, inner, constructor) {
  return function(value) {
    if (value === undefined) {
      // TODO: should we return empty array every time?
      if (this[outer][inner] === undefined) {
        this[outer][inner] = [];
      }
      return new ObjectArrayProxy(this, this[outer][inner], constructor);
    } else {
      throw 'TODO: setter is not implemented';
    }
  };
};

/**
 * Generated function is the accessor to a string element inside
 * the array. The accessor should be attached to proxy object, which
 * manages shared array. Calling a setter may set or clear the flag
 * depending on the 'enabled' argument. Setter invocation always returns
 * proxy object itself. Getter is not currently implemented and will
 * throw.
 *
 * The structure inside the array is as follows:
 *
 * [
 *    "flag"
 * ]
 */
exports.generatePrimitiveElementAccessor = function(flag) {
  return function(enabled) {
    if (enabled === undefined) {
      throw "TODO: getter is not implemented";
    } else {
      this.array.push(flag);
      return this;
    }
  }
}

/**
 * Generated function is the accessor to an object type of flag inside
 * the array. The accessor should be attached to proxy object, which
 * manages shared array. Calling getter part creates the flag object, if
 * it does not exist. Getter returns proxy object for the flag, which is
 * instantiated by constructor.
 *
 * The structure inside the array is as follows:
 *
 *  [
 *    {
 *      "flag": {
 *      }
 *    }
 *  ]
 *
 * The inner-most object is managed by proxy
 */
exports.generateObjectElementAccessor = function(flag, constructor) {
  return function(value) {
    if (value === undefined) {
      var obj = {flag: {}};
      this.array.push(obj);
      return new constructor(this, obj[flag]);
    } else {
      throw "TODO: setter is not implemented";
      return this;
    }
  };
};

/**
 * Adds ability to ascend to the parent object for the prototype
 */
exports.generateUppable = function(fieldName) {
  return function() {
    return this[fieldName];
  };
}

exports.makeUppable = function(prototype, fieldName) {
  prototype.up = exports.generateUppable(fieldName);
  prototype.and = prototype.up;
}

exports.generateToDoMember = function(message) {
  return function() {
    throw 'TODO: ' + message;
  }
}
