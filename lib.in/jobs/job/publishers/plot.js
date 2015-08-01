"use strict";

var util = require('../../../misc/util.js');
var Series = require('./plot/series.js');

uppableObjectProxy(Plot)
primitive(util, Plot, 'title')
primitive(util, Plot, 'yaxis')
primitive(util, Plot, 'group')
primitive(util, Plot, 'num-builds')
primitive(util, Plot, 'style')
primitive(util, Plot, 'use-description')
primitive(util, Plot, 'exclude-zero-yaxis')
primitive(util, Plot, 'logarithmic-yaxis')
primitive(util, Plot, 'keep-records')
primitive(util, Plot, 'csv-file-name')
objectArray(util, Plot, 'series', Series)
