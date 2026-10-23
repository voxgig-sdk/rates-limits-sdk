"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('YearEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RATES_LIMITS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RATES_LIMITS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.RatesLimitsSDK.test();
        const ent = testsdk.Year();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.RatesLimitsSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Year().list({ "program": 1, "year": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RATES_LIMITS_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'year.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "agency": { "a": true, "h": "Agency", "n": "agency", "r": true, "t": "`$STRING`", "key$": "agency", "index$": 0 }, "canonical_url": { "a": true, "h": "Canonical Url", "n": "canonical_url", "r": true, "t": "`$STRING`", "key$": "canonical_url", "index$": 1 }, "category": { "a": true, "h": "Category", "n": "category", "r": true, "t": "`$STRING`", "key$": "category", "index$": 2 }, "date_basis": { "a": true, "h": "Date Basis", "n": "date_basis", "r": true, "sh": "Observed: `effective`, `as-of`.", "t": "`$STRING`", "key$": "date_basis", "index$": 3 }, "effective_date": { "a": true, "fo": "date", "h": "Effective Date", "n": "effective_date", "r": true, "t": "`$STRING`", "key$": "effective_date", "index$": 4 }, "estimate": { "a": true, "h": "Estimate", "n": "estimate", "r": false, "sh": "Estimate block (formula and inputs) for derived figures.", "t": "`$OBJECT`", "key$": "estimate", "index$": 5 }, "explainers": { "a": true, "h": "Explainers", "n": "explainers", "r": false, "sh": "Explanatory notes, or null.", "t": "`$ARRAY`", "key$": "explainers", "index$": 6 }, "figures": { "a": true, "h": "Figures", "n": "figures", "r": true, "t": "`$ARRAY`", "key$": "figures", "index$": 7 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "t": "`$STRING`", "key$": "name", "index$": 8 }, "program": { "a": true, "h": "Program", "n": "program", "r": true, "sh": "Program slug, e.g.", "t": "`$STRING`", "key$": "program", "index$": 9 }, "published_at": { "a": true, "fo": "date-time", "h": "Published At", "n": "published_at", "r": true, "t": "`$STRING`", "key$": "published_at", "index$": 10 }, "schedule": { "a": true, "h": "Schedule", "n": "schedule", "r": false, "sh": "Mid-year changes, or null.", "t": "`$ARRAY`", "key$": "schedule", "index$": 11 }, "state": { "a": true, "h": "State", "n": "state", "r": true, "sh": "State slug for state-level programs (e.g.", "t": "`$STRING`", "key$": "state", "index$": 12 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "Observed: `official`.", "t": "`$STRING`", "key$": "status", "index$": 13 }, "verified_at": { "a": true, "fo": "date", "h": "Verified At", "n": "verified_at", "r": true, "t": "`$STRING`", "key$": "verified_at", "index$": 14 }, "year": { "a": true, "h": "Year", "n": "year", "r": true, "t": "`$INTEGER`", "key$": "year", "index$": 15 } }, "name": "year", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /{program}/{state}/{year}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "minimum-wage", "k": "param", "n": "program", "or": "program", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "florida", "k": "param", "n": "state", "or": "state", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 2026, "k": "param", "n": "year", "or": "year", "r": true, "t": "`$INTEGER`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/{program}/{state}/{year}.json", "q": { "exist": ["program", "state", "year"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "var": "program" }, { "var": "state" }, { "lit": "{year}.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /{program}/{year}.json", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "hsa-contribution-limit", "k": "param", "n": "program", "or": "program", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 2026, "k": "param", "n": "year", "or": "year", "r": true, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/{program}/{year}.json", "q": { "exist": ["program", "year"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "var": "program" }, { "lit": "{year}.json" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "year", "name__orig": "year", "Name": "Year", "name_": "year", "name-": "year", "NAME": "YEAR", "index$": 3 }, { "active": true, "entity": "year", "key$": "BasicYearFlow", "kind": "basic", "name": "BasicYearFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "program": "program01", "year": "year01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "year_ref01" } }], "index$": 0 }] }, 'Year', { "GET /{program}/{state}/{year}.json": { "protocol": "http", "parameters": [{ "name": "program", "in": "path", "required": true, "description": "State-level program slug (`minimum-wage` or `tipped-minimum-wage`).", "schema": { "type": "string" }, "example": "minimum-wage", "index$": 0 }, { "name": "state", "in": "path", "required": true, "description": "State slug from the catalog's `states`.", "schema": { "type": "string" }, "example": "florida", "index$": 1 }, { "name": "year", "in": "path", "required": true, "description": "Year of the record.", "schema": { "type": "integer" }, "example": 2026, "index$": 2 }] }, "GET /{program}/{year}.json": { "protocol": "http", "parameters": [{ "name": "program", "in": "path", "required": true, "description": "Program slug from the catalog.", "schema": { "type": "string" }, "example": "hsa-contribution-limit", "index$": 0 }, { "name": "year", "in": "path", "required": true, "description": "Year of the record.", "schema": { "type": "integer" }, "example": 2026, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let year_ref01_data = Object.values(setup.data.existing.year)[0];
        // LIST
        const year_ref01_ent = client.Year();
        const year_ref01_match = {};
        year_ref01_match['program'] = setup.idmap['program01'];
        year_ref01_match['year'] = setup.idmap['year01'];
        const year_ref01_list = (await year_ref01_ent.list(year_ref01_match)).map((e) => e.data());
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/year/YearTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.RatesLimitsSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['year01', 'year02', 'year03', 'program01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RATES_LIMITS_TEST_YEAR_ENTID': idmap,
        'RATES_LIMITS_TEST_LIVE': 'FALSE',
        'RATES_LIMITS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['RATES_LIMITS_TEST_YEAR_ENTID'];
    const live = 'TRUE' === env.RATES_LIMITS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RATES_LIMITS_TEST_YEAR_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.RatesLimitsSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=YearEntity.test.js.map