var should = require('should');
var ConditionOperand = require('../../../../../lib/jobs/job/builders/conditional-step/condition-operand.js');
var testlib = require('../../../../testlib.js');
var Builders = require('../../../../../lib/jobs/job/builders.js');

describe('ConditionOperand', function() {
  describe('constructor', testlib.describeProxyConstructor(ConditionOperand));
  describe('object', testlib.describeProxyUppableAndable(ConditionOperand));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'condition-kind'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'condition-expression'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'cause'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'exclusive-cause'));
  describe('properties', testlib.describeProxyObjectProperty(ConditionOperand, 'day-selector'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'use-build-time'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(ConditionOperand, 'nodes'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'condition-string1'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'condition-string2'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'condition-case-insensitive'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'condition-worst'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'condition-best'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'condition-command'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'condition-filename'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'condition-basedir'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'include-pattern'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'exclude-pattern'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'lhs'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'rhs'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'comparator'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'regex'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'label'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'earliest-hour'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'earliest-min'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'latest-hour'));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'latest-min'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(ConditionOperand, 'condition-operands', ConditionOperand));
  describe('properties', testlib.describeProxyPrimitiveProperty(ConditionOperand, 'on-evaluation-failure'));
  describe('properties', testlib.describeProxyPrimitiveArrayProperty(ConditionOperand, 'steps', Builders));

});
