var should = require('should');
var PrimitiveArrayProxy = require('../lib/misc/primitive-array-proxy.js');

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

exports.describeObjectProxyProperty = function(constructor, property, internalName) {
  if (internalName === undefined) {
    internalName = property;
  }
  return function() {
    it('should have ' + property, function() {
      should(new constructor(null, null)).have.property(property);
    });
    it('should have ' + property + '()', function() {
      var obj = new constructor(null, null);
      should(obj[property]).be.a.Function();
    });
    it('should have ' + property + '() update ' + internalName, function() {
      var internal = {};
      var obj = new constructor(null, internal);
      var setter = obj[property];
      setter.apply(obj, ['value for ' + property]);
      should(internal[internalName]).be.equal('value for ' + property);
    });
  };
};

exports.describePrimitiveArrayProxyProperty = function(constructor, property, internalName) {
  if (internalName === undefined) {
    internalName = property;
  }
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
    it('returned PrimitiveArrayProxy manipulates ' + internalName, function() {
      var internal = {};
      var obj = new constructor(null, internal);
      var getter = obj[property];
      getter.apply(obj).add('value for ' + property);
      should(internal[internalName]).containEql('value for ' + property);
    });
  }
};
