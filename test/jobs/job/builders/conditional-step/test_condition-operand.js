var should = require('should');
var ConditionOperand = require('../../../../../lib/jobs/job/builders/conditional-step/condition-operand.js');
var testlib = require('../../../../testlib.js');
var Builders = require('../../../../../lib/jobs/job/builders.js');

describe('ConditionOperand', function() {
  describe('constructor', testlib.describeProxyConstructor(ConditionOperand));
  describe('object', testlib.describeProxyUppableAndable(ConditionOperand));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'condition-kind'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'condition-expression'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'condition-string1'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'condition-string2'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'condition-case-insensitive'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'condition-worst'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'condition-best'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'condition-command'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'condition-filename'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'condition-basedir'));
  describe('properties', testlib.describeProxyObjectProperty(ConditionOperand, 'condition-operand', ConditionOperand));
});
