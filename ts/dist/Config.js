"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'RatesLimits',
        slug: "rates-limits",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "now": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://ratesandlimits.com/api/v1",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            catalog: {},
            latest: {},
            program: {},
            year: {},
        }
    };
    entity = {
        "catalog": {
            "fields": [
                {
                    "name": "agency",
                    "title": "Agency",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "api_url",
                    "title": "Api Url",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "category",
                    "title": "Category",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "dimension",
                    "title": "Dimension",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "`year` for federal programs, `state-year` for state-level ones."
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "page_url",
                    "title": "Page Url",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "program",
                    "title": "Program",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Program slug, the `{program}` path parameter."
                },
                {
                    "name": "states",
                    "title": "States",
                    "type": "`$ARRAY`",
                    "req": true,
                    "short": "State slugs published (empty for year programs)."
                },
                {
                    "name": "years",
                    "title": "Years",
                    "type": "`$ARRAY`",
                    "req": true,
                    "short": "Years published (empty for state-year programs)."
                }
            ],
            "name": "catalog",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/index.json",
                            "segments": [
                                {
                                    "lit": "index.json"
                                }
                            ],
                            "parts": [
                                "index.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "latest": {
            "fields": [
                {
                    "name": "agency",
                    "title": "Agency",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "canonical_url",
                    "title": "Canonical Url",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "category",
                    "title": "Category",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "date_basis",
                    "title": "Date Basis",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Observed: `effective`, `as-of`."
                },
                {
                    "name": "effective_date",
                    "title": "Effective Date",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "date"
                },
                {
                    "name": "estimate",
                    "title": "Estimate",
                    "type": "`$OBJECT`",
                    "short": "Estimate block (formula and inputs) for derived figures."
                },
                {
                    "name": "explainers",
                    "title": "Explainers",
                    "type": "`$ARRAY`",
                    "short": "Explanatory notes, or null."
                },
                {
                    "name": "figures",
                    "title": "Figures",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "program",
                    "title": "Program",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Program slug, e.g."
                },
                {
                    "name": "published_at",
                    "title": "Published At",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "date-time"
                },
                {
                    "name": "schedule",
                    "title": "Schedule",
                    "type": "`$ARRAY`",
                    "short": "Mid-year changes, or null."
                },
                {
                    "name": "state",
                    "title": "State",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "State slug for state-level programs (e.g."
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Observed: `official`."
                },
                {
                    "name": "verified_at",
                    "title": "Verified At",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "date"
                },
                {
                    "name": "year",
                    "title": "Year",
                    "type": "`$INTEGER`",
                    "req": true
                }
            ],
            "name": "latest",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/latest.json",
                            "segments": [
                                {
                                    "lit": "latest.json"
                                }
                            ],
                            "parts": [
                                "latest.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "program": {
            "fields": [
                {
                    "name": "agency",
                    "title": "Agency",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "canonical_url",
                    "title": "Canonical Url",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "category",
                    "title": "Category",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "date_basis",
                    "title": "Date Basis",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Observed: `effective`, `as-of`."
                },
                {
                    "name": "effective_date",
                    "title": "Effective Date",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "date"
                },
                {
                    "name": "estimate",
                    "title": "Estimate",
                    "type": "`$OBJECT`",
                    "short": "Estimate block (formula and inputs) for derived figures."
                },
                {
                    "name": "explainers",
                    "title": "Explainers",
                    "type": "`$ARRAY`",
                    "short": "Explanatory notes, or null."
                },
                {
                    "name": "figures",
                    "title": "Figures",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "program",
                    "title": "Program",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Program slug, e.g."
                },
                {
                    "name": "published_at",
                    "title": "Published At",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "date-time"
                },
                {
                    "name": "schedule",
                    "title": "Schedule",
                    "type": "`$ARRAY`",
                    "short": "Mid-year changes, or null."
                },
                {
                    "name": "state",
                    "title": "State",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "State slug for state-level programs (e.g."
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Observed: `official`."
                },
                {
                    "name": "verified_at",
                    "title": "Verified At",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "date"
                },
                {
                    "name": "year",
                    "title": "Year",
                    "type": "`$INTEGER`",
                    "req": true
                }
            ],
            "name": "program",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/{program}.json",
                            "segments": [
                                {
                                    "lit": "{program}.json"
                                }
                            ],
                            "parts": [
                                "{program}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.records`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "program",
                                        "orig": "program",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "hsa-contribution-limit"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "program"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "year": {
            "fields": [
                {
                    "name": "agency",
                    "title": "Agency",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "canonical_url",
                    "title": "Canonical Url",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "category",
                    "title": "Category",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "date_basis",
                    "title": "Date Basis",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Observed: `effective`, `as-of`."
                },
                {
                    "name": "effective_date",
                    "title": "Effective Date",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "date"
                },
                {
                    "name": "estimate",
                    "title": "Estimate",
                    "type": "`$OBJECT`",
                    "short": "Estimate block (formula and inputs) for derived figures."
                },
                {
                    "name": "explainers",
                    "title": "Explainers",
                    "type": "`$ARRAY`",
                    "short": "Explanatory notes, or null."
                },
                {
                    "name": "figures",
                    "title": "Figures",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "name",
                    "title": "Name",
                    "type": "`$STRING`",
                    "req": true
                },
                {
                    "name": "program",
                    "title": "Program",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Program slug, e.g."
                },
                {
                    "name": "published_at",
                    "title": "Published At",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "date-time"
                },
                {
                    "name": "schedule",
                    "title": "Schedule",
                    "type": "`$ARRAY`",
                    "short": "Mid-year changes, or null."
                },
                {
                    "name": "state",
                    "title": "State",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "State slug for state-level programs (e.g."
                },
                {
                    "name": "status",
                    "title": "Status",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Observed: `official`."
                },
                {
                    "name": "verified_at",
                    "title": "Verified At",
                    "type": "`$STRING`",
                    "req": true,
                    "format": "date"
                },
                {
                    "name": "year",
                    "title": "Year",
                    "type": "`$INTEGER`",
                    "req": true
                }
            ],
            "name": "year",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/{program}/{state}/{year}.json",
                            "segments": [
                                {
                                    "var": "program"
                                },
                                {
                                    "var": "state"
                                },
                                {
                                    "lit": "{year}.json"
                                }
                            ],
                            "parts": [
                                "{program}",
                                "{state}",
                                "{year}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "program",
                                        "orig": "program",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "minimum-wage"
                                    },
                                    {
                                        "name": "state",
                                        "orig": "state",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "florida"
                                    },
                                    {
                                        "name": "year",
                                        "orig": "year",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 2026
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "program",
                                    "state",
                                    "year"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        },
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/{program}/{year}.json",
                            "segments": [
                                {
                                    "var": "program"
                                },
                                {
                                    "lit": "{year}.json"
                                }
                            ],
                            "parts": [
                                "{program}",
                                "{year}.json"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "program",
                                        "orig": "program",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "hsa-contribution-limit"
                                    },
                                    {
                                        "name": "year",
                                        "orig": "year",
                                        "type": "`$INTEGER`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": 2026
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "program",
                                    "year"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map