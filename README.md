# eslint-config-brad

ESLint configuration files for my style

## Usage

```text
yarn add -D eslint-config-brad @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-eslint-comments eslint-plugin-import eslint-plugin-jest eslint-plugin-node eslint-plugin-simple-import-sort eslint-restricted-glob
```

If you're working on a non-react project:

```JSON
{
    "extends": [
        "brad",
    ],
}
```

If you're working on a react project:

```text
yarn add -D eslint-plugin-react eslint-plugin-react-hooks
```

```JSON
{
    "extends": [
        "brad/react",
    ],
}
```

### Prettier

Standardised prettier config can be used by creating the following `.prettierrc.json` in your project root:

```json
"eslint-config-brad/prettier"
```

## Developing

Clone the repo, and then install the dependencies `yarn install`

Available Commands:

- `make build` - run a typescript build on each package
- `make lint` - lint the entire codebase
- `make format` - run prettier on the codebase
- `make show-unused` - scan the packages and their plugins to find any rules that haven't been defined
- `make regenerate-types` - generate the typescript definition files for all of the valid, non-deprecated rules
