var expect = require("chai").expect;
var fib = require("../src/fibonnaci");

describe('Fibonacci', function() {
    it('should return [0] on the first iteration', function() {
        expect(fib(1)).to.eql([0]);
    });

    it('should return [0,1] on the first iteration', function() {
        expect(fib(2)).to.eql([0,1]);
    });

    it('should return [0,1,1] on the first iteration', function() {
        expect(fib(3)).to.eql([0,1,1]);
    });

    it('should return [0,1,1,2] on the first iteration', function() {
        expect(fib(4)).to.eql([0,1,1,2]);
    });

    it('should return [0,1,1,2,3,5,8,13,21] on the first iteration', function() {
        expect(fib(9)).to.eql([0,1,1,2,3,5,8,13,21]);
    });
});
