// primes.mjs
const primeCache = new Set(); // Stores previously computed primes

/**
 * Checks whether a given number is prime.
 * @param {number} n - The number to check.
 * @returns {Promise<boolean>} - Resolves to true if prime, otherwise false.
 */
export async function isPrime(n) {
    // if the type is not a number, return false
    if (typeof n !== "number" || Number.isNaN(n) || !Number.isFinite(n)) {
        return false;
    }
    if (n < 2) return false;
    if (primeCache.has(n)) return true; // Return immediately if already known
    if (n === 2) {
        primeCache.add(2);
        return true;
    }
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    primeCache.add(n);
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
        if (await isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

/**
 * Generator function that yields prime numbers indefinitely, using cached primes.
 * @yields {number} - The next prime number.
 */
export function* iterPrimes() {
    // Yield all cached primes first, ensuring they are in ascending order.
    const sortedPrimes = [...primeCache].sort((a, b) => a - b);
    for (const p of sortedPrimes) {
        yield p;
    }

    // Continue generating new primes after the cached ones
    let num = sortedPrimes.length > 0 ? sortedPrimes[sortedPrimes.length - 1] + 1 : 2;
    while (true) {
        if (isPrime(num)) {
            primeCache.add(num);
            yield num;
        }
        num++;
    }
}
