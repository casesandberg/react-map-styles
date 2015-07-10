'use strict'



module.exports = (file) ->

  if this && this.cacheable
    this.cacheable()
  
  while isProp = /(is="(.+?)")/.exec(file)
    # The is block that should be replaced. Looks like: `is="message"`
    prop = isProp[1]
    # The name of the value that we want to be returning from the style function.
    elementName = isProp[2]

    # if it is capitalized, set spread
    if elementName[0] is elementName[0].toUpperCase()
      file = file.replace(prop, "{...this.styles().#{ elementName }}")

    # otherwise just give it an inline style
    else
      file = file.replace(prop, "style={ this.styles().#{ elementName } }")

  return file
