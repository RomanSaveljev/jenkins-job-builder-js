var should = require('should');
var PrimitiveArrayProxy = require('../lib/misc/primitive-array-proxy.js');
var ObjectArrayProxy = require('../lib/misc/object-array-proxy.js');

function camelize(str) {
  return str.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
};
exports.camelize = camelize;

exports.describeProxyConstructor = function(constructor) {
  return function() {
    it('should export defined', function() {
      should(constructor).be.Function();
    });
    it('should export constructor', function() {
      should(new constructor(null, {})).be.Object;
    });
  };
};

exports.describeProxyUppableAndable = function(constructor) {
  return function() {
    it('should have up()', function() {
      should(new constructor(null, null)).have.property('up');
    });
    it('should be uppable', function() {
      var upper = {a: 1};
      should(new constructor(upper, {}).up()).be.exactly(upper);
    });
    it('should have and()', function() {
      should(new constructor(null, null)).have.property('and');
    });
    it('should be andable', function() {
      var upper = {a: 1};
      should(new constructor(upper, {}).and()).be.exactly(upper);
    });
  };
};

exports.describeProxyPrimitiveProperty = function(constructor, key) {
  var property = camelize(key);
  return function() {
    it('should have ' + property, function() {
      should(new constructor(null, null)).have.property(property);
    });
    it('should have ' + property + '()', function() {
      var obj = new constructor(null, null);
      should(obj[property]).be.a.Function();
    });
    it('should have ' + property + '() update ' + key, function() {
      var internal = {};
      var obj = new constructor(null, internal);
      var setter = obj[property];
      setter.apply(obj, ['value for ' + property]);
      should(internal[key]).be.equal('value for ' + property);
    });
  };
};

exports.describeProxyObjectProperty = function(constructor, key, type) {
  var property = camelize(key);
  return function() {
    it('should have ' + property, function() {
      should(new constructor(null, null)).have.property(property);
    });
    it('should have ' + property + '()', function() {
      var obj = new constructor(null, null);
      should(obj[property]).be.a.Function();
    });
    it(property + '() getter should assign ' + key, function() {
      var internal = {};
      var obj = new constructor(null, internal);
      var getter = obj[property];
      getter.apply(obj, []);
      should(internal).have.property(key);
    });
    it(property + '() getter should reset ' + key, function() {
      var internal = {};
      internal[key] = 5;
      var obj = new constructor(null, internal);
      var getter = obj[property];
      getter.apply(obj, []);
      should(internal[key]).be.Object();
    });
    it(property + '() getter should return specific type object', function() {
      var internal = {};
      var obj = new constructor(null, internal);
      var getter = obj[property];
      var ret = getter.apply(obj, []);
      should(ret).be.instanceof(type);
    });
  };
};

exports.describeProxyKeyedObjectProperty = function(constructor, key, type) {
  var property = camelize(key);
  return function() {
    it('should have ' + property, function() {
      should(new constructor(null, null)).have.property(property);
    });
    it('should have ' + property + '()', function() {
      var obj = new constructor(null, null);
      should(obj[property]).be.a.Function();
    });
    it(property + '() getter should push array element', function() {
      var internal = [];
      var obj = new constructor(null, internal);
      var getter = obj[property];
      getter.apply(obj);
      should(internal).have.length(1);
    });
    it(property + '() repeated getter should push array element', function() {
      var internal = [];
      var obj = new constructor(null, internal);
      var getter = obj[property];
      getter.apply(obj);
      getter.apply(obj);
      should(internal).have.length(2);
    });
    it(property + '() getter should push object', function() {
      var internal = [];
      var obj = new constructor(null, internal);
      var getter = obj[property];
      getter.apply(obj);
      should(internal[0]).be.an.Object();
    });
    it('object pushed by ' + property + '() getter should have ' + key + ' property', function() {
      var internal = [];
      var obj = new constructor(null, internal);
      var getter = obj[property];
      getter.apply(obj);
      should(internal[0]).have.property(key);
    });
    it(key + ' property should reference object', function() {
      var internal = [];
      var obj = new constructor(null, internal);
      var getter = obj[property];
      getter.apply(obj);
      should(internal[0][key]).be.an.Object();
    });
    it(property + '() getter should return specific type object', function() {
      var internal = [];
      var obj = new constructor(null, internal);
      var getter = obj[property];
      var ret = getter.apply(obj, []);
      should(ret).be.instanceof(type);
    });
  };
};

