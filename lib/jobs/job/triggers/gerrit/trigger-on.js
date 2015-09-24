'use strict';
var util$915 = require('../../../../misc/util.js');
var PatchsetCreatedEvent$916 = require('./trigger-on/patchset-created-event.js');
var ChangeAbandonedEvent$917 = require('../../../../misc/empty-proxy.js');
var ChangeMergedEvent$918 = require('../../../../misc/empty-proxy.js');
var ChangeRestoredEvent$919 = require('../../../../misc/empty-proxy.js');
var DraftPublishedEvent$920 = require('../../../../misc/empty-proxy.js');
var RefUpdatedEvent$921 = require('../../../../misc/empty-proxy.js');
var CommentAddedEvent$922 = require('./trigger-on/comment-added-event.js');
var CommentAddedContainsEvent$923 = require('./trigger-on/comment-added-contains-event.js');
var TriggerOn$925 = function (upper$934, array$935) {
    this.upper = upper$934;
    this.array = array$935;
};
TriggerOn$925.prototype.up = function () {
    return this.upper;
};
TriggerOn$925.prototype.and = TriggerOn$925.prototype.up;
module.exports = TriggerOn$925;
TriggerOn$925.prototype[util$915.camelize('patchset-created-event')] = function (value$936) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'patchset-created-event',
        PatchsetCreatedEvent$916,
        value$936
    ]);
};
TriggerOn$925.prototype[util$915.camelize('change-abandoned-event')] = function (value$937) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'change-abandoned-event',
        ChangeAbandonedEvent$917,
        value$937
    ]);
};
TriggerOn$925.prototype[util$915.camelize('change-merged-event')] = function (value$938) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'change-merged-event',
        ChangeMergedEvent$918,
        value$938
    ]);
};
TriggerOn$925.prototype[util$915.camelize('change-restored-event')] = function (value$939) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'change-restored-event',
        ChangeRestoredEvent$919,
        value$939
    ]);
};
TriggerOn$925.prototype[util$915.camelize('draft-published-event')] = function (value$940) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'draft-published-event',
        DraftPublishedEvent$920,
        value$940
    ]);
};
TriggerOn$925.prototype[util$915.camelize('ref-updated-event')] = function (value$941) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'ref-updated-event',
        RefUpdatedEvent$921,
        value$941
    ]);
};
TriggerOn$925.prototype[util$915.camelize('comment-added-event')] = function (value$942) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'comment-added-event',
        CommentAddedEvent$922,
        value$942
    ]);
};
TriggerOn$925.prototype[util$915.camelize('comment-added-contains-event')] = function (value$943) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'comment-added-contains-event',
        CommentAddedContainsEvent$923,
        value$943
    ]);
};