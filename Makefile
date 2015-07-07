REPORTER = nyan
MOCHA = ./node_modules/.bin/mocha

test-all:
	@NODE_ENV=test $(MOCHA) \
		--reporter $(REPORTER) --recursive \

cov-all:
	@NODE_ENV=test $(MOCHA) \
		--reporter html-cov --require blanket --recursive