exports.describeProxyKeyedPrimitiveProperty = function(constructor, key) {
  var property = camelize(key);
  return function() {
    it('should have ' + property, function() {
      should(new constructor(null, null)).have.property(property);
    });
    it('should have ' + property + '()', function() {
      var obj = new constructor(null, null);
      should(obj[property]).be.a.Function();
    });
    it(property + '() setter should push array element', function() {
      var internal = [];
      var obj = new constructor(null, internal);
      var setter = obj[property];
      setter.apply(obj, ['value']);
      should(internal).have.length(1);
    });
    it(property + '() repeated setter should push array element', function() {
      var internal = [];
      var obj = new constructor(null, internal);
      var setter = obj[property];
      setter.apply(obj, [1]);
      setter.apply(obj, [2]);
      should(internal).have.length(2);
    });
    it(property + '() setter should push object', function() {
      var internal = [];
      var obj = new constructor(null, internal);
      var setter = obj[property];
      setter.apply(obj, [null]);
      should(internal[0]).be.an.Object();
    });
    it('object pushed by ' + property + '() setter should have ' + key + ' property', function() {
      var internal = [];
      var obj = new constructor(null, internal);
      var setter = obj[property];
      setter.apply(obj, [7]);
      should(internal[0]).have.property(key);
    });
    it(key + ' property should hold primitive value', function() {
      var internal = [];
      var obj = new constructor(null, internal);
      var setter = obj[property];
      setter.apply(obj, ['value for ' + property]);
      should(internal[0][key]).be.equal('value for ' + property);
    });
  };
};

exports.describeProxyPrimitiveArrayProperty = function(constructor, key) {
  var property = camelize(key);
  return function() {
    it('should have ' + property, function() {
      should(new constructor(null, null)).have.property(property);
    });
    it('should have ' + property + '()', function() {
      var obj = new constructor(null, null);
      should(obj[property]).be.a.Function();
    });
    it(property + '() returns PrimitiveArrayProxy', function() {
      var internal = {};
      var obj = new constructor(null, internal);
      var getter = obj[property];
      should(getter.apply(obj)).be.instanceof(PrimitiveArrayProxy);
    });
    it('returned PrimitiveArrayProxy manipulates ' + key, function() {
      var internal = {};
      var obj = new constructor(null, internal);
      var getter = obj[property];
      getter.apply(obj).add('value for ' + property);
      should(internal[key]).containEql('value for ' + property);
    });
  }
};

exports.describeProxyObjectArrayProperty = function(constructor, key, type) {
  var property = camelize(key);
  return function() {
    it('should have ' + property, function() {
      should(new constructor(null, null)).have.property(property);
    });
    it('should have ' + property + '()', function() {
      var obj = new constructor(null, null);
      should(obj[property]).be.a.Function();
    });
    it(property + '() returns ObjectArrayProxy', function() {
      var internal = {};
      var obj = new constructor(null, internal);
      var getter = obj[property];
      should(getter.apply(obj)).be.instanceof(ObjectArrayProxy);
    });
    it('returned ObjectArrayProxy grows ' + key + ' array', function() {
      var internal = {};
      var obj = new constructor(null, internal);
      var getter = obj[property];
      getter.apply(obj).create();
      should(internal[key]).have.length(1);
    });
    it(key + ' array has objects', function() {
      var internal = {};
      var obj = new constructor(null, internal);
      var getter = obj[property];
      getter.apply(obj).create();
      should(internal[key][0]).be.Object();
    });
    it(property + ' ObjectArrayProxy returns proxies of specific type', function() {
      var internal = {};
      var obj = new constructor(null, internal);
      var getter = obj[property];
      var arrayProxy = getter.apply(obj);
      should(arrayProxy.create()).be.instanceof(type);
    });
  }
};

exports.describeProxyCustomArrayProperty = function(constructor, key, type) {
  var property = camelize(key);
  return function() {
    it('should have ' + property, function() {
      should(new constructor(null, null)).have.property(property);
    });
    it('should have ' + property + '()', function() {
      var obj = new constructor(null, null);
      should(obj[property]).be.a.Function();
    });
    it(property + '() getter should assign ' + key, function() {
      var internal = {};
      var obj = new constructor(null, internal);
      var getter = obj[property];
      getter.apply(obj, []);
      should(internal).have.property(key);
    });
    it(property + '() getter should reset ' + key, function() {
      var internal = {};
      internal[key] = 5;
      var obj = new constructor(null, internal);
      var getter = obj[property];
      getter.apply(obj, []);
      should(internal[key]).be.Array();
    });
    it(property + '() returns specific type of object', function() {
      var internal = {};
      var obj = new constructor(null, internal);
      var getter = obj[property];
      should(getter.apply(obj)).be.instanceof(type);
    });
  }
};
