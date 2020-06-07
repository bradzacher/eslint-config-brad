.PHONY: build
build:
	@yarn tsc
	cp package.json dist
	cp README.md dist
	cp LICENCE dist
	rm -fr dist/types
	yarn ts-node ./scripts/removePrivate.ts

.PHONY: format
format:
	@yarn format

.PHONY: lint
lint:
	@yarn lint

.PHONY: ci
ci:
# check the format
	@make format
	git diff --exit-code
# build first because the lint is based off this package!
	@make build
# make sure there are no lint errors
	@make lint

.PHONY: publish-next
publish-next:
	@make build
	@npm publish dist --tag=next

.PHONY: publish
publish:
	@make build
	@npm publish dist
