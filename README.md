# rework-extend

[![Build Status](https://secure.travis-ci.org/johnotander/rework-extend.png?branch=master)](https://travis-ci.org/johnotander/rework-extend)

A rework plugin for `@extend` support in line with the proposed spec
by Tab Atkins (not yet accepted by the W3C).

<http://tabatkins.github.io/specs/css-extend-rule/#extend-rule>

## Installation

```bash
npm install --save rework-extend
```

## Usage

```javascript
var fs = require('fs');
var rework = require('rework');
var reworkExtend = require('rework-extend');

var css = fs.readFileSync('css/my-file.css', 'utf8').toString();
var out = rework(css).use(reworkExtend()).toString();
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
