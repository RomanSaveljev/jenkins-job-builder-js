var should = require('should');
var PatchsetCreatedEvent = require('../../../../../../lib/jobs/job/triggers/gerrit/trigger-on/patchset-created-event.js');
var testlib = require('../../../../../testlib.js');

describe('PatchsetCreatedEvent', function() {
  describe('constructor', testlib.describeProxyConstructor(PatchsetCreatedEvent));
  describe('object', testlib.describeProxyUppableAndable(PatchsetCreatedEvent));
  describe('properties', testlib.describeProxyPrimitiveProperty(PatchsetCreatedEvent, 'exclude-drafts'));
  describe('properties', testlib.describeProxyPrimitiveProperty(PatchsetCreatedEvent, 'exclude-trivial-rebase'));
  describe('properties', testlib.describeProxyPrimitiveProperty(PatchsetCreatedEvent, 'exclude-no-code-change'));
});
