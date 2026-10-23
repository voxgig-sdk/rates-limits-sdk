

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


describe('ProgramEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RATES_LIMITS_TEST_LIVE=TRUE.
  afterEach(liveDelay('RATES_LIMITS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = RatesLimitsSDK.test()
    const ent = testsdk.Program()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = RatesLimitsSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Program().list({"program":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RATES_LIMITS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'program.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"agency":{"a":true,"h":"Agency","n":"agency","r":true,"t":"`$STRING`","key$":"agency","index$":0},"canonical_url":{"a":true,"h":"Canonical Url","n":"canonical_url","r":true,"t":"`$STRING`","key$":"canonical_url","index$":1},"category":{"a":true,"h":"Category","n":"category","r":true,"t":"`$STRING`","key$":"category","index$":2},"date_basis":{"a":true,"h":"Date Basis","n":"date_basis","r":true,"sh":"Observed: `effective`, `as-of`.","t":"`$STRING`","key$":"date_basis","index$":3},"effective_date":{"a":true,"fo":"date","h":"Effective Date","n":"effective_date","r":true,"t":"`$STRING`","key$":"effective_date","index$":4},"estimate":{"a":true,"h":"Estimate","n":"estimate","r":false,"sh":"Estimate block (formula and inputs) for derived figures.","t":"`$OBJECT`","key$":"estimate","index$":5},"explainers":{"a":true,"h":"Explainers","n":"explainers","r":false,"sh":"Explanatory notes, or null.","t":"`$ARRAY`","key$":"explainers","index$":6},"figures":{"a":true,"h":"Figures","n":"figures","r":true,"t":"`$ARRAY`","key$":"figures","index$":7},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":8},"program":{"a":true,"h":"Program","n":"program","r":true,"sh":"Program slug, e.g.","t":"`$STRING`","key$":"program","index$":9},"published_at":{"a":true,"fo":"date-time","h":"Published At","n":"published_at","r":true,"t":"`$STRING`","key$":"published_at","index$":10},"schedule":{"a":true,"h":"Schedule","n":"schedule","r":false,"sh":"Mid-year changes, or null.","t":"`$ARRAY`","key$":"schedule","index$":11},"state":{"a":true,"h":"State","n":"state","r":true,"sh":"State slug for state-level programs (e.g.","t":"`$STRING`","key$":"state","index$":12},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Observed: `official`.","t":"`$STRING`","key$":"status","index$":13},"verified_at":{"a":true,"fo":"date","h":"Verified At","n":"verified_at","r":true,"t":"`$STRING`","key$":"verified_at","index$":14},"year":{"a":true,"h":"Year","n":"year","r":true,"t":"`$INTEGER`","key$":"year","index$":15}},"name":"program","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /{program}.json","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"hsa-contribution-limit","k":"param","n":"program","or":"program","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/{program}.json","q":{"exist":["program"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"{program}.json"}],"t":{"req":"`reqdata`","res":"`body.records`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"program","name__orig":"program","Name":"Program","name_":"program","name-":"program","NAME":"PROGRAM","index$":2}, {"active":true,"entity":"program","key$":"BasicProgramFlow","kind":"basic","name":"BasicProgramFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"program":"program01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"program_ref01"}}],"index$":0}]}, 'Program', {"GET /{program}.json":{"protocol":"http","parameters":[{"name":"program","in":"path","required":true,"description":"Program slug from the catalog.","schema":{"type":"string"},"example":"hsa-contribution-limit","index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let program_ref01_data = Object.values(setup.data.existing.program)[0] as any

    // LIST
    const program_ref01_ent = client.Program()
    const program_ref01_match: any = {}
    program_ref01_match['program'] = setup.idmap['program01']

    const program_ref01_list = (await program_ref01_ent.list(program_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/program/ProgramTestData.json')

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
    ['program01','program02','program03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RATES_LIMITS_TEST_PROGRAM_ENTID': idmap,
    'RATES_LIMITS_TEST_LIVE': 'FALSE',
    'RATES_LIMITS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['RATES_LIMITS_TEST_PROGRAM_ENTID']

  const live = 'TRUE' === env.RATES_LIMITS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RATES_LIMITS_TEST_PROGRAM_ENTID']
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
  
