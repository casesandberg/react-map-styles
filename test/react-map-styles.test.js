'use strict';

const expect = require('chai').expect;
const context = require('../lib/react-map-styles');

describe('CSS Context Loader', () => {
  it('should ignore anything that doesnt have `is`', () => {
    const before = '<div></div>';
    const after = '<div></div>';
    expect(context(before)).to.equal(after);
  });

  ['"', "'"].forEach(quote => {
    let quoteType = quote === "'" ? 'Single' : 'Double';
    describe(quoteType + "-quoted attributes", () => {

      it('should translate `is` to inline style on html elements', () => {
        const before = "<div is=" + quote + "conversationColumn" + quote + "></div>";
        const after = '<div style={ this.styles().conversationColumn }></div>';
        return expect(context(before)).to.equal(after);
      });

      it('should translate `is` to spread on custom components', () => {
        const before = "<Custom is=" + quote + "ConversationColumn" + quote + ">";
        const after = '<Custom {...this.styles().ConversationColumn}>';
        return expect(context(before)).to.equal(after);
      });
    });
  });
});
