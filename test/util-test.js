'use strict'

const test = require('ava')
const utils = require('../lib/utils')

test('extrating name user', t => {
  let name = utils.extractName('Roberto')

  t.deepEqual(name, ['roberto'])
})
