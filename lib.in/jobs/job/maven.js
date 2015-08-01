"use strict";

var util = require('../../misc/util.js');
var RootModule = require('./maven/root-module.js');

uppableObjectProxy(Maven)
object(util, Maven, 'root-module', RootModule)
primitive(util, Maven, 'root-pom')
primitive(util, Maven, 'goals')
primitive(util, Maven, 'maven-opts')
primitive(util, Maven, 'maven-name')
primitive(util, Maven, 'private-repository')
primitive(util, Maven, 'ignore-upstream-changes')
primitive(util, Maven, 'incremental-build')
primitive(util, Maven, 'automatic-archiving')
primitive(util, Maven, 'automatic-site-archiving')
primitive(util, Maven, 'automatic-fingerprinting')
primitive(util, Maven, 'parallel-build-modules')
primitive(util, Maven, 'resolve-dependencies')
primitive(util, Maven, 'run-headless')
primitive(util, Maven, 'process-plugins')
primitive(util, Maven, 'custom-workspace')
primitive(util, Maven, 'settings')
primitive(util, Maven, 'global-settings')
primitive(util, Maven, 'post-step-run-condition')
