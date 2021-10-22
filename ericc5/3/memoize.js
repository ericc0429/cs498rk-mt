

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

/*
function memoize(func) {
    var memo = {};
    var slice = Array.prototype.slice;
  
    return function() {
      var args = slice.call(arguments);
  
      if (args in memo)
        return memo[args];
      else
        return (memo[args] = func.apply(this, args));
  
    }
}
  
  function fib(n) {
    if (n <= 1) return 1;
    return fib(n - 1) + fib(n - 2);
  }
  
isPrime = memoize();
  
  console.log(fib(100));
*/

const memoize = (fn) => {
    let cache = {};
      return (...args) => {
          let n = args[0];
          if (n in cache) {
              console.log('Fetching from cache');
              return cache[n];
          }
          else {
              console.log('Calculating result');
              let result = fn(n);
              cache[n] = result;
              return result;
          }
      }
  }

const 

var isPrime = (function(num) {
    
}).memoize();

assert(isPrime(17),"17 is prime");