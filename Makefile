REPORTER = spec

test: test-all

test-all:
	@./node_modules/mocha/bin/mocha \
	--reporter $(REPORTER)

.PHONY: test
