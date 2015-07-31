REPORTER = nyan
MOCHA = ./node_modules/.bin/mocha

.PHONY: test-all cov-all create-tests

test-all:
	@NODE_ENV=test $(MOCHA) \
		--reporter $(REPORTER) --recursive

cov-all:
	@NODE_ENV=test $(MOCHA) \
		--reporter html-cov --require blanket --recursive

create-tests:
	(cd lib && find -type f) | while read JSFILE; do mkdir -p test/$$(dirname $$JSFILE) && touch test/$$JSFILE; done
