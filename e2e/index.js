var assert = require("assert");
var toolsuite = require("../");


//simple arrays
var basicNumberArray = [ 0, 9, 10, 99, 1000, -100, -0.5, -1000.5, 1000.5 ];
var basicNumberArrayWithStringNumbers = [ "999", 0, 9, 10, 99, 1000, -100, -0.5, "-1000.5", "1000.5" ];
var basicNumberArrayWithStringNumbersAndOtherTypes = [ "999", 0, 9, "e", "test", undefined, null, Array, String, Date, 10, 99, 1000, -100, -0.5, "-1000.5", "1000.5" ];
var noNumberSimpleArray = ["e", "test", null, undefined];

//object arrays
var objectArraySimple = [ { v: 9 }, { v: -10.2 }, { v: -10 }, { v: 9.2 } ];
var objectArraySimpleNotAllValues = [ { a: 9 }, { a: -10.2 }, { v: -10 }, { v: 9.2 } ];
var objectArrayWithNoSearchKey = [ { a: 9 }, { a: 93 }, { a: 92 }, { a: 91 } ];
var objectArrayWithTypes = [ { v: undefined }, { v: null }, { v: String }, { v: function(){} }, { v: 9 }, { v: -9 } ];

//all
var emptyArray = [];

describe("getMinValueFromArray - Basic Testing", function(){


    it("normal number array", function(){
        let result = toolsuite.getMinValueFromArray(basicNumberArray);
        assert.equal(result.value, -1000.5);
    });

    
    it("normal number array with string numbers", function(){
        let result = toolsuite.getMinValueFromArray(basicNumberArrayWithStringNumbers);
        assert.equal(result.value, -1000.5);
    });

    it("normal number array with string numbers and other types", function(){
        let result = toolsuite.getMinValueFromArray(basicNumberArrayWithStringNumbersAndOtherTypes);
        assert.equal(result.value, -1000.5);
    });

    it("empty array", function(){
        let result = toolsuite.getMinValueFromArray(emptyArray);
        assert.equal(result, null);
    });

    it("no numbers in simple array", function(){
        let result = toolsuite.getMinValueFromArray(noNumberSimpleArray);        
        assert.equal(result, null);
    });
});

describe("getMaxValueFromArray - Basic Testing", function(){


    it("normal number array", function(){
        let result = toolsuite.getMaxValueFromArray(basicNumberArray);
        assert.equal(result.value, 1000.5);
    });

    it("normal number array with string numbers", function(){
        let result = toolsuite.getMaxValueFromArray(basicNumberArrayWithStringNumbers);
        assert.equal(result.value, 1000.5);
    });

    it("normal number array with string numbers and other types", function(){
        let result = toolsuite.getMaxValueFromArray(basicNumberArrayWithStringNumbersAndOtherTypes);
        assert.equal(result.value, 1000.5);
    });

    it("empty array", function(){
        let result = toolsuite.getMaxValueFromArray(emptyArray);
        assert.equal(result, null);
    });

    it("no numbers in simple array", function(){
        let result = toolsuite.getMaxValueFromArray(noNumberSimpleArray);        
        assert.equal(result, null);
    });

});

describe("getMinValueFromObjectArray - Basic Testing", function(){


    it("normal object array with numbers in key: v", function(){
        let result = toolsuite.getMinValueFromObjectArray(objectArraySimple, "v");
        assert.equal(result.value, -10.2);
    });

    it("empty array", function(){
        let result = toolsuite.getMinValueFromObjectArray(emptyArray, "v");
        assert.equal(result, null);
    });

    it("norml object array with not all numbers in key v", function(){
        let result = toolsuite.getMinValueFromObjectArray(objectArraySimpleNotAllValues, "v");
        assert.equal(result.value, -10);
    });

    it("norml object array with no key v", function(){
        let result = toolsuite.getMinValueFromObjectArray(objectArrayWithNoSearchKey, "v");
        assert.equal(result, null);
    });

    it("norml object array with no key v with different types", function(){
        let result = toolsuite.getMinValueFromObjectArray(objectArrayWithTypes, "v");
        assert.equal(result.value, -9);
    });
});

describe("getMaxValueFromObjectArray - Basic Testing", function(){


    it("normal object array with numbers in key: v", function(){
        let result = toolsuite.getMaxValueFromObjectArray(objectArraySimple, "v");
        assert.equal(result.value, 9.2);
    });

    it("empty array", function(){
        let result = toolsuite.getMaxValueFromObjectArray(emptyArray, "v");
        assert.equal(result, null);
    });

    it("norml object array with not all numbers in key v", function(){
        let result = toolsuite.getMaxValueFromObjectArray(objectArraySimpleNotAllValues, "v");
        assert.equal(result.value, 9.2);
    });

    it("norml object array with no key v", function(){
        let result = toolsuite.getMaxValueFromObjectArray(objectArrayWithNoSearchKey, "v");
        assert.equal(result, null);
    });

    it("norml object array with no key v with different types", function(){
        let result = toolsuite.getMaxValueFromObjectArray(objectArrayWithTypes, "v");
        assert.equal(result.value, 9);
    });
});

describe("intBreakDown - Basic Testing", function(){

    it("default overflow", function(){
        let result = toolsuite.intBreakDown(720, 360);
        assert.equal(result, 0);
    });

    it("lower then zero", function(){
        let result = toolsuite.intBreakDown(-180, 360);
        assert.equal(result, 180);
    });
});