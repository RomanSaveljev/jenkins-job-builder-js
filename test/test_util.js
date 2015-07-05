var should = require('should');
var util = require('../lib/util.js');
var ArrayProxy = require('../lib/proxies/array-proxy.js');

describe('Primitive accessor generator', function() {
  describe('Basic sanity', function() {
    it('returns function', function() {
      should(util.generatePrimitiveAccessor('a', 'b')).be.Function();
    });
  });
  describe('Generated function', function() {
    var accessor = util.generatePrimitiveAccessor('outer', 'inner');
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
      should(util.generatePrimitiveElementAccessor('flag')).be.Function();
    });
  });
  describe('Generated function', function() {
    var flagger = util.generatePrimitiveElementAccessor('flag');
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
  });
});

describe('Object flag accessor generator', function() {
  describe('Basic sanity', function() {
    it('returns function', function() {
      var constructor = function() {
        return this;
      };
      should(util.generateObjectElementAccessor('flag', constructor)).be.Function();
    });
  });
  describe('Generated function', function() {
    describe('getter', function() {
      var constructor = function() {
        return this;
      }
      var flagger = util.generateObjectElementAccessor('flag', constructor);
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
    });
    describe('proxy constructor', function() {
      it('is called', function() {
        var obj = {array: []};
        var executed = false;
        var constructor = function(parent) {
          executed = true;
          return this;
        };
        var flagger = util.generateObjectElementAccessor('flag', constructor);
        flagger.apply(obj);
        should(executed).be.exactly(true);
      });
      it('receives parent object', function() {
        var obj = {array: []};
        var constructor = function(parent) {
          should(parent).be.exactly(obj);
          return this;
        };
        var flagger = util.generateObjectElementAccessor('flag', constructor);
        flagger.apply(obj);
      });
      it('receives inner empty object', function() {
        var obj = {array: [{flag: {}}]};
        var constructor = function(parent, inner) {
          should(inner).be.empty();
          return this;
        };
        var flagger = util.generateObjectElementAccessor('flag', constructor);
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
      accessor.apply(obj).add('second');
      should(obj.outer.inner).containEql('first');
      should(obj.outer.inner).containEql('second');
    });
  });
});
