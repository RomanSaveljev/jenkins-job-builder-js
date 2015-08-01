"use strict";

var util = require('../../../misc/util.js');

uppableObjectProxy(ConditionalPublisher)
primitive(util, ConditionalPublisher, 'condition-kind')
primitive(util, ConditionalPublisher, 'condition-expression')
primitive(util, ConditionalPublisher, 'condition-worst')
primitive(util, ConditionalPublisher, 'condition-best')
primitive(util, ConditionalPublisher, 'condition-command')
primitive(util, ConditionalPublisher, 'condition-filename')
primitive(util, ConditionalPublisher, 'condition-basedir')
primitive(util, ConditionalPublisher, 'on-evaluation-failure')
ConditionalPublisher.prototype.action = function(value) {
  if (value === undefined) {
    // always create a fresh array to enforce declarative code style
    this.obj.action = [];
    // avoid circular dependency
    var Publishers = require('../publishers.js');
    return new Publishers(this, this.obj.action);
  } else {
    throw 'TODO: setter is not implemented';
  }
}
