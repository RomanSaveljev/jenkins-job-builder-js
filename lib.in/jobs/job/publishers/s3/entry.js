"use strict";

var util = require('../../../../misc/util.js');

uppableObjectProxy(Entry)
primitive(util, Entry, 'destination-bucket')
primitive(util, Entry, 'source-files')
primitive(util, Entry, 'storage-class')
primitive(util, Entry, 'bucket-region')
primitive(util, Entry, 'upload-on-failure')
primitive(util, Entry, 'upload-from-slave')
primitive(util, Entry, 'managed-artifacts')
primitive(util, Entry, 'flatten')
