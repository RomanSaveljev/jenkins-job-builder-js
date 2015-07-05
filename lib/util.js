/*!
* job - lib/util.js
* Copyright(c) 2015 Roman Saveljev <roman.saveljev@haltian.com>
* MIT Licensed
*/

"use strict";

var ArrayProxy = require('./proxies/array-proxy.js');

/**
 * This method may be attached to a proxy object. Inside a proxy object we
 * always have a dedicated field to hold on to a referenced object. This field
 * name is configured by `outer` parameter. The `inner` parameter tells what
 * field to touch inside the referenced object.
 */
exports.generateNestedAccessor = function(outer, inner) {
  return function(value) {
    if (value === undefined) {
      throw "TODO: getter is not implemented. Have to decide on what is actually returned";
      return this[outer][inner];
    } else {
      this[outer][inner] = value;
      return this;
    }
  };
};

exports.generateArrayProxyAccessor = function(outer, inner) {
  return function(value) {
    if (value === undefined) {
      if (this[outer][inner] === undefined) {
        this[outer][inner] = [];
      }
      return new ArrayProxy(this, this[outer][inner]);
    } else {
      throw 'TODO: setter is not implemented';
    }
  };
};

exports.fancyDeepClone = function(object) {
  return JSON.parse(JSON.stringify(object));
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
exports.generateStringFlagAccessor = function(flag) {
  return function(enabled) {
    if (enabled === undefined) {
      throw "TODO: getter is not implemented";
    } else {
      var idx = this.array.indexOf(flag);
      if (enabled) {
        if (idx == -1) {
          this.array.push(flag);
        }
        // no else - already raised
      } else {
        if (idx != -1) {
          this.array.splice(idx, 1);
        }
        // no else - does not exist
      }
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
exports.generateObjectFlagAccessor = function(flag, constructor) {
  return function(value) {
    if (value === undefined) {
      var obj;
      for (var idx in this.array) {
        var f = this.array[idx];
        if (f !== null && typeof(f) == "object" && f[flag] !== undefined) {
          obj = f;
        }
      }
      if (obj === undefined) {
        obj = {flag: {}};
        this.array.push(obj);
      }
      return new constructor(this, obj[flag]);
    } else {
      throw "TODO: setter is not implemented";
      return this;
    }
  }
}

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
