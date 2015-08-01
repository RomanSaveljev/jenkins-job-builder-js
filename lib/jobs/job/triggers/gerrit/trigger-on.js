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
var TriggerOn$900 = function (upper$909, array$910) {
    this.upper = upper$909;
    this.array = array$910;
};
TriggerOn$900.prototype.up = function () {
    return this.upper;
};
TriggerOn$900.prototype.and = TriggerOn$900.prototype.up;
module.exports = TriggerOn$900;
TriggerOn$900.prototype[util$890.camelize('patchset-created-event')] = function (value$911) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'patchset-created-event',
        PatchsetCreatedEvent$891,
        value$911
    ]);
};
TriggerOn$900.prototype[util$890.camelize('change-abandoned-event')] = function (value$912) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'change-abandoned-event',
        ChangeAbandonedEvent$892,
        value$912
    ]);
};
TriggerOn$900.prototype[util$890.camelize('change-merged-event')] = function (value$913) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'change-merged-event',
        ChangeMergedEvent$893,
        value$913
    ]);
};
TriggerOn$900.prototype[util$890.camelize('change-restored-event')] = function (value$914) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'change-restored-event',
        ChangeRestoredEvent$894,
        value$914
    ]);
};
TriggerOn$900.prototype[util$890.camelize('draft-published-event')] = function (value$915) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'draft-published-event',
        DraftPublishedEvent$895,
        value$915
    ]);
};
TriggerOn$900.prototype[util$890.camelize('ref-updated-event')] = function (value$916) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'ref-updated-event',
        RefUpdatedEvent$896,
        value$916
    ]);
};
TriggerOn$900.prototype[util$890.camelize('comment-added-event')] = function (value$917) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'comment-added-event',
        CommentAddedEvent$897,
        value$917
    ]);
};
TriggerOn$900.prototype[util$890.camelize('comment-added-contains-event')] = function (value$918) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'comment-added-contains-event',
        CommentAddedContainsEvent$898,
        value$918
    ]);
};