"use strict";

var util = require('../../../../misc/util.js');
var Location = require('./repo/location.js');

uppableObjectProxy(Repo)
primitive(util, Repo, 'root')
objectArray(util, Repo, 'locations', Location)
primitiveArray(util, Repo, 'excluded-regions')
primitive(util, Repo, 'compression-level')
