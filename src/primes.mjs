// primes.mjs

/**
 * Checks whether a given number is prime.
 * @param {number} n - The number to check.
 * @returns {Promise<boolean>} - Resolves to true if prime, otherwise false.
 */
export async function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

/**
 * Returns an array of all prime numbers less than a given threshold.
 * @param {number} threshold - The upper limit for prime numbers.
 * @returns {Promise<number[]>} - Resolves to an array of prime numbers.
 */
export async function getPrimes(threshold) {
    const primes = [];
    for (let i = 2; i < threshold; i++) {
        if (await isPrime(i)) primes.push(i);
    }
    return primes;
}

/**
 * Generator function that yields prime numbers indefinitely.
 * @yields {number} - The next prime number.
 */
export function* iterPrimes() {
    let num = 2;
    const primes = [];
    while (true) {
        if (primes.every(p => num % p !== 0)) {
            primes.push(num);
            yield num;
        }
        num++;
    }
}
