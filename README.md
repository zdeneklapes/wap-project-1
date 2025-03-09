# WAP 1st Project

## Task
The goal of this project is to create the `primes.mjs` library, which provides basic operations for working with prime numbers in JavaScript. The library includes:
- `isPrime(n)`: An asynchronous function that determines whether a number is prime.
- `getPrimes(threshold)`: An asynchronous function that returns an array of all prime numbers smaller than `threshold`.
- `iterPrimes()`: A generator that iterates over all prime numbers.

The library stores previously computed prime numbers until the program terminates.

## Tests
The project includes the `test.sh` script, which:
- Runs tests: `./test.sh`
- Installs dependencies: `./test.sh install`

Tests are executed using `Jest`.

## Documentation
Documentation is generated using `JSDoc`. The `doc.sh` script is used to generate the documentation.

## Submission
The project must be submitted as `login.zip`, containing:
- `primes.mjs`
- `test.sh`
- `doc.sh`
- Any additional required files

## Grading Criteria
- **Correct functionality** (5 points)
- **Code readability and documentation quality** (3 points)
- **Quality of test cases** (2 points)

Late submission, non-functional code, or plagiarism will result in a score of 0.

## Usage

### Running Tests
```bash
./test.sh install
./test.sh
```

### Generating documentation
```bash
./doc.sh
```

### Archive project
```bash
make pack
```

### Clean
```bash
make clean
```
