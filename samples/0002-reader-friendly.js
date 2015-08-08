/**
 * This sample is the same simple Jenkins job coded in less dense way.
 * Some may find it more palatable.
 */

var Jobs = require('jenkins-job-builder-js');

var simple = new Jobs();

var job = simple.job();

job
  .name('very-simple')
  .description('Very simple example')
  .projectType('freestyle');

var builders = job.builders();

builders
  .shell('touch very-simple.txt');

console.log(JSON.stringify(simple.array));

