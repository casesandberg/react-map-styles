'use strict';
module.exports = function(file) {
  var elementName, isProp, prop;
  while (isProp = /(is="(.+?)")/.exec(file)) {
    prop = isProp[1];
    elementName = isProp[2];
    if (elementName[0] === elementName[0].toUpperCase()) {
      file = file.replace(prop, "{...this.styles()." + elementName + "}");
    } else {
      file = file.replace(prop, "style={ this.styles()." + elementName + " }");
    }
  }
  return file;
};