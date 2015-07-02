expect = require('chai').expect
context = require('../lib/react-map-styles')


describe 'CSS Context Loader', ->

  it 'should ignore anything that doesnt have `is`', ->

    before = '<div></div>'
    after = '<div></div>'

    expect(context(before)).to.equal(after)



  it 'should translate `is` to inline style on html elements', ->

    before = '<div is="conversationColumn"></div>'
    after = '<div style={ this.styles().conversationColumn }></div>'

    expect(context(before)).to.equal(after)



  it 'should translate `is` to spread on custom components', ->

    before = '<Custom is="ConversationColumn">'
    after = '<Custom {...this.styles().ConversationColumn}>'

    expect(context(before)).to.equal(after)