var expect = chai.expect;

describe('Test', function () {
    it('should work', function () {
        expect($('body')).to.have.class('no-js');
    });
});