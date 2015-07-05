REPORTER = nyan

test-all:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
