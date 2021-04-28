// JavaScript Document

var assert = require('chai').assert;

var validemail = require('../app/validateemail')
var validzip = require('../app/validatezipcode')
var replacechar = require('../app/replacechar')


//note: zip code is 5 digits, not including 99999
//test parameter		valid
//456212				false
//50312					true
//jfjsk					false
//99999					false
//5						false
//00000					true

describe("Test valid zip", function(){
	it('test valid zip', function () {
		assert.isTrue(validzip("50000"))
	});

	it('should not be too long', function () {
		assert.isFalse(validzip("456212"))
	});

	it('should not be letters', function () {
		assert.isFalse(validzip("jfjsk"))
	});

	it('should not be 99999', function () {
		assert.isFalse(validzip("99999"))
	});

	it('should not be single number', function () {
		assert.isFalse(validzip("5"))
	});

	it('00000 should be ok', function () {
		assert.isTrue(validzip("00000"))
	});
});

//email is not more than 254 characters before @. 2-5 characters for top level domain.
//254 characters for host name

//tet parameter		        valid
//itibe@dmacc.edu			true
//@dmacc.edu				false
//itibe@dmacc.eduuuuuuu		false
//itibe@dmacc				false
//itibe.edu					false
//ITIBE@DMACC.EDU			true


describe("Test valid email", function(){
	it('valid email', function () {
		assert.isTrue(validemail("itibe@dmacc.edu"))
	});

	it('should not be missing name part', function () {
		assert.isFalse(validemail('@dmacc.edu'))
	});
	it('should not have too long of domain name', function () {
		assert.isFalse(validemail("itibe@dmacc.eduuuuuuu"))
	});

	it('should not be missing a server name', function () {
		assert.isFalse(validemail("itibe.edu"))
	});
	it('should be ok with capitals', function () {
		assert.isTrue(validemail("ITIBE@DMACC.EDU"))
	});

	it('should not be missing period', function () {
		assert.isFalse(validemail("itibe@dma"))
	});
});


//should only change <>'/ to a - and not affect other letters
//input					//output
//abcde<				//abcde-
//>bcde					//-bcde
///fsdf					//-fsdf
//'jkl					//-jkl
//abcde					//abcde
//123456				//123456
//123456>				//123456-

describe("Test replace char", function (){

	it('not change ', function () {
		assert.equal("this",replacechar("this"))
	});

	it('should change <', function () {
		assert.equal("abcde-", replacechar("abcde<"))
	});

	it('should change >', function () {
		assert.equal("-bcde", replacechar(">bcde"))
	});

	it('should change /', function () {
		assert.equal("-fsdf",replacechar("/fsdf"))
	});

	it('should change ', function () {
		assert.equal("-jkl", replacechar("'jkl"))
	});

	it('should not change @', function () {
		assert.equal("@abcde", replacechar("@abcde"))
	});

	it('should not effect numbers', function () {
		assert.equal("123456",replacechar("123456"))
	});

	it('should work with numbers', function () {
		assert.equal("123456-",replacechar("123456>"))
	});
});