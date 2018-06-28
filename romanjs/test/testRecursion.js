const assert = require('assert');
const roman = require('../appRecursion');

describe('Converts decimals to roman number', function() {

    it('1000 is M', function() {
        assert.equal(roman(1000), 'M');
        assert.equal(roman(2000), 'MM');
        assert.equal(roman(3000), 'MMM');
        assert.equal(roman(4000), 'MMMM');
    });

    it('900 is CM', function() {
        assert.equal(roman(900), 'CM');
        assert.equal(roman(1900), 'MCM');
        assert.equal(roman(2900), 'MMCM');
    });

    it('500 is D', function() {
        assert.equal(roman(500), 'D');
        assert.equal(roman(1500), 'MD');
        assert.equal(roman(3500), 'MMMD');
    });

    it('400 is CD', function() {
        assert.equal(roman(400), 'CD');
        assert.equal(roman(1400), 'MCD');
        assert.equal(roman(2400), 'MMCD');
    });

    it('100 is C', function() {
        assert.equal(roman(100), 'C');
        assert.equal(roman(200), 'CC');
        assert.equal(roman(300), 'CCC');
        assert.equal(roman(600), 'DC');
        assert.equal(roman(700), 'DCC');
        assert.equal(roman(800), 'DCCC');
        assert.equal(roman(1100), 'MC');
        assert.equal(roman(2300), 'MMCCC');
        assert.equal(roman(3600), 'MMMDC');
    });

    it('90 is XC', function() {
        assert.equal(roman(90), 'XC');
        assert.equal(roman(190), 'CXC');
        assert.equal(roman(1290), 'MCCXC');
        assert.equal(roman(1790), 'MDCCXC');
    });

    it('50 is L', function() {
        assert.equal(roman(50), 'L');
        assert.equal(roman(150), 'CL');
        assert.equal(roman(750), 'DCCL');
        assert.equal(roman(1250), 'MCCL');
    });

    it('40 is XL', function() {
        assert.equal(roman(40), 'XL');
        assert.equal(roman(140), 'CXL');
        assert.equal(roman(740), 'DCCXL');
        assert.equal(roman(1240), 'MCCXL');
    });

    it('10 is X', function() {
        assert.equal(roman(10), 'X');
        assert.equal(roman(20), 'XX');
        assert.equal(roman(30), 'XXX');
        assert.equal(roman(60), 'LX');
        assert.equal(roman(70), 'LXX');
        assert.equal(roman(80), 'LXXX');
    });

    it('IX is 9', function() {
        assert.equal(roman(9), 'IX');
        assert.equal(roman(19), 'XIX');
        assert.equal(roman(129), 'CXXIX');
        assert.equal(roman(999), 'CMXCIX');
    });

    it('IV is 4', function() {
        assert.equal(roman(4), 'IV');
        assert.equal(roman(44), 'XLIV');
        assert.equal(roman(84), 'LXXXIV');
        assert.equal(roman(104), 'CIV');
        assert.equal(roman(2024), 'MMXXIV');
    });

    it('V is 5', function() {
        assert.equal(roman(5), 'V');
        assert.equal(roman(15), 'XV');
        assert.equal(roman(75), 'LXXV');
        assert.equal(roman(125), 'CXXV');
        assert.equal(roman(995), 'CMXCV');
    });

    it('I is 1', function() {
        assert.equal(roman(1), 'I');
        assert.equal(roman(2), 'II');
        assert.equal(roman(3), 'III');
        assert.equal(roman(11), 'XI');
        assert.equal(roman(112), 'CXII');
        assert.equal(roman(3333), 'MMMCCCXXXIII');
    });

    it('0 is nothing', function() {
        assert.equal(roman(0), '');
    });

});
