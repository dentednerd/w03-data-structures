const expect = require('chai').expect;
const stacksPseudo = require('../stacksPseudo');

describe('stacksPseudo', function () {
  it('is a function', function () {
    expect(stacksPseudo).to.be.a('function');
  });
    it('should push properties into a stack', function () {
      const colours = new stacksPseudo();
      colours.push('red');
      colours.push('orange');
      colours.push('yellow');
      expect(colours.stack).to.eql({0: 'red', 1: 'orange', 2: 'yellow'});
  });
    it('should remove properties with the pop function', function() {
    const colours = new stacksPseudo();
    colours.push('red');
    colours.push('orange');
    colours.push('yellow');
    colours.pop();
    expect(colours.stack).to.eql({0: 'red', 1: 'orange'});
  });
  it('should push values with the correct index after items have been popped', function() {
    const colours = new stacksPseudo();
    colours.push('red');
    colours.push('orange');
    colours.push('yellow');
    colours.pop();  
    colours.push('green');
    expect(colours.stack).to.eql({0: 'red', 1: 'orange', 2: 'green'});
  });
});