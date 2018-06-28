const assert = require('assert');
const roman = require('./app');

describe('Converts decimals to roman number', function() {

    it('1000 is M', function() {
        assert.equal(roman(1000), 'M');
    });

    it('0 is nothing', function() {
        assert.equal(roman(0), '');
    });

});
