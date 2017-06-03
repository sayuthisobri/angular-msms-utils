# Angular Utils
[![Build Status](https://travis-ci.org/sayuthisobri/angular-msms-utils.svg?branch=master)](https://travis-ci.org/sayuthisobri/angular-msms-utils)
[![npm version](https://badge.fury.io/js/angular-msms-utils.svg)](http://badge.fury.io/js/angular-msms-utils)
[![GitHub issues](https://img.shields.io/github/issues/sayuthisobri/angular-msms-utils.svg)](https://github.com/sayuthisobri/angular-msms-utils/issues)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/sayuthisobri/angular-msms-utils/master/LICENSE)
![](https://img.shields.io/badge/msms-jr-blue.svg)

## Demo

[View Demo](http://angular-utils.msms.cf/demo/)

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](http://angular-utils.msms.cf/docs/)
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

You may also find it useful to view the [demo source](https://github.com/sayuthisobri/angular-msms-utils/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```html
&lt;script src="node_modules/angular-msms-utils/bundles/angular-msms-utils.umd.js"&gt;
&lt;/script&gt;
&lt;script&gt;
    // everything is exported angularMsmsUtils namespace
&lt;/script&gt;
```

## Documentation
Generated documents can be [view here](http://angular-utils.msms.cf/docs/)

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
