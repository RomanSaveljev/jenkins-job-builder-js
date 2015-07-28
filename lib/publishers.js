"use strict";

var util = require('../util.js');
var ObjectArrayProxy = require('./proxies/object-array-proxy.js');
var AggregateFlowTests = require('./proxies/empty-proxy.js');
var AggregateTests = require('./publishers/aggregate-tests.js');
var Archive = require('./publishers/archive.js');
var ArtifactDeployer = require('./publishers/artifact-deployer.js');
var BlameUpstream = require('./proxies/empty-proxy.js');
var BuildPublisher = require('./publishers/build-publisher.js');
var Campfire = require('./publishers/campfire.js');
var CheckStyle = require('./publishers/checkstyle.js');
var Cifs = require('./publishers/cifs.js');
var Cigame = require('./proxies/empty-proxy.js');
var CloneWorkspace = require('./publishers/clone-workspace.js');
var Cloverphp = require('./publishers/cloverphp.js');
var Cobertura = require('./publishers/cobertura.js');
var ConditionalPublisher = require('./publishers/conditional-publisher.js');
function constructConditionalPublisherArray(upper, array) {
  ObjectArrayProxy.apply(this, [upper, array, ConditionalPublisher]);
}
var CopyToMaster = require('./publishers/copy-to-master.js');
var CppCheck = require('./publishers/cppcheck.js');

var Publishers = function(upper, array) {
  this.upper = upper;
  this.array = array;
};
util.makeUppable(Publishers.prototype, 'upper');
Publishers.prototype.aggregateFlowTests = util.generateKeyedObjectElementAccessor('array', 'aggregate-flow-tests', AggregateFlowTests);
Publishers.prototype.aggregateTests = util.generateKeyedObjectElementAccessor('array', 'aggregate-tests', AggregateTests);
Publishers.prototype.archive = util.generateKeyedObjectElementAccessor('array', 'archive', Archive);
Publishers.prototype.artifactDeployer = util.generateKeyedObjectElementAccessor('array', 'artifact-deployer', ArtifactDeployer);
Publishers.prototype.blameUpstream = util.generateKeyedObjectElementAccessor('array', 'blame-upstream', BlameUpstream);
Publishers.prototype.buildPublisher = util.generateKeyedObjectElementAccessor('array', 'build-publisher', BuildPublisher);
Publishers.prototype.campfile = util.generateKeyedObjectElementAccessor('array', 'campfire', Campfire);
Publishers.prototype.checkStyle = util.generateKeyedObjectElementAccessor('array', 'checkstyle', CheckStyle);
Publishers.prototype.cifs = util.generateKeyedObjectElementAccessor('array', 'cifs', Cifs);
Publishers.prototype.cigame = util.generateKeyedObjectElementAccessor('array', 'cigame', Cigame);
Publishers.prototype.cloneWorkspace = util.generateKeyedObjectElementAccessor('array', 'clone-workspace', CloneWorkspace);
Publishers.prototype.cloverphp = util.generateKeyedObjectElementAccessor('array', 'cloverphp', Cloverphp);
Publishers.prototype.cobertura = util.generateKeyedObjectElementAccessor('array', 'cobertura', Cobertura);
Publishers.prototype.conditionalPublisher = util.generateKeyedArrayElementAccessor('array', 'conditional-publisher', constructConditionalPublisherArray);
Publishers.prototype.copyToMaster = util.generateKeyedObjectElementAccessor('array', 'copy-to-master', CopyToMaster);
Publishers.prototype.cppcheck = util.generateKeyedObjectElementAccessor('array', 'cppcheck', CppCheck);

module.exports = Publishers;
