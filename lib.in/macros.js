macro uppableObjectProxy {
  rule {
    ($anObject)
  } => {
    var $anObject = function(upper, obj) {
      this.upper = upper;
      this.obj = obj;
    };
    $anObject.prototype.up = function() {
      return this.upper;
    }
    $anObject.prototype.and = $anObject.prototype.up;
    module.exports = $anObject;
  }
}
export uppableObjectProxy;

macro primitiveArray {
  rule {
    ($anUtil, $anObject, $aProperty)
  } => {
    $anObject.prototype[$anUtil.camelize($aProperty)] = function(value) {
      return $anUtil.primitiveArrayAccessor.apply(this, [$aProperty, value]);
    }
  }
}
export primitiveArray;

macro objectArray {
  rule {
    ($anUtil, $anObject, $aProperty, $aConstructor)
  } => {
    $anObject.prototype[$anUtil.camelize($aProperty)] = function(value) {
      return $anUtil.objectArrayAccessor.apply(this, [$aProperty, $aConstructor, value]);
    }
  }
}
export objectArray;

macro primitive {
  rule {
    ($anUtil, $anObject, $aProperty)
  } => {
    $anObject.prototype[$anUtil.camelize($aProperty)] = function(value) {
      return $anUtil.primitiveAccessor.apply(this, [$aProperty, value]);
    }
  }
}
export primitive;
