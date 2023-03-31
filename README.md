# @bricked/semantic-release-config

[![license](https://img.shields.io/github/license/brycked/semantic-release-config)](LICENSE.md)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![version](https://img.shields.io/npm/v/@bricked/semantic-release-config?color=crimson&logo=npm)](https://www.npmjs.com/package/@bricked/semantic-release-config)

Shared semantic-release configuration for my projects.

## Installation

```sh
npm install --save-dev @bricked/semantic-release-config
yarn add --dev @bricked/semantic-release-config
pnpm add --dev @bricked/semantic-release-config
```

## Usage

`@bricked/semantic-release-config` can be used as a shareable [configuration](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md).

- Via `release` key in the project's `package.json` file:

```json
{
  "release": {
    "extends": "@bricked/semantic-release-config"
  }
}
```

- Via `.releaserc` file:

```json
{
  "extends": "@bricked/semantic-release-config"
}
```

- Via CLI argument:

```sh
$ semantic-release --extends @bricked/semantic-release-config
```
