.PHONY: build
build:
	@yarn build

.PHONY: format
format:
	@yarn format

.PHONY: lint
lint:
	@yarn lint

.PHONY: show-unused
show-unused:
	@echo checking for unused rules
	@echo node...
	@npx eslint-find-rules ./dist/index.js --unused
	@echo Done
	@echo react...
	@npx eslint-find-rules ./dist/react.js --unused
	@echo Done

.PHONY: ci
ci:
# check the format
	@make format
# build first because the lint is based off this package!
	@make build
# make sure there are no lint errors
	@make lint
# make sure there are no unused rules in any package
	@make show-unused

.PHONY: regenerate-types
regenerate-types:
	@yarn ts-node -P ./scripts/tsconfig.json --files ./scripts/generateTypes.ts
