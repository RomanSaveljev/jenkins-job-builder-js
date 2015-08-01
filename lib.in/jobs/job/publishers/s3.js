"use strict";

var util = require('../../../misc/util.js');
var Entry = require('./s3/entry.js');
var MetadataTag = require('./s3/metadata-tag.js');

uppableObjectProxy(S3)
primitive(util, S3, 's3-profile')
objectArray(util, S3, 'entries', Entry)
object(util, S3, 'metadata-tags', MetadataTag)
