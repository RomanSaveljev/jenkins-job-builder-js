"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(ConditionalStep)
primitive(util, ConditionalStep, 'condition-kind')
primitive(util, ConditionalStep, 'condition-expression')
primitive(util, ConditionalStep, 'condition-string1')
primitive(util, ConditionalStep, 'condition-string2')
primitive(util, ConditionalStep, 'condition-case-insensitive')
primitive(util, ConditionalStep, 'condition-worst')
primitive(util, ConditionalStep, 'condition-best')
primitive(util, ConditionalStep, 'condition-command');
primitive(util, ConditionalStep, 'condition-filename')
primitive(util, ConditionalStep, 'condition-basedir')
primitive(util, ConditionalStep, 'condition-operand')
primitive(util, ConditionalStep, 'on-evaluation-failure')
// necessary duplication
ConditionalStep.prototype.steps = function(value) {
  if (value === undefined) {
    // always create a fresh array to enforce declarative code style
    this.obj.steps = [];
    // avoid circular dependency
    var Builders = require('../builders.js');
    return new Builders(this, this.obj.steps);
  } else {
    throw 'TODO: setter is not implemented';
  }
}
