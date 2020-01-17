## [React] How to create npm package with CRA & storybook

## Install
```sh
yarn install
```

## Usage

### Run Storybook
```sh
yarn sb
```

### Build lib
```sh
yarn build
```

## Publishing the package to Github repo
```sh
npm login --registry=https://npm.pkg.github.com/
```
Note: Password is Github `Personal access tokens`

```sh
npm publish
```
