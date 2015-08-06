var should = require('should');
var Parameters = require('../../../lib/jobs/job/parameters.js');
var testlib = require('../../testlib.js');
var Choice = require('../../../lib/jobs/job/parameters/choice.js');
var Dynamic = require('../../../lib/jobs/job/parameters/dynamic.js');
var DynamicScriptler = require('../../../lib/jobs/job/parameters/dynamic-scriptler.js');
var ExtendedChoice = require('../../../lib/jobs/job/parameters/extended-choice.js');
var File = require('../../../lib/jobs/job/parameters/file.js');
var Value = require('../../../lib/jobs/job/parameters/value.js');
var MatrixCombinations = require('../../../lib/jobs/job/parameters/matrix-combinations.js');
var Node = require('../../../lib/jobs/job/parameters/node.js');
var Run = require('../../../lib/jobs/job/parameters/run.js');
var SvnTags = require('../../../lib/jobs/job/parameters/svn-tags.js');
var ValidatingString = require('../../../lib/jobs/job/parameters/validating-string.js');

describe('Parameters', function() {
  describe('constructor', testlib.describeProxyConstructor(Parameters));
  describe('object', testlib.describeProxyUppableAndable(Parameters));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Parameters, 'bool', Value));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Parameters, 'choice', Choice));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Parameters, 'dynamic-choice', Dynamic));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Parameters, 'dynamic-choice-scriptler', DynamicScriptler));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Parameters, 'dynamic-string', Dynamic));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Parameters, 'dynamic-string-scriptler', DynamicScriptler));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Parameters, 'extended-choice', ExtendedChoice));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Parameters, 'file', File));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Parameters, 'label', Value));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Parameters, 'matrix-combinations', MatrixCombinations));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Parameters, 'node', Node));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Parameters, 'password', Value));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Parameters, 'run', Run));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Parameters, 'string', Value));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Parameters, 'svn-tags', SvnTags));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Parameters, 'text', Value));
  describe('properties', testlib.describeProxyKeyedObjectProperty(Parameters, 'validating-string', ValidatingString));
});
