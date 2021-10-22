

const memoIsPrime = () => {
    // Memoized values property.
    let values = {};
    
    // Returned inner function that handles primes
    return ( n ) => {
        
        // If the answer has already been computed and stored in values, output directly from values.
        if ( n in values ) {
            // For Debugging Purposes
            //console.log( "Memoization Used." );
            return values[n];
        }

        // Otherwise, do the computation and store into values.
        else {

            for ( let i = 2; i < n; i++ ) {
                // If number is divisible by any number between [2, n), it isn't prime, so return false.
                if ( n % i === 0 ) {
                    values[n] = false; // Store false value in values.
                    return false;
                }
            } // End FOR

            // At this point, we know it has to be prime, as every number less than itself doesn't evenly divide into it.
            values[n] = n > 1; // Easy way to handle case that n=1; n > 1 returns true (is prime), except when n=1, as 1 isn't prime.
            return n > 1;
        } // End ELSE

    } // End Inner Function

}

const memoizedIsPrime = memoIsPrime();

/*
// TEST CASES
console.log( memoizedIsPrime( 1 ) ); // Unique case
console.log( memoizedIsPrime( 14 ) ); 
console.log( memoizedIsPrime( 41 ) );
console.log( memoizedIsPrime( 43 ) );
//console.time("W/o memo")
console.log( memoizedIsPrime( 64 ) );
//console.timeEnd("W/o memo")
//console.time("W/ memo")
console.log( memoizedIsPrime( 64 ) ); // Memoized (hopefully)
//console.timeEnd("W/ memo")
console.log( memoizedIsPrime( 97 ) );
console.log( memoizedIsPrime( 97 ) ); // Memoized (hopefully)
*/