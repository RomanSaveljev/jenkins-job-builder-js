var should = require('should');
var CommentAddedEvent = require('../../../../../../lib/jobs/job/triggers/gerrit/trigger-on/comment-added-event.js');
var testlib = require('../../../../../testlib.js');

describe('CommentAddedEvent', function() {
  describe('constructor', testlib.describeProxyConstructor(CommentAddedEvent));
  describe('object', testlib.describeProxyUppableAndable(CommentAddedEvent));
  describe('properties', testlib.describeProxyPrimitiveProperty(CommentAddedEvent, 'approval-category'));
  describe('properties', testlib.describeProxyPrimitiveProperty(CommentAddedEvent, 'approval-value'));
});
