docs:
	npx jsdoc -c jsdoc.json

test:
	node test.js

ukazka:
	node src/ukázkový.mjs

pack:
	zip -r xlapes02.zip src Makefile README.md jsdoc.json

clean:
	rm -rf docs
	rm -f xlapes02.zip
