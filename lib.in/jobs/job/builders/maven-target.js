"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(MavenTarget)
primitive(util, MavenTarget, 'goals')
primitiveArray(util, MavenTarget, 'properties')
primitive(util, MavenTarget, 'pom')
primitive(util, MavenTarget, 'private-repository')
primitive(util, MavenTarget, 'maven-version')
primitiveArray(util, MavenTarget, 'java-opts')
primitive(util, MavenTarget, 'settings')
primitive(util, MavenTarget, 'global-settings')
