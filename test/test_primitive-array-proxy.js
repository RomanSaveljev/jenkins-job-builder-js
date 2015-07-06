var should = require('should');
var PrimitiveArrayProxy = require('../lib/proxies/primitive-array-proxy.js');
var testlib = require('./testlib.js');

describe('PrimitiveArrayProxy', function() {
  describe('constructor', testlib.describeProxyConstructor(PrimitiveArrayProxy));
  describe('object', testlib.describeProxyUppableAndable(PrimitiveArrayProxy));
  describe('add', function() {
    it('adds new elements', function() {
      var array = [];
      var proxy = new PrimitiveArrayProxy(null, array);
      proxy.add('a member');
      should(array).have.length(1);
      should(array).containEql('a member');
    });
    it('keeps existing', function() {
      var array = ['a member'];
      var proxy = new PrimitiveArrayProxy(null, array);
      proxy.add('another');
      should(array).have.length(2);
      should(array).containEql('a member');
      should(array).containEql('another');
    });
    it('silently ignores null', function() {
      var array = [];
      var proxy = new PrimitiveArrayProxy(null, array);
      proxy.add(null);
      should(array).have.length(0);
    });
    it('silently ignores undefined', function() {
      var array = [];
      var proxy = new PrimitiveArrayProxy(null, array);
      proxy.add(undefined);
      should(array).have.length(0);
    });
    it('supports strings', function() {
      var proxy = new PrimitiveArrayProxy(null, []);
      should(function() {proxy.add('string')}).not.throw();
    });
    it('supports booleans', function() {
      var proxy = new PrimitiveArrayProxy(null, []);
      should(function() {proxy.add(false)}).not.throw();
    });
    it('supports numbers', function() {
      var proxy = new PrimitiveArrayProxy(null, []);
      should(function() {proxy.add(5)}).not.throw();
    });
    it('does not support functions', function() {
      var proxy = new PrimitiveArrayProxy(null, []);
      should(function() {proxy.add(function() {})}).throw();
    });
    it('does not support objects', function() {
      var proxy = new PrimitiveArrayProxy(null, []);
      should(function() {proxy.add({})}).throw();
    });
  });
});
