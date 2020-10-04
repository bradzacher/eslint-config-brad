.PHONY: build
build:
	@yarn tsc
	cp package.json dist
	cp README.md dist
	cp LICENCE dist
	rm -fr dist/types
	yarn ts-node ./scripts/removePrivate.ts

.PHONY: ci
ci:
# check the format
	@yarn format
	git diff --exit-code
# build first because the lint is based off this package!
	@yarn build
# make sure there are no lint errors
	@yarn lint

.PHONY: publish-next
publish-next:
	@make build
	@npm publish dist --tag=next

.PHONY: publish
publish:
	@make build
	@npm publish dist
