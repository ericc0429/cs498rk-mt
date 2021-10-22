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

function add( a, b ) {
    return a + b;
}

Function.prototype.memoized = function( arguments ) { // Signature adapted from lecture
    //let values = {};
    var self = this;

    const helper = function () {
        var args = Array.prototype.slice.call( arguments );
        //console.log( args2 )
        //var args = Array.prototype.slice.apply( arguments );
        console.log( args )
        self._values = self._values || {};
        if ( self._values[args] === undefined ) {
            return self._values[args] = self(args);
        }
        return self._values[args]
    }
    return helper( arguments );
}


// TEST CASES

console.log( add( 5, 10 ) );
console.log( add.memoized( 5, 10 ) );

/*
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

//assert(isPrime.memoized(5), "The function works; 5 is prime.")
//assert(isPrime._values[5], "The answer has been cached.");
*/