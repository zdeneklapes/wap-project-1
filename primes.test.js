import {getPrimes, isPrime, iterPrimes} from "./primes.mjs";
import {exec} from "child_process";
import {primesTill1Mil} from "./primes-till-1mil.mjs";
import {describe, expect, test} from "@jest/globals";
import {promisify} from "util";
import {readFileSync} from "fs";

const execPromise = promisify(exec);


describe("Prime Number Functions", () => {
    test("isPrime should correctly identify prime numbers", async () => {
        for (const p of primesTill1Mil) {
            await expect(isPrime(p)).resolves.toBe(true);
        }
    });

    test("isPrime be correctly identified", async () => {
        expect(await isPrime(1001)).toBe(false);
        expect(await isPrime(1009)).toBe(true);
    });

    test("isPrime should handle edge cases", async () => {
        for (let i = 1; i > -10000; i--) {
            await expect(isPrime(i)).resolves.toBe(false);
        }
        // test other types
        await expect(isPrime(NaN)).resolves.toBe(false);
        await expect(isPrime(Infinity)).resolves.toBe(false);
        await expect(isPrime(-Infinity)).resolves.toBe(false);
        await expect(isPrime(true)).resolves.toBe(false);
        await expect(isPrime(false)).resolves.toBe(false);
        await expect(isPrime("hello")).resolves.toBe(false);
        await expect(isPrime([])).resolves.toBe(false);
        await expect(isPrime({})).resolves.toBe(false);
        await expect(isPrime(null)).resolves.toBe(false);
        await expect(isPrime(undefined)).resolves.toBe(false);
        await expect(isPrime(() => {
        })).resolves.toBe(false);
        await expect(isPrime(function () {
        })).resolves.toBe(false);
        await expect(isPrime(new Date())).resolves.toBe(false);
        await expect(isPrime(new Error())).resolves.toBe(false);
        await expect(isPrime(new Map())).resolves.toBe(false);
    });

    test("getPrimes should return correct prime numbers up to a limit", async () => {
        await expect(getPrimes(10)).resolves.toEqual([2, 3, 5, 7]);
        await expect(getPrimes(20)).resolves.toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
        await expect(getPrimes(100)).resolves.toEqual([
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
            31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
            73, 79, 83, 89, 97
        ]);
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

    test("iterPrimes example", () => {
        for (let prime of iterPrimes()) {
            if (prime > 1000) {
                expect(prime).toBe(1009);
                break;
            }
        }
    });

    test("iterPrimes supports multiple independent iterators", () => {
        const gen1 = iterPrimes();
        const gen2 = iterPrimes();

        // Both iterators should start at the beginning.
        expect(gen1.next().value).toBe(2);
        expect(gen1.next().value).toBe(3);
        expect(gen1.next().value).toBe(5);

        expect(gen2.next().value).toBe(2);
        expect(gen2.next().value).toBe(3);
        expect(gen2.next().value).toBe(5);
    });

    test("getPrimes can compute one million primes", async () => {
        const firstPrimeAfter1Million = 1000003;
        const primes = await getPrimes(firstPrimeAfter1Million + 1);
        for (let i = 0; i < primes.length; i++) {
            expect(primes[i]).toBe(primesTill1Mil[i]);
        }
    });

    test("getPrimes primes before 2_000_000", async () => {
        const primes = [1999853, 1999859, 1999867, 1999871, 1999889, 1999891, 1999957, 1999969, 1999979, 1999993];
        const result = await getPrimes(2000000);
        const resultLast5 = result.slice(-primes.length);
        for (let i = 0; i < resultLast5.length; i++) {
            expect(resultLast5[i]).toBe(primes[i]);
        }
    });

    test("Run ukazkovy.mjs", async () => {
        const { stdout, stderr } = await execPromise("node ./ukazkovy.mjs");
        expect(stdout).toBe(readFileSync("./ukazkovy-vystup.txt", "utf8"));
    });
});



