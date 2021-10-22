function isPrime( n ) {
    // Handle case where n=1, 1 is not prime.
    if ( n === 1 ) return false;

    // Loop, checking modulo of every number between [2, n).
    for ( let i = 2; i < n; i++ ) {
        if ( n % i === 0 ) return false; // If divisible by any i, return false as it is not prime.
    }
    return true; // At this point, every value less than n has been checked, so we can safely assume n is prime.
}