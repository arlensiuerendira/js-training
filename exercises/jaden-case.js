'use strict'


/* Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(string){
	let newString = string.toUpperCase();
	let jadenString = [];

	if (string[0] !== " "){
		jadenString[0] = newString[0];
	} else {
		jadenString[0] = string[0];
	}

	for (let i = 1; i < string.length; i++){
		if (string[i] === " " && ((i + 1) < string.length)){
			jadenString[i] = string[i];
			jadenString[i+1] = newString[i+1];
		}
		else {
			if(string[i] !== " " && string[i-1] !== " "){
				jadenString[i] = string[i];
			}
		}
	}

	return jadenString.join("");
		
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('there is something weird.'), 'There Is Something Weird.')
assert.strictEqual(jadenCase('i am important.'), 'I Am Important.')
assert.strictEqual(jadenCase('1, 2, 3 ... bam !'), '1, 2, 3 ... Bam !')
// End of tests */
