REPORTER = nyan
MOCHA = ./node_modules/.bin/mocha

.PHONY: expand test-all cov-all create-tests list-untested list-tested

ALL_LIB_JS := $(patsubst lib.in/%,lib/%,$(shell find lib.in -type f -name '*.js'))

lib/%.js : lib.in/%.js lib.in/macros.sjs
	mkdir -p $(dir $@)
	sjs --module ./lib.in/macros.sjs -o $@ $<

expand: $(ALL_LIB_JS)
	@echo All templates from lib.in expanded successfully 1>&2

test-all: expand
	@NODE_ENV=test $(MOCHA) \
		--reporter $(REPORTER) --recursive

cov-all: expand
	@NODE_ENV=test $(MOCHA) \
		--reporter html-cov --require blanket --recursive

create-tests: expand
	(cd lib && find -type f) | \
	while read JSFILE; \
		do mkdir -p test/$$(dirname $$JSFILE) && touch test/$$(dirname $$JSFILE)/test_$$(basename $$JSFILE); \
	done

list-untested: create-tests
	find test -type f -name 'test_*.js' -size 0

list-tested: create-tests
	find test -type f -name 'test_*.js' -not -size 0
