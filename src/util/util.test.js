/* global describe, it */
import { mergeDeeply } from './util.js'
import assert from 'assert'

describe('utilities', function () {
  it('mergeDeeply', function () {
    const a = {
      x: 1,
      y: { a: -1, c: 4 }
    }
    const b = {
      y: { a: 2, b: 3 },
      z: 5
    }

    assert.deepEqual(mergeDeeply(a, b), {
      x: 1,
      y: { a: 2, b: 3, c: 4 },
      z: 5
    })
  })
})
