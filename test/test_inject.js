var should = require('should');
var Inject = require('../lib/wrappers/inject.js');

describe('Inject', function() {
  it('should export defined', function() {
    should(Inject).be.Function();
  });
  it('should export constructor', function() {
    should(new Inject(null, {})).be.Object;
  });
  it('should have up()', function() {
    should(new Inject(null, null)).have.property('up');
  });
  it('should have and()', function() {
    should(new Inject(null, null)).have.property('and');
  });
  it('should be uppable', function() {
    var upper = {a: 1};
    should(new Inject(upper, {}).up()).be.exactly(upper);
  });
  it('should be andable', function() {
    var upper = {a: 1};
    should(new Inject(upper, {}).and()).be.exactly(upper);
  });
  it('should have scriptContent', function() {
    should(new Inject(null, null)).have.property('scriptContent');
  });
  it('should have scriptContent() update script-content', function() {
    var obj = {};
    var inject = new Inject(null, obj);
    inject.scriptContent('abc');
    should(obj['script-content']).be.equal('abc');
  });
});
