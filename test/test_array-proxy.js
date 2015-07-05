var should = require('should');
var ArrayProxy = require('../lib/proxies/array-proxy.js');
var testlib = require('./testlib.js');

describe('ArrayProxy', function() {
  describe('constructor', testlib.describeProxyConstructor(ArrayProxy));
  describe('object', testlib.describeProxyUppableAndable(ArrayProxy));
  describe('add', function() {
    it('adds new elements', function() {
      var array = [];
      var proxy = new ArrayProxy(null, array);
      proxy.add('a member');
      should(array).have.length(1);
      should(array).containEql('a member');
    });
    it('keeps existing', function() {
      var array = ['a member'];
      var proxy = new ArrayProxy(null, array);
      proxy.add('another');
      should(array).have.length(2);
      should(array).containEql('a member');
      should(array).containEql('another');
    });
    it('silently ignores null', function() {
      var array = [];
      var proxy = new ArrayProxy(null, array);
      proxy.add(null);
      should(array).have.length(0);
    });
    it('silently ignores undefined', function() {
      var array = [];
      var proxy = new ArrayProxy(null, array);
      proxy.add(undefined);
      should(array).have.length(0);
    });
    it('supports strings', function() {
      var proxy = new ArrayProxy(null, []);
      should(function() {proxy.add('string')}).not.throw();
    });
    it('supports objects', function() {
      var proxy = new ArrayProxy(null, []);
      should(function() {proxy.add({})}).not.throw();
    });
    it('supports booleans', function() {
      var proxy = new ArrayProxy(null, []);
      should(function() {proxy.add(false)}).not.throw();
    });
    it('supports numbers', function() {
      var proxy = new ArrayProxy(null, []);
      should(function() {proxy.add(5)}).not.throw();
    });
    it('does not support functions', function() {
      var proxy = new ArrayProxy(null, []);
      should(function() {proxy.add(function() {})}).throw();
    });
  });
});
