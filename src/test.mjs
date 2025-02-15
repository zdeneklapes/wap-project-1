import { isPrime, getPrimes, iterPrimes } from "./primes.mjs";

(async () => {
    console.log("Testing isPrime...");
    console.assert(await isPrime(2) === true, "2 should be prime");
    console.assert(await isPrime(4) === false, "4 should not be prime");
    console.assert(await isPrime(13) === true, "13 should be prime");

    console.log("Testing getPrimes...");
    let primes = await getPrimes(10);
    console.assert(JSON.stringify(primes) === "[2,3,5,7]", "Expected [2,3,5,7]");

    console.log("Testing iterPrimes...");
    let gen = iterPrimes();
    console.assert(gen.next().value === 2, "First prime should be 2");
    console.assert(gen.next().value === 3, "Second prime should be 3");
    console.assert(gen.next().value === 5, "Third prime should be 5");

    console.log("All tests passed!");
})();
