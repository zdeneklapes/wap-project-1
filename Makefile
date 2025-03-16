pack: clean
	zip -r xlapes02.zip primes.mjs primes.test.js Makefile README.md jsdoc.json package.json package-lock.json jest.config.js test.sh doc.sh primes-till-1mil.mjs

clean:
	rm -rf docs
	rm -f xlapes02.zip
	rm -rf node_modules
