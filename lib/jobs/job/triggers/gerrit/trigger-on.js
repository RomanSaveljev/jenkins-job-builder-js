"use strict";

var util = require('../../../../misc/util.js');
var PatchsetCreatedEvent = require('./trigger-on/patchset-created-event.js');
var ChangeAbandonedEvent = require('../../../../misc/empty-proxy.js');
var ChangeMergedEvent = require('../../../../misc/empty-proxy.js');
var ChangeRestoredEvent = require('../../../../misc/empty-proxy.js');
var DraftPublishedEvent = require('../../../../misc/empty-proxy.js');
var RefUpdatedEvent = require('../../../../misc/empty-proxy.js');
var CommentAddedEvent = require('./trigger-on/comment-added-event.js');
var CommentAddedContainsEvent = require('./trigger-on/comment-added-contains-event.js');

var TriggerOn = function(upper, array) {
  this.upper = upper;
  this.array = array;
};
util.makeUppable(TriggerOn.prototype, 'upper');
TriggerOn.prototype.patchsetCreatedEvent = util.generateKeyedObjectElementAccessor('array', 'patchset-created-event', PatchsetCreatedEvent);
TriggerOn.prototype.changeAbandonedEvent = util.generateKeyedObjectElementAccessor('array', 'change-abandoned-event', ChangeAbandonedEvent);
TriggerOn.prototype.changeMergedEvent = util.generateKeyedObjectElementAccessor('array', 'change-merged-event', ChangeMergedEvent);
TriggerOn.prototype.changeRestoredEvent = util.generateKeyedObjectElementAccessor('array', 'change-restored-event', ChangeRestoredEvent);
TriggerOn.prototype.draftPublishedEvent = util.generateKeyedObjectElementAccessor('array', 'draft-published-event', DraftPublishedEvent);
TriggerOn.prototype.refUpdatedEvent = util.generateKeyedObjectElementAccessor('array', 'ref-updated-event', RefUpdatedEvent);
TriggerOn.prototype.commentAddedEvent = util.generateKeyedObjectElementAccessor('array', 'comment-added-event', CommentAddedEvent);
TriggerOn.prototype.commentAddedContainsEvent = util.generateKeyedObjectElementAccessor('array', 'comment-added-contains-event', CommentAddedContainsEvent);

module.exports = TriggerOn;
