

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { RatesLimitsSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('LatestEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RATES_LIMITS_TEST_LIVE=TRUE.
  afterEach(liveDelay('RATES_LIMITS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RatesLimitsSDK.test()
    const ent = testsdk.Latest()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('latest hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of RatesLimitsSDK.test(offline).Latest().stream('list')) { }
    }, /offline/)

    for await (const _item of RatesLimitsSDK.test(offline).Latest()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = RatesLimitsSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Latest().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of RatesLimitsSDK.test().Latest().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new RatesLimitsSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Latest().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Latest().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = RatesLimitsSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Latest().list({"agency":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RATES_LIMITS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'latest.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"agency":{"a":true,"h":"Agency","n":"agency","r":true,"t":"`$STRING`","key$":"agency","index$":0},"canonical_url":{"a":true,"h":"Canonical Url","n":"canonical_url","r":true,"t":"`$STRING`","key$":"canonical_url","index$":1},"category":{"a":true,"h":"Category","n":"category","r":true,"t":"`$STRING`","key$":"category","index$":2},"date_basis":{"a":true,"h":"Date Basis","n":"date_basis","r":true,"sh":"Observed: `effective`, `as-of`.","t":"`$STRING`","key$":"date_basis","index$":3},"effective_date":{"a":true,"fo":"date","h":"Effective Date","n":"effective_date","r":true,"t":"`$STRING`","key$":"effective_date","index$":4},"estimate":{"a":true,"h":"Estimate","n":"estimate","r":false,"sh":"Estimate block (formula and inputs) for derived figures.","t":"`$OBJECT`","key$":"estimate","index$":5},"explainers":{"a":true,"h":"Explainers","n":"explainers","r":false,"sh":"Explanatory notes, or null.","t":"`$ARRAY`","key$":"explainers","index$":6},"figures":{"a":true,"h":"Figures","n":"figures","r":true,"t":"`$ARRAY`","key$":"figures","index$":7},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":8},"program":{"a":true,"h":"Program","n":"program","r":true,"sh":"Program slug, e.g.","t":"`$STRING`","key$":"program","index$":9},"published_at":{"a":true,"fo":"date-time","h":"Published At","n":"published_at","r":true,"t":"`$STRING`","key$":"published_at","index$":10},"schedule":{"a":true,"h":"Schedule","n":"schedule","r":false,"sh":"Mid-year changes, or null.","t":"`$ARRAY`","key$":"schedule","index$":11},"state":{"a":true,"h":"State","n":"state","r":true,"sh":"State slug for state-level programs (e.g.","t":"`$STRING`","key$":"state","index$":12},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Observed: `official`.","t":"`$STRING`","key$":"status","index$":13},"verified_at":{"a":true,"fo":"date","h":"Verified At","n":"verified_at","r":true,"t":"`$STRING`","key$":"verified_at","index$":14},"year":{"a":true,"h":"Year","n":"year","r":true,"t":"`$INTEGER`","key$":"year","index$":15}},"name":"latest","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /latest.json","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/latest.json","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"latest.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"latest","name__orig":"latest","Name":"Latest","name_":"latest","name-":"latest","NAME":"LATEST","index$":1}, {"active":true,"entity":"latest","key$":"BasicLatestFlow","kind":"basic","name":"BasicLatestFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"latest_ref01"}}],"index$":0}]}, 'Latest', {"GET /latest.json":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let latest_ref01_data = Object.values(setup.data.existing.latest)[0] as any

    // LIST
    const latest_ref01_ent = client.Latest()
    const latest_ref01_match: any = {}

    const latest_ref01_list = (await latest_ref01_ent.list(latest_ref01_match)).map((e: any) => e.data())


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/latest/LatestTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = RatesLimitsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['latest01','latest02','latest03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RATES_LIMITS_TEST_LATEST_ENTID': idmap,
    'RATES_LIMITS_TEST_LIVE': 'FALSE',
    'RATES_LIMITS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['RATES_LIMITS_TEST_LATEST_ENTID']

  const live = 'TRUE' === env.RATES_LIMITS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RATES_LIMITS_TEST_LATEST_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new RatesLimitsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.RATES_LIMITS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
