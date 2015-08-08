/**
 * This sample demonstrates very simple Jenkins job configuration
 */

var Jobs = require('jenkins-job-builder-js');

var simple = new Jobs();

simple
  .job()
    .name('very-simple')
    .description('Very simple example')
    .projectType('freestyle')
    .builders()
      .shell('touch very-simple.txt');

console.log(JSON.stringify(simple.array));
