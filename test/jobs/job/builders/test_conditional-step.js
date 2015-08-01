var should = require('should');
var ConditionalStep = require('../../../../lib/jobs/job/builders/conditional-step.js');
var testlib = require('../../../testlib.js');
var Builders = require('../../../../lib/jobs/job/builders.js');
var ConditionOperand = require('../../../../lib/jobs/job/builders/conditional-step/condition-operand.js');

describe('ConditionalStep', function() {
  describe('constructor', testlib.describeProxyConstructor(ConditionalStep));
  describe('object', testlib.describeProxyUppableAndable(ConditionalStep));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionalStep, 'condition-kind'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionalStep, 'condition-expression'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionalStep, 'condition-string1'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionalStep, 'condition-string2'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionalStep, 'condition-case-insensitive'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionalStep, 'condition-worst'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionalStep, 'condition-best'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionalStep, 'condition-command'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionalStep, 'condition-filename'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionalStep, 'condition-basedir'));
  describe('properties', testlib.describeProxyObjectProperty(ConditionalStep, 'condition-operand', ConditionOperand));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionalStep, 'on-evaluation-failure'));
  describe('properties', testlib.describeProxyCustomArrayProperty(ConditionalStep, 'steps', Builders));
});
