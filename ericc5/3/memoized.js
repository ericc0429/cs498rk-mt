var assert = require('assert');

// isPrime() function from isPrime.js:
function isPrime( n ) {
    // Handle case where n=1, 1 is not prime.
    if ( n === 1 ) return false;

    // Loop, checking modulo of every number between [2, n).
    for ( let i = 2; i < n; i++ ) {
        if ( n % i === 0 ) return false; // If divisible by any i, return false as it is not prime.
    }
    return true; // At this point, every value less than n has been checked, so we can safely assume n is prime.
}

Function.prototype.memoized = function() {
    // Memoization stored in _values
    this._values = this._values || {};

    // Slice function arguments to get index info
    var i = Array.prototype.slice.call( arguments );
  
    // If result is already stored in _values, return it
    if ( this._values[i] !== undefined ) {
        // Debug
        // console.log( "Memoization used" );
        return this._values[i];
    }
    // If result wasn't found, use function to calculate it, and save it to _values and return it
    else {
        var value = this.apply( this, arguments );
        return this._values[i] = value;
    }
  };

/*
// TEST CASES

console.log( isPrime.memoized( 1 ) ); // Unique case
console.log( isPrime.memoized( 14 ) ); 
console.log( isPrime.memoized( 41 ) );
console.log( isPrime.memoized( 43 ) );
//console.time("W/o memo")
console.log( isPrime.memoized( 64 ) );
//console.timeEnd("W/o memo")
//console.time("W/ memo")
console.log( isPrime.memoized( 64 ) ); // Memoized (hopefully)
//console.timeEnd("W/ memo")
console.log( isPrime.memoized( 97 ) );
console.log( isPrime.memoized( 97 ) ); // Memoized (hopefully)

assert(isPrime.memoized(5), "The function works; 5 is prime.")
assert(isPrime._values[5], "The answer has been cached.");
*/