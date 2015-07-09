/*!
 * builders - lib/builders.js
 * Copyright(c) 2015 Roman Saveljev <roman.saveljev@haltian.com>
 * MIT Licensed
 */

"use strict";

var Builders = function(upper, array) {
  this.upper = upper;
  this.array = array;
  return this;
};

module.exports = Builders;

/**
 * Module dependencies.
 */
var util = require('./util.js');
var Ant = require('./builders/ant.js');
var ArtifactResolver = require('./builders/artifact-resolver.js');
var Beaker = require('./builders/beaker.js');
var ChangeAssemblyVersion = require('./builders/change-assembly-version.js');
var Cmake = require('./builders/cmake.js');
var ConditionalStep = require('./builders/conditional-step.js');

util.makeUppable(Builders.prototype, 'upper');
Builders.prototype.ant = util.generateKeyedObjectElementAccessor('array', 'ant', Ant);
Builders.prototype.artifactResolver = util.generateKeyedObjectElementAccessor('array', 'artifact-resolver', ArtifactResolver);
Builders.prototype.batch = util.generateKeyedPrimitiveElementAccessor('array', 'batch');
Builders.prototype.beaker = util.generateKeyedObjectElementAccessor('array', 'beaker', Beaker);
Builders.prototype.buildersFrom = util.generateKeyedPrimitiveElementAccessor('array', 'builders-from');
Builders.prototype.changeAssemblyVersion = util.generateKeyedObjectElementAccessor('array', 'change-assembly-version', ChangeAssemblyVersion);
Builders.prototype.cmake = util.generateKeyedObjectElementAccessor('array', 'cmake', Cmake);
Builders.prototype.conditionalStep = util.generateKeyedObjectElementAccessor('array', 'conditional-step', ConditionalStep);
