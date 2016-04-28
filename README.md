# [limon-prev-next][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Plugin for [limon][] pluggable lexer that adds `prev` and `next` methods.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
```
npm i limon-prev-next --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const limonPrevNext = require('limon-prev-next')
```

### [limonPrevNext](index.js#L39)
Plugin that adds `.prev` and `.next` methods, that are available in next plugins only.

* `returns` **{Function}**: Which you should pass to [limon][]'s `.use` method.  

**Example**

```js
var limon = require('limon')
var prevNext = require('limon-prev-next')

limon
  .use(prevNext())
  .use(function () {
    return function (ch, i, input) {
      if (ch === '>') {
        console.log(this.prev())     // => '.'
        console.log(this.prev('3'))  // => 'b'
        console.log(this.next(2))    // => 'q'
        console.log(this.next('4'))  // => 'x'
      }
    }
  })
  .tokenize('abc.> qux')
```

## Related
* [limon](https://www.npmjs.com/package/limon): The pluggable JavaScript lexer on per character basis. | [homepage](https://github.com/limonjs/limon)
* [postjson](https://www.npmjs.com/package/postjson): Transforming JSON with plugins. | [homepage](https://github.com/postjson/postjson)

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/limon-prev-next/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[limon]: https://github.com/limonjs/limon

[npmjs-url]: https://www.npmjs.com/package/limon-prev-next
[npmjs-img]: https://img.shields.io/npm/v/limon-prev-next.svg?label=limon-prev-next

[license-url]: https://github.com/tunnckoCore/limon-prev-next/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/limon-prev-next
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/limon-prev-next.svg

[travis-url]: https://travis-ci.org/tunnckoCore/limon-prev-next
[travis-img]: https://img.shields.io/travis/tunnckoCore/limon-prev-next/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/limon-prev-next
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/limon-prev-next.svg

[david-url]: https://david-dm.org/tunnckoCore/limon-prev-next
[david-img]: https://img.shields.io/david/tunnckoCore/limon-prev-next.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

