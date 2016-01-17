var should = require('should');
var OpenShiftDeployer = require('../../../../lib/jobs/job/builders/openshift-deployer.js');
var testlib = require('../../../testlib.js');

describe('OpenShiftDeployer', function() {
  describe('constructor', testlib.describeProxyConstructor(OpenShiftDeployer));
  describe('object', testlib.describeProxyUppableAndable(OpenShiftDeployer));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftDeployer, 'api-url'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftDeployer, 'dep-cfg'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftDeployer, 'namespace'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftDeployer, 'auth-token'));
  describe('properties', testlib.describeProxyPrimitiveProperty(OpenShiftDeployer, 'verbose'));
});
