/*!
 * limon-prev-next <https://github.com/limonjs/limon-prev-next>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var Limon = require('limon').Limon
var plugin = require('./index')

test('should add prev/next methods', function (done) {
  var lexer = new Limon()
    .use(plugin())
    .use(function (app) {
      return function () {
        test.strictEqual(typeof this.prev, 'function')
        test.strictEqual(typeof this.next, 'function')
        test.strictEqual(typeof app.prev, 'function')
        test.strictEqual(typeof app.next, 'function')
      }
    })
    .tokenize('foo bar')

  test.strictEqual(typeof lexer.prev, 'undefined')
  test.strictEqual(typeof lexer.next, 'undefined')
  done()
})

test('should `prev` method be able to pass a string as number', function (done) {
  new Limon()
    .use(plugin())
    .use(function () {
      return function (ch) {
        if (ch === 'c') {
          test.strictEqual(this.prev(1), '>')
          test.strictEqual(this.prev('3'), 'b')
        }
      }
    })
    .tokenize('ab >c.8')

  done()
})

test('should `next` method be able to pass a string as number', function (done) {
  new Limon()
    .use(plugin())
    .use(function () {
      return function (ch) {
        if (ch === 'a') {
          test.strictEqual(this.next(1), '.')
          test.strictEqual(this.next('2'), '8')
        }
      }
    })
    .tokenize('a.8')

  done()
})
