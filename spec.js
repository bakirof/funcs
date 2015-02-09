var expect = chai.expect;
describe('Test', function () {

    it('should expect css property "width" from class "main"', function () {
        expect($('.main')).to.have.css('width', '900px');
    });
    it('should expect css property "height" from class "main"', function () {
        expect($('.main')).to.have.css('height', '60px');
    });
    it('should check whether the added class', function () {
        expect($('.first')).to.have.class('sub');
    });

    it('Should check whether the class switching', function () {
        expect($('.first')).to.have.class('sub_1');
        expect($('.first')).to.not.have.class('sub_2');
        expect($('.first')).to.have.class('sub_3');
    });
    it('should check whether the deleted class', function () {
        expect($('.second')).to.not.have.class('will-deleted');
    });
    it('should inserts the specified content as the last child of each element', function () {
        expect($('.second_child').parent().hasClass('second')).to.deep.equal(true);
        expect($('.second_child').prev()).to.have.html('and more content');
    });
    it('should inserts the specified content as the first child of each element', function () {
        expect($('.second_child').parent().hasClass('second')).to.equal(true);
        expect($('.second_child_2').next()).to.have.html('and more content');
    });
    it('should wrap selector into passed parameter', function () {
        expect($('.main').parent().hasClass('black')).to.equal(true);
    });
});