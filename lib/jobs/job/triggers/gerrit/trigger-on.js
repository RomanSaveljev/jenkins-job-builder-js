'use strict';
var util$890 = require('../../../../misc/util.js');
var PatchsetCreatedEvent$891 = require('./trigger-on/patchset-created-event.js');
var ChangeAbandonedEvent$892 = require('../../../../misc/empty-proxy.js');
var ChangeMergedEvent$893 = require('../../../../misc/empty-proxy.js');
var ChangeRestoredEvent$894 = require('../../../../misc/empty-proxy.js');
var DraftPublishedEvent$895 = require('../../../../misc/empty-proxy.js');
var RefUpdatedEvent$896 = require('../../../../misc/empty-proxy.js');
var CommentAddedEvent$897 = require('./trigger-on/comment-added-event.js');
var CommentAddedContainsEvent$898 = require('./trigger-on/comment-added-contains-event.js');
uppableArrayProxy(TriggerOn);
TriggerOn.prototype[util$890.camelize('patchset-created-event')] = function (value$907) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'patchset-created-event',
        PatchsetCreatedEvent$891,
        value$907
    ]);
};
TriggerOn.prototype[util$890.camelize('change-abandoned-event')] = function (value$908) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'change-abandoned-event',
        ChangeAbandonedEvent$892,
        value$908
    ]);
};
TriggerOn.prototype[util$890.camelize('change-merged-event')] = function (value$909) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'change-merged-event',
        ChangeMergedEvent$893,
        value$909
    ]);
};
TriggerOn.prototype[util$890.camelize('change-restored-event')] = function (value$910) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'change-restored-event',
        ChangeRestoredEvent$894,
        value$910
    ]);
};
TriggerOn.prototype[util$890.camelize('draft-published-event')] = function (value$911) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'draft-published-event',
        DraftPublishedEvent$895,
        value$911
    ]);
};
TriggerOn.prototype[util$890.camelize('ref-updated-event')] = function (value$912) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'ref-updated-event',
        RefUpdatedEvent$896,
        value$912
    ]);
};
TriggerOn.prototype[util$890.camelize('comment-added-event')] = function (value$913) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'comment-added-event',
        CommentAddedEvent$897,
        value$913
    ]);
};
TriggerOn.prototype[util$890.camelize('comment-added-contains-event')] = function (value$914) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'comment-added-contains-event',
        CommentAddedContainsEvent$898,
        value$914
    ]);
};