var should = require('should');
var util = require('../lib/util.js');
var ArrayProxy = require('../lib/proxies/array-proxy.js');

describe('Nested accessor generator', function() {
  describe('Basic sanity', function() {
    it('returns function', function() {
      should(util.generateNestedAccessor('a', 'b')).be.Function();
    });
  });
  describe('Generated function', function() {
    var accessor = util.generateNestedAccessor('outer', 'inner');
    var obj = {outer: {inner: 5}};
    it.skip('gets inner field value', function() {
      should(accessor.apply(obj)).be.exactly(5);
    });
    it('sets inner field value', function() {
      accessor.apply(obj, ['text']);
      should(obj.outer.inner).be.exactly('text');
    });
    it('setter returns the object', function() {
      should(accessor.apply(obj, [null])).be.exactly(obj);
    });
  });
});

describe('String flag accessor generator', function() {
  describe('Basic sanity', function() {
    it('returns function', function() {
      should(util.generateStringFlagAccessor('flag')).be.Function();
    });
  });
  describe('Generated function', function() {
    var flagger = util.generateStringFlagAccessor('flag');
    it('adds new member', function() {
      var obj = {array: []};
      should(obj.array).have.length(0);
      flagger.apply(obj, [true]);
      should(obj.array).have.length(1);
      should(obj.array).containEql('flag');
    });
    it('keeps existing member', function() {
      var obj = {array: ['something']};
      should(obj.array).have.length(1);
      flagger.apply(obj, [true]);
      should(obj.array).have.length(2);
      should(obj.array).containEql('something');
      should(obj.array).containEql('flag');
    });
    it('does not create duplicates', function() {
      var obj = {array: ['flag']};
      should(obj.array).have.length(1);
      flagger.apply(obj, [true]);
      should(obj.array).have.length(1);
    });
    it('does no action on removing non-existent flag', function() {
      var obj = {array: ['something']};
      flagger.apply(obj, [false]);
      should(obj.array).containEql('something');
      should(obj.array).have.length(1);
    });
    it('removes flag', function() {
      var obj = {array: ['flag']};
      flagger.apply(obj, [false]);
      should(obj.array).not.containEql('something');
      should(obj.array).have.length(0);
    })
  });
});

describe('Object flag accessor generator', function() {
  describe('Basic sanity', function() {
    it('returns function', function() {
      var constructor = function() {
        return this;
      };
      should(util.generateObjectFlagAccessor('flag', constructor)).be.Function();
    });
  });
  describe('Generated function', function() {
    describe('getter', function() {
      var constructor = function() {
        return this;
      }
      var flagger = util.generateObjectFlagAccessor('flag', constructor);
      it('implicitly adds member', function() {
        var obj = {array: []};
        flagger.apply(obj);
        should(obj.array).containEql({flag: {}});
      });
      it('detects uniqueness', function() {
        var obj = {array: [{something: {}}]};
        flagger.apply(obj);
        should(obj.array).containEql({flag: {}});
      });
      it('keeps existing', function() {
        var obj = {array: [{something: {}}]};
        flagger.apply(obj);
        should(obj.array).have.length(2);
      });
      it('does not add duplicates', function() {
        var obj = {array: [{flag: {}}]};
        flagger.apply(obj);
        should(obj.array).have.length(1);
        should(obj.array).containEql({flag: {}});
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
        var flagger = util.generateObjectFlagAccessor('flag', constructor);
        flagger.apply(obj);
        should(executed).be.exactly(true);
      });
      it('receives parent object', function() {
        var obj = {array: []};
        var constructor = function(parent) {
          should(parent).be.exactly(obj);
          return this;
        };
        var flagger = util.generateObjectFlagAccessor('flag', constructor);
        flagger.apply(obj);
      });
      it('receives inner object', function() {
        var obj = {array: [{flag: {property: true}}]};
        var constructor = function(parent, inner) {
          should(inner).have.property('property');
          return this;
        };
        var flagger = util.generateObjectFlagAccessor('flag', constructor);
        flagger.apply(obj);
      });
    });
  });
});

describe('Array proxy accessor generator', function() {
  describe('Basic sanity', function() {
    it('returns function', function() {
      should(util.generateArrayProxyAccessor('a', 'b')).be.Function();
    });
  });
  describe('Generated function', function() {
    var accessor = util.generateArrayProxyAccessor('outer', 'inner');
    it('returns ArrayProxy object', function() {
      var obj = {outer: {inner: []}};
      should(accessor.apply(obj)).be.instanceof(ArrayProxy);
    });
    it('creates array as needed', function() {
      var obj = {outer: {}};
      accessor.apply(obj);
      should(obj.outer.inner).be.Array();
    });
    it('appends to existing array', function() {
      var obj = {outer: {inner: ['first']}};
      accessor.apply(obj).set('second');
      should(obj.outer.inner).containEql('first');
      should(obj.outer.inner).containEql('second');
    });
  });
});
