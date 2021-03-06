/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-182.js
 * @description Object.defineProperties - 'O' is an Array, 'P' is an array index named property, 'P' is boundary value 2^32 + 1 (15.4.5.1 step 4.a)
 */


function testcase() {
        var arr = [];

        Object.defineProperties(arr, {
            "4294967297": {
                value: 100
            }
        });

        return arr.hasOwnProperty("4294967297") && arr.length === 0 && arr[4294967297] === 100;
    }
runTestCase(testcase);
