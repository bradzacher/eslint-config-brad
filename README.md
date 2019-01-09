# lint-config-base
base ts/eslint configuration files for common configuration

## Usage

`yarn add eslint-config-brad`

If you're working on a react project:
```JSON
{
    "extends": [
        "brad/react",
    ],
}
```
If you're working on a non-react project:
```JSON
{
    "extends": [
        "brad",
    ],
}
```

## Developing

Clone the repo, and then install the dependencies:
`yarn install`
Note that you need a current version of yarn `>1.0.0` for this to work correctly, as this repo uses yarn workspaces to link packages.

Available Commands:
- `make build` - run a typescript build on each package
- `make lint` - lint the entire codebase
- `make show-unused` - scan the packages and their plugins to find any rules that haven't been defined
- `make regenerate-types` - generate the typescript definition files for all of the valid, non-deprecated rules
