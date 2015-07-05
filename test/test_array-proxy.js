var should = require('should');
var ArrayProxy = require('../lib/proxies/array-proxy.js');
var testlib = require('./testlib.js');

describe('ArrayProxy', function() {
  describe('constructor', testlib.describeObjectProxyConstructor(ArrayProxy));
  describe('object', testlib.describeObjectProxyUppableAndable(ArrayProxy));
  describe('set', function() {
    it('adds new elements', function() {
      var array = [];
      var proxy = new ArrayProxy(null, array);
      proxy.set('a member');
      should(array).have.length(1);
      should(array).containEql('a member');
    });
    it('does not add duplicates', function() {
      var array = ['a member'];
      var proxy = new ArrayProxy(null, array);
      proxy.set('a member');
      should(array).have.length(1);
      should(array).containEql('a member');
    });
    it('keeps existing', function() {
      var array = ['a member'];
      var proxy = new ArrayProxy(null, array);
      proxy.set('another');
      should(array).have.length(2);
      should(array).containEql('a member');
      should(array).containEql('another');
    });
    it('silently ignores null', function() {
      var array = [];
      var proxy = new ArrayProxy(null, array);
      proxy.set(null);
      should(array).have.length(0);
    });
    it('silently ignores undefined', function() {
      var array = [];
      var proxy = new ArrayProxy(null, array);
      proxy.set(undefined);
      should(array).have.length(0);
    });
    it('supports strings', function() {
      var proxy = new ArrayProxy(null, []);
      should(proxy.set('string')).not.throw();
    });
    it('supports numbers', function() {
      var proxy = new ArrayProxy(null, []);
      should(proxy.set(5)).not.throw();
    });
    it('does not support booleans', function() {
      var proxy = new ArrayProxy(null, []);
      should(function() {proxy.set(false)}).throw();
    });
    it('does not support functions', function() {
      var proxy = new ArrayProxy(null, []);
      should(function() {proxy.set(function() {})}).throw();
    });
    it('does not support objects', function() {
      var proxy = new ArrayProxy(null, []);
      should(function() {proxy.set({})}).throw(Error);
    });
  });
});
