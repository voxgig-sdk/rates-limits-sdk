
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { RatesLimitsSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = RatesLimitsSDK.test()
    equal(testsdk instanceof RatesLimitsSDK, true,
      'RatesLimitsSDK.test() must return a client synchronously')
  })

})
