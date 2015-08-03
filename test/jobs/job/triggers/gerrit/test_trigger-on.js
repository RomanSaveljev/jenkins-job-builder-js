var should = require('should');
var TriggerOn = require('../../../../../lib/jobs/job/triggers/gerrit/trigger-on.js');
var testlib = require('../../../../testlib.js');
var PatchsetCreatedEvent = require('../../../../../lib/jobs/job/triggers/gerrit/trigger-on/patchset-created-event.js');
var EmptyProxy = require('../../../../../lib/misc/empty-proxy.js');
var CommentAddedEvent = require('../../../../../lib/jobs/job/triggers/gerrit/trigger-on/comment-added-event.js');
var CommentAddedContainsEvent = require('../../../../../lib/jobs/job/triggers/gerrit/trigger-on/comment-added-contains-event.js');

describe('TriggerOn', function() {
  describe('constructor', testlib.describeProxyConstructor(TriggerOn));
  describe('object', testlib.describeProxyUppableAndable(TriggerOn));
  describe('properties', testlib.describeProxyKeyedObjectProperty(TriggerOn, 'patchset-created-event', PatchsetCreatedEvent));
  describe('properties', testlib.describeProxyKeyedObjectProperty(TriggerOn, 'change-abandoned-event', EmptyProxy));
  describe('properties', testlib.describeProxyKeyedObjectProperty(TriggerOn, 'change-merged-event', EmptyProxy));
  describe('properties', testlib.describeProxyKeyedObjectProperty(TriggerOn, 'change-restored-event', EmptyProxy));
  describe('properties', testlib.describeProxyKeyedObjectProperty(TriggerOn, 'draft-published-event', EmptyProxy));
  describe('properties', testlib.describeProxyKeyedObjectProperty(TriggerOn, 'ref-updated-event', EmptyProxy));
  describe('properties', testlib.describeProxyKeyedObjectProperty(TriggerOn, 'comment-added-event', CommentAddedEvent));
  describe('properties', testlib.describeProxyKeyedObjectProperty(TriggerOn, 'comment-added-contains-event', CommentAddedContainsEvent));
});
