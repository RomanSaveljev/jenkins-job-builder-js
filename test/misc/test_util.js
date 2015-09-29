var should = require('should');
var util = require('../../lib/misc/util.js');
var PrimitiveArrayProxy = require('../../lib/misc/primitive-array-proxy.js');
var ObjectArrayProxy = require('../../lib/misc/object-array-proxy.js');

describe('Primitive accessor', function() {
  var obj = {obj: {inner: 5}};
  it('sets inner field value', function() {
    util.primitiveAccessor.apply(obj, ['inner', 'text']);
    should(obj.obj.inner).be.exactly('text');
  });
  it('setter returns the object', function() {
    should(util.primitiveAccessor.apply(obj, ['inner', null])).be.exactly(obj);
  });
});

describe('Object accessor', function() {
  describe('', function() {
    var constructor = function(upper, shared) {
      this.upper = upper;
      this.shared = shared;
      return this;
    };
    it('sets inner field value to empty object', function() {
      var obj = {obj: {}};
      util.objectAccessor.apply(obj, ['inner', constructor]);
      should(obj.obj.inner).be.Object();
      should(obj.obj.inner).be.empty();
    });
    it('drops existing inner object', function() {
      var obj = {obj: {inner: 3}};
      util.objectAccessor.apply(obj, ['inner', constructor]);
      should(obj.obj.inner).be.Object();
      should(obj.obj.inner).be.empty();
    });
    it('passes correct upper to constructor', function() {
      var obj = {obj: {inner: 3}};
      var proxy = util.objectAccessor.apply(obj, ['inner', constructor]);
      should(proxy.upper).be.exactly(obj);
    });
  });
  describe('', function() {
    var constructor = function(upper, shared) {
      this.upper = upper;
      this.shared = shared;
      should(shared).be.empty();
      this.shared.property = true;
      return this;
    };
    it('passes correct shared to constructor', function() {
      var obj = {obj: {inner: true}};
      var proxy = util.objectAccessor.apply(obj, ['inner', constructor]);
      should(proxy.shared).have.property('property');
    });
  });
});

describe('Primitive array accessor', function() {
  var accessor = util.primitiveArrayAccessor;
  it('returns PrimitiveArrayProxy object', function() {
    var obj = {obj: {inner: []}};
    should(accessor.apply(obj, ['inner'])).be.instanceof(PrimitiveArrayProxy);
  });
  it('creates array as needed', function() {
    var obj = {obj: {}};
    accessor.apply(obj, ['inner']);
    should(obj.obj.inner).be.Array();
  });
  it('always drops existing array', function() {
    var obj = {obj: {inner: ['first']}};
    accessor.apply(obj, ['inner']);
    should(obj.obj.inner).be.empty();
  });
});

describe('Object array accessor', function() {
  var constructor = function() {
    return this;
  };
  var accessor = util.objectArrayAccessor;
  it('returns ObjectArrayProxy object', function() {
    var obj = {obj: {inner: []}};
    should(accessor.apply(obj, ['inner'])).be.instanceof(ObjectArrayProxy);
  });
  it('creates array as needed', function() {
    var obj = {obj: {}};
    accessor.apply(obj, ['inner']);
    should(obj.obj.inner).be.Array();
  });
  it('always drops existing array', function() {
    var obj = {obj: {inner: ['first']}};
    accessor.apply(obj, ['inner']);
    should(obj.obj.inner).be.empty();
  });
});

describe('Keyed object element accessor', function() {
  var flagger = util.keyedObjectElementAccessor;
  describe('getter', function() {
    var constructor = function() {
      return this;
    }
    it('adds member', function() {
      var obj = {array: []};
      flagger.apply(obj, ['key', constructor]);
      should(obj.array).containEql({key: {}});
    });
  });
  describe('proxy constructor', function() {
    it('is called', function() {
      var obj = {array: []};
      var executed = false;
      var constructor = function(parent) {
        executed = true;
        return this;
      };
      flagger.apply(obj, ['flag', constructor]);
      should(executed).be.exactly(true);
    });
    it('receives parent object', function() {
      var obj = {array: []};
      var constructor = function(parent) {
        should(parent).be.exactly(obj);
        return this;
      };
      flagger.apply(obj, ['flag', constructor]);
    });
    it('receives inner empty object', function() {
      var obj = {array: []};
      var constructor = function(parent, inner) {
        should(inner).be.Object();
        should(inner).be.empty();
        return this;
      };
      flagger.apply(obj, ['flag', constructor]);
    });
  });
});
