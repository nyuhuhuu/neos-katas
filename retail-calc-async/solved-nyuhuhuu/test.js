const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const Calc = require('./index');

chai.use(chaiAsPromised);
const assert = chai.assert;
chai.should();

describe('Calculates total price with discount', function() {

    it('Takes 2 input', function() {
        assert.throws(() => { return new Calc(); }, Error);
        assert.throws(() => { return new Calc(5); }, Error);
        assert.throws(() => { return new Calc(5, 1.2, 'NV'); }, Error);
        assert.doesNotThrow(() => { return new Calc(5, 1.2); }, Error);
    });

    it('Calculates total with no discount', function(done) {
        (new Calc(5, 1.2)).getTotal().should.eventually.equal(6).notify(done);
    });

    it('Calculates total with 3% discount', function(done) {
        (new Calc(50, 20.5)).getTotal().should.eventually.equal(994.25).notify(done);
    });

    it('Calculates total with 5% discount', function(done) {
        (new Calc(100, 60)).getTotal().should.eventually.equal(5700).notify(done);
    });

    it('Calculates total with 7% discount', function(done) {
        (new Calc(120, 60)).getTotal().should.eventually.equal(6696).notify(done);
    });

    it('Calculates total with 10% discount', function(done) {
        (new Calc(2000, 14.5)).getTotal().should.eventually.equal(26100).notify(done);
    });

    it('Calculates total with 15% discount', function(done) {
        (new Calc(45, 1500)).getTotal().should.eventually.equal(57375).notify(done);
    });
});
