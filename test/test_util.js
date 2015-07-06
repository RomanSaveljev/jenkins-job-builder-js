var should = require('should');
var util = require('../lib/util.js');
var PrimitiveArrayProxy = require('../lib/proxies/primitive-array-proxy.js');
var ObjectArrayProxy = require('../lib/proxies/object-array-proxy.js');

describe('Primitive accessor generator', function() {
  describe('simply', function() {
    it('returns a function', function() {
      should(util.generatePrimitiveAccessor('a', 'b')).be.Function();
    });
  });
  describe('Generated function', function() {
    var accessor = util.generatePrimitiveAccessor('outer', 'inner');
    var obj = {outer: {inner: 5}};
    it('sets inner field value', function() {
      accessor.apply(obj, ['text']);
      should(obj.outer.inner).be.exactly('text');
    });
    it('setter returns the object', function() {
      should(accessor.apply(obj, [null])).be.exactly(obj);
    });
  });
});

describe('Object accessor generator', function() {
  describe('simply', function() {
    it('returns a function', function() {
      should(util.generateObjectAccessor('a', 'b', function() {return this})).be.Function();
    });
  });
  describe('Generated function', function() {
    var constructor = function(upper, shared) {
      this.upper = upper;
      this.shared = shared;
      return this;
    };
    var accessor = util.generateObjectAccessor('outer', 'inner', constructor);
    it('sets inner field value to empty object', function() {
      var obj = {outer: {}};
      accessor.apply(obj);
      should(obj.outer.inner).be.Object();
      should(obj.outer.inner).be.empty();
    });
    it('drops existing inner object', function() {
      var obj = {outer: {key: 3}};
      accessor.apply(obj);
      should(obj.outer.inner).be.Object();
      should(obj.outer.inner).be.empty();
    });
    it('passes correct upper to constructor', function() {
      var obj = {outer: {key: 3}};
      var proxy = accessor.apply(obj);
      should(proxy.upper).be.exactly(obj);
    });
  });
  describe('Generated function', function() {
    var constructor = function(upper, shared) {
      this.upper = upper;
      this.shared = shared;
      should(shared).be.empty();
      this.shared.property = true;
      return this;
    };
    var accessor = util.generateObjectAccessor('outer', 'inner', constructor);
    it('passes correct shared to constructor', function() {
      var obj = {outer: {key: true}};
      var proxy = accessor.apply(obj);
      should(proxy.shared).have.property('property');
    });
  });
});

describe('Primitive array accessor generator', function() {
  describe('Basic sanity', function() {
    it('returns function', function() {
      should(util.generatePrimitiveArrayAccessor('a', 'b')).be.Function();
    });
  });
  describe('Generated function', function() {
    var accessor = util.generatePrimitiveArrayAccessor('outer', 'inner');
    it('returns PrimitiveArrayProxy object', function() {
      var obj = {outer: {inner: []}};
      should(accessor.apply(obj)).be.instanceof(PrimitiveArrayProxy);
    });
    it('creates array as needed', function() {
      var obj = {outer: {}};
      accessor.apply(obj);
      should(obj.outer.inner).be.Array();
    });
    it('always drops existing array', function() {
      var obj = {outer: {inner: ['first']}};
      accessor.apply(obj);
      should(obj.outer.inner).be.empty();
    });
  });
});

describe('Object array accessor generator', function() {
  var constructor = function() {
    return this;
  };
  describe('Basic sanity', function() {
    it('returns function', function() {
      should(util.generateObjectArrayAccessor('a', 'b', constructor)).be.Function();
    });
  });
  describe('Generated function', function() {
    var accessor = util.generateObjectArrayAccessor('outer', 'inner', constructor);
    it('returns ObjectArrayProxy object', function() {
      var obj = {outer: {inner: []}};
      should(accessor.apply(obj)).be.instanceof(ObjectArrayProxy);
    });
    it('creates array as needed', function() {
      var obj = {outer: {}};
      accessor.apply(obj);
      should(obj.outer.inner).be.Array();
    });
    it('always drops existing array', function() {
      var obj = {outer: {inner: ['first']}};
      accessor.apply(obj);
      should(obj.outer.inner).be.empty();
    });
  });
});


describe('Keyed object element accessor generator', function() {
  describe('Basic sanity', function() {
    it('returns function', function() {
      var constructor = function() {
        return this;
      };
      should(util.generateKeyedObjectElementAccessor('array', 'key', constructor)).be.Function();
    });
  });
  describe('Generated function', function() {
    describe('getter', function() {
      var constructor = function() {
        return this;
      }
      var flagger = util.generateKeyedObjectElementAccessor('array', 'key', constructor);
      it('adds member', function() {
        var obj = {array: []};
        flagger.apply(obj);
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
        var flagger = util.generateKeyedObjectElementAccessor('array', 'flag', constructor);
        flagger.apply(obj);
        should(executed).be.exactly(true);
      });
      it('receives parent object', function() {
        var obj = {array: []};
        var constructor = function(parent) {
          should(parent).be.exactly(obj);
          return this;
        };
        var flagger = util.generateKeyedObjectElementAccessor('array', 'flag', constructor);
        flagger.apply(obj);
      });
      it('receives inner empty object', function() {
        var obj = {array: []};
        var constructor = function(parent, inner) {
          should(inner).be.Object();
          should(inner).be.empty();
          return this;
        };
        var flagger = util.generateKeyedObjectElementAccessor('array', 'flag', constructor);
        flagger.apply(obj);
      });
    });
  });
});
