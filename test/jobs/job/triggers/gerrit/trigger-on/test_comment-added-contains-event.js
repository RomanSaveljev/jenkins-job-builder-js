var should = require('should');
var CommentAddedContainsEvent = require('../../../../../../lib/jobs/job/triggers/gerrit/trigger-on/comment-added-contains-event.js');
var testlib = require('../../../../../testlib.js');

describe('CommentAddedContainsEvent', function() {
  describe('constructor', testlib.describeProxyConstructor(CommentAddedContainsEvent));
  describe('object', testlib.describeProxyUppableAndable(CommentAddedContainsEvent));
  describe('properties', testlib.describeProxyPrimitiveProperty(CommentAddedContainsEvent, 'comment-contains-value'));
});
