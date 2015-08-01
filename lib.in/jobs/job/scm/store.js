"use strict";

var util = require('../../../misc/util.js');
var Pundle = require('./store/pundle.js');

uppableObjectProxy(Store)
primitive(util, Store, 'script')
primitive(util, Store, 'repository')
primitive(util, Store, 'version-regex')
primitive(util, Store, 'minimum-blessing')
primitiveArray(util, Store, 'parcel-builder-file')
objectArray(util, Store, 'pundles', Pundle)
