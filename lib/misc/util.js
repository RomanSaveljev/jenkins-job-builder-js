"use strict";

var PrimitiveArrayProxy = require('./primitive-array-proxy.js');
var ObjectArrayProxy = require('./object-array-proxy.js');

exports.fancyDeepClone = function(object) {
  return JSON.parse(JSON.stringify(object));
};

/**
 * Attach to proxy object. Represents the "value" as in:
 *
 *  outer =
 *  {
 *    inner: "value"
 *  };
 *
 * Always assigns a new primitive value.
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

/**
 * Attach to proxy object. Represents the {} as in:
 *
 *  outer =
 *  {
 *    inner: {}
 *  };
 *
 * Returns a proxy object created by `constructor`.
 */
exports.generateObjectAccessor = function(outer, inner, constructor) {
  return function(value) {
    if (value === undefined) {
      // every time a fresh object is returned to enforce declarative coding
      // style
      this[outer][inner] = {};
      return new constructor(this, this[outer][inner]);
    } else {
      throw 'TODO: setter is not implemented';
    }
  }
};

/**
 * Attach to proxy object. Represents the [] as in:
 *
 *    outer =
 *    {
 *      inner: []
 *    };
 *
 * Returns array proxy, which can store new primitive values.
 */
exports.generatePrimitiveArrayAccessor = function(outer, inner) {
  return function(value) {
    if (value === undefined) {
      // always create a fresh array to enforce declarative code style
      this[outer][inner] = [];
      return new PrimitiveArrayProxy(this, this[outer][inner]);
    } else {
      throw 'TODO: setter is not implemented';
    }
  };
};

/**
 * Attach to a proxy object. Represents the [] as in:
 *    outer =
 *    {
 *      inner: []
 *    };
 *
 * Returns array proxy, which can store new objects. All objects are of the
 * same type and their proxies are instantiated with `constructor`.
 */
exports.generateObjectArrayAccessor = function(outer, inner, constructor) {
  return function(value) {
    if (value === undefined) {
      // always create a fresh array to enforce declarative code style
      this[outer][inner] = [];
      return new ObjectArrayProxy(this, this[outer][inner], constructor);
    } else {
      throw 'TODO: setter is not implemented';
    }
  };
};

exports.generateCustomArrayAccessor = function(outer, inner, arrayConstructor) {
  return function(value) {
    if (value === undefined) {
      // always create a fresh array to enforce declarative code style
      this[outer][inner] = [];
      return new arrayConstructor(this, this[outer][inner]);
    } else {
      throw 'TODO: setter is not implemented';
    }
  };
};

/**
 * Attach to a proxy array to create a keyed object. Example:
 *
 *  array =
 *  [
 *    {"key": {}}
 *  ];
 *
 * The returned proxy can add more properties to the inner `{}`. It is instantiated
 * with `constructor`. Every invocation adds a new element
 *
 * Keyed object are defined in YAML with or without inner object properties:
 *
 *  - ansicolor
 *  - ansicolor:
 *      colormap: vga
 */
exports.generateKeyedObjectElementAccessor = function(array, key, constructor) {
  return function(value) {
    if (value === undefined) {
      var obj = {};
      obj[key] = {};
      this[array].push(obj);
      return new constructor(this, obj[key]);
    } else {
      throw 'TODO: setter is not implemented';
    }
  };
};

/**
 * Represents the following YAML:
 *
 * outer:
 *  - inner: value
 */
 exports.generateKeyedPrimitiveElementAccessor = function(array, key) {
   return function(value) {
     if (value === undefined) {
       throw 'TODO: getter is not implemented';
     } else {
       var obj = {};
       obj[key] = value;
       this[array].push(obj);
       return this;
     }
   };
 };

/**
 * Attach this to proxy as a method to create a keyed object with user-defined
 * property name. It does not follow a typical accessor contract, so it should
 * be named in a distinguished way
 */
exports.generateCustomKeyObjectElementAccessor = function(array, constructor) {
  return function(key) {
    var obj = {};
    obj[key] = {};
    this[array].push(obj);
    return new constructor(this, obj[key]);
  };
};

/**
 * Attach this to proxy to translate the following structure:
 *
 * outer:
 *  - key:
 *    - shell: |
 *      #!/bin/bash
 *      echo "Doing something cool"
 *    - shell: |
 *      #!/bin/bash
 *      echo "The end is near"
 *
 */
exports.generateKeyedArrayElementAccessor = function(array, key, constructor) {
  return function(value) {
    if (value === undefined) {
      var obj = {};
      obj[key] = [];
      this[array].push(obj);
      return new ObjectArrayProxy(this, obj[key], constructor);
    } else {
      throw 'TODO: setter is not implemented';
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
};

exports.makeUppable = function(prototype, fieldName) {
  prototype.up = exports.generateUppable(fieldName);
  prototype.and = prototype.up;
};

exports.generateToDoMember = function(message) {
  return function() {
    throw 'TODO: ' + message;
  }
};

exports.camelize = function(str) {
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
};
