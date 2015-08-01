var should = require('should');
var AllConditions = require('../../../../../lib/jobs/job/builders/conditional-step/all-conditions.js');
var testlib = require('../../../../testlib.js');

describe('AllConditions.generate', function() {
  var proto = {};
  var obj = {};
  before(function() {
    AllConditions.generate(proto, obj);
  });
  var expectedMembers = [
    testlib.camelize('condition-kind'),
    testlib.camelize('condition-expression'),
    testlib.camelize('condition-string1'),
    testlib.camelize('condition-string2'),
    testlib.camelize('condition-case-insensitive'),
    testlib.camelize('condition-worst'),
    testlib.camelize('condition-best'),
    testlib.camelize('condition-command'),
    testlib.camelize('condition-filename'),
    testlib.camelize('condition-basedir'),
    testlib.camelize('condition-operand')
  ];
  expectedMembers.forEach(function(member) {
    it('should create ' + member, function() {
      should(proto).have.property(member);
    });
    it('should create ' + member + '()', function() {
      should(proto[member]).be.a.Function();
    });
  });
});
