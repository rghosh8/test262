// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * When String.prototype.charCodeAt(pos) calls first calls ToString, giving it the this value as its argument
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.5_String.prototype.charCodeAt/S15.5.4.5_A4.js
 * @description Change toString function, it trow exception, and call charCodeAt()
 */

var __obj={
    valueOf:1,
    toString:function(){throw 'intostring'},
    charCodeAt:String.prototype.charCodeAt
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
  var x = __obj.charCodeAt();
  $FAIL('#1:  "var x = __obj.charCodeAt()" lead to throwing exception');
} catch (e) {
  if (e !== 'intostring') {
    $ERROR('#1.1: Exception === \'intostring\'. Actual: exception ==='+e ); 
  }
}
//
//////////////////////////////////////////////////////////////////////////////
