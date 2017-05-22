const expect = require('chai').expect;
const queuesFunc = require('../queuesFunc');

describe('queuesFunc', function () {
  it('is a function', function () {
    expect(queuesFunc).to.be.a('function');
  });
    it('should push properties into a queue', function () {
      const colours = queuesFunc();
      colours.push('red');
      colours.push('orange');
      colours.push('yellow');
      expect(colours.queue).to.eql({0: 'red', 1: 'orange', 2: 'yellow'});
  });
    it('should remove properties with the shift function', function() {
    const colours = queuesFunc();
    colours.push('red');
    colours.push('orange');
    colours.push('yellow');
    colours.shift();
    expect(colours.queue).to.eql({1: 'orange', 2: 'yellow'});
  });
  it('should push values with the correct index after items have been shifted', function() {
    const colours = queuesFunc();
    colours.push('red');
    colours.push('orange');
    colours.push('yellow');
    colours.shift();  
    colours.push('green');
    expect(colours.queue).to.eql({1: 'orange', 2: 'yellow', 3: 'green'});
  });
});