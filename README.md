# eslint-config-brad

ESLint configuration files for my style

## Usage

`yarn add -D eslint-config-brad`

If you're working on a non-react project:

```JSON
{
    "extends": [
        "brad",
    ],
}
```

If you're working on a react project:

```JSON
{
    "extends": [
        "brad/react",
    ],
}
```

## Developing

Clone the repo, and then install the dependencies `yarn install`

Available Commands:

- `make build` - run a typescript build on each package
- `make lint` - lint the entire codebase
- `make format` - run prettier on the codebase
- `make show-unused` - scan the packages and their plugins to find any rules that haven't been defined
- `make regenerate-types` - generate the typescript definition files for all of the valid, non-deprecated rules
