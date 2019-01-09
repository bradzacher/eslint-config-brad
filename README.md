# lint-config-base
base ts/eslint configuration files for common configuration

## Installation

If you're working in backend repo:
`yarn add eslint-config-brad-node`
If you're working in a front-end repo:
`yarn add eslint-config-brad-react`


## Developing

Clone the repo, and then install the dependencies:
`yarn install`
Note that you need a current version of yarn `>1.0.0` for this to work correctly, as this repo uses yarn workspaces to link packages.

Available Commands:
- `make build` - run a typescript build on each package
- `make lint` - lint the entire codebase
- `make show-unused` - scan the packages and their plugins to find any rules that haven't been defined
- `make regenerate-types` - generate the typescript definition files for all of the valid, non-deprecated rules


### PR requirements

A PR cannot be merged unless the `make ci` command passes.
I.e. the requirements are:
- Build must pass `make build`
- Lint must pass `make lint`
- There should be no unused rules `make show-unused`


### Publishing

Make sure you `yarn global add @assignar/cli`.
Then run `assignar publish [major|minor|patch] [--rc] --lerna`


### Updating dependencies

Using yarn workspaces means this project has one `node_modules` folder, however each package has its own `package.json`.
You can check the *entire* project for outdated dependencies by using `yarn outdated` from **anywhere** (underneath the root).

You'll end up with output that lists the specific package the dependency is outdated on:
```
Package             Current Wanted Latest Workspace                    Package Type    URL
@types/node         10.3.5  10.3.6 10.3.6 eslint-config-assignar       devDependencies https://github.com/DefinitelyTyped/DefinitelyTyped.git
eslint              5.0.0   5.0.1  5.0.1  eslint-config-assignar-base  dependencies    https://eslint.org
```

To update dependencies in the root package.json, you must use `yarn add -W <dep>`. If you don't, yarn will throw an error at you.
To update dependencies in any of the sub-package's package.json, you have to CD to the directory, and then you can just do `yarn add <dep>` as per usual.

