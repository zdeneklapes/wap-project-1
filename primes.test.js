import { isPrime, getPrimes, iterPrimes } from "./primes.mjs";
import { expect, describe, test } from "@jest/globals";

describe("Prime Number Functions", () => {
    test("isPrime should correctly identify prime numbers", async () => {
        await expect(isPrime(2)).resolves.toBe(true);
        await expect(isPrime(4)).resolves.toBe(false);
        await expect(isPrime(13)).resolves.toBe(true);
        await expect(isPrime(15)).resolves.toBe(false);
        await expect(isPrime(17)).resolves.toBe(true);
        await expect(isPrime(19)).resolves.toBe(true);
        await expect(isPrime(1000000007)).resolves.toBe(true);
    });

    test("getPrimes should return correct prime numbers up to a limit", async () => {
        await expect(getPrimes(10)).resolves.toEqual([2, 3, 5, 7]);
        await expect(getPrimes(20)).resolves.toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
        await expect(getPrimes(100)).resolves.toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
    });

    test("iterPrimes should generate prime numbers sequentially", () => {
        const gen = iterPrimes();
        expect(gen.next().value).toBe(2);
        expect(gen.next().value).toBe(3);
        expect(gen.next().value).toBe(5);
        expect(gen.next().value).toBe(7);
        expect(gen.next().value).toBe(11);
        expect(gen.next().value).toBe(13);
        expect(gen.next().value).toBe(17);
        expect(gen.next().value).toBe(19);
        expect(gen.next().value).toBe(23);
        expect(gen.next().value).toBe(29);
    });
});
