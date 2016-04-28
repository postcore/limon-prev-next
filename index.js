/*!
 * limon-prev-next <https://github.com/limonjs/limon-prev-next>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

/**
 * Plugin that adds `.prev` and `.next` methods,
 * that are available in next plugins only.
 *
 * **Example**
 *
 * ```js
 * var limon = require('limon')
 * var prevNext = require('limon-prev-next')
 *
 * limon
 *   .use(prevNext())
 *   .use(function () {
 *     return function (ch, i, input) {
 *       if (ch === '>') {
 *         console.log(this.prev())     // => '.'
 *         console.log(this.prev('3'))  // => 'b'
 *         console.log(this.next(2))    // => 'q'
 *         console.log(this.next('4'))  // => 'x'
 *       }
 *     }
 *   })
 *   .tokenize('abc.> qux')
 * ```
 *
 * @return {Function} Which you should pass to [limon][]'s `.use` method.
 * @api public
 */

module.exports = function limonPrevNext () {
  return function prevNext () {
    return function (ch, i, input) {
      this.prev = function prev (pos) {
        pos = isNumber(pos) ? Number(pos) : 1
        return input[i - pos]
      }
      this.next = function next (pos) {
        pos = isNumber(pos) ? Number(pos) : 1
        return input[i + pos]
      }
    }
  }
}

function isNumber (val) {
  val = typeof val === 'string' ? val.trim() : val
  return require('is-number')(val)
}
