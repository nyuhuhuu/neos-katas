const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const Calc = require('./index');

chai.use(chaiAsPromised);
const assert = chai.assert;
chai.should();

describe('Calculates total price with discount', function() {

    it('Takes 2 inputs', function() {
        assert.throws(() => { return new Calc(); }, Error);
    });

});
