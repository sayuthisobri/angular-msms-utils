# ng2 msms utils
[![Build Status](https://travis-ci.org/sayuthisobri/ng2-msms-utils.svg?branch=master)](https://travis-ci.org/sayuthisobri/ng2-msms-utils)
[![npm version](https://badge.fury.io/js/angular-msms-utils.svg)](http://badge.fury.io/js/angular-msms-utils)
[![GitHub issues](https://img.shields.io/github/issues/sayuthisobri/ng2-msms-utils.svg)](https://github.com/sayuthisobri/ng2-msms-utils/issues)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/sayuthisobri/ng2-msms-utils/master/LICENSE)
![](https://img.shields.io/badge/msms-jr-blue.svg)

## Demo
https://msms.github.io/ng2-msms-utils/demo/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

...

## Installation

Install through npm:
```
npm install --save angular-msms-utils
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { MsmsUtilsModule } from 'angular-msms-utils';

@NgModule({
  imports: [
    MsmsUtilsModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<msms-test></msms-test>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/sayuthisobri/ng2-msms-utils/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/angular-msms-utils/bundles/angular-msms-utils.umd.js"></script>
<script>
    // everything is exported angularMsmsUtils namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://msms.github.io/ng2-msms-utils/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM (should come with)
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
