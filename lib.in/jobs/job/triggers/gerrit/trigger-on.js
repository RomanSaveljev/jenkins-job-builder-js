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

uppableArrayProxy(TriggerOn)
keyedObjectElement(util, TriggerOn, 'patchset-created-event', PatchsetCreatedEvent)
keyedObjectElement(util, TriggerOn, 'change-abandoned-event', ChangeAbandonedEvent)
keyedObjectElement(util, TriggerOn, 'change-merged-event', ChangeMergedEvent)
keyedObjectElement(util, TriggerOn, 'change-restored-event', ChangeRestoredEvent)
keyedObjectElement(util, TriggerOn, 'draft-published-event', DraftPublishedEvent)
keyedObjectElement(util, TriggerOn, 'ref-updated-event', RefUpdatedEvent)
keyedObjectElement(util, TriggerOn, 'comment-added-event', CommentAddedEvent)
keyedObjectElement(util, TriggerOn, 'comment-added-contains-event', CommentAddedContainsEvent)
