"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "catalog",
        "accessor": "Catalog",
        "op": "list",
        "method": "GET",
        "path": "/index.json",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "name": "x",
            "description": "x",
            "license": {
                "name": "x",
                "url": "x",
                "summary": "x"
            },
            "verified_through": "2026-01-01",
            "documentation": "x",
            "endpoints": {
                "catalog": "x",
                "latest": "x",
                "program": "x",
                "record": "x",
                "state_record": "x"
            },
            "programs": [
                {
                    "program": "x",
                    "name": "x",
                    "category": "x",
                    "agency": "x",
                    "dimension": "x",
                    "years": [
                        1
                    ],
                    "states": [
                        "x"
                    ],
                    "page_url": "x",
                    "api_url": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "latest",
        "accessor": "Latest",
        "op": "list",
        "method": "GET",
        "path": "/latest.json",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "license": {
                "name": "x",
                "url": "x",
                "summary": "x"
            },
            "verified_through": "2026-01-01",
            "documentation": "x",
            "count": 1,
            "records": [
                {
                    "program": "x",
                    "name": "x",
                    "category": "x",
                    "agency": "x",
                    "year": 1,
                    "state": "x",
                    "status": "x",
                    "effective_date": "2026-01-01",
                    "date_basis": "x",
                    "verified_at": "2026-01-01",
                    "published_at": "2026-01-01T00:00:00Z",
                    "canonical_url": "x",
                    "figures": [
                        {
                            "key": "x",
                            "label": "x",
                            "value": 1,
                            "format": "x",
                            "formatted": "x",
                            "scope": "x",
                            "derived": true,
                            "quote": "x",
                            "offset": 1,
                            "source": {
                                "url": "x",
                                "title": "x",
                                "publisher": "x",
                                "fetched_at": "2026-01-01T00:00:00Z",
                                "sha256_text": "x",
                                "snapshot_url": "x"
                            }
                        }
                    ],
                    "schedule": [
                        {
                            "from": "2026-01-01",
                            "verified_at": "2026-01-01",
                            "figures": [
                                {}
                            ]
                        }
                    ],
                    "explainers": [
                        {
                            "key": "x",
                            "heading": "x",
                            "body": "x",
                            "quote": "x",
                            "offset": 1,
                            "verified_at": "2026-01-01",
                            "source": {
                                "url": "x",
                                "title": "x",
                                "publisher": "x",
                                "fetched_at": "2026-01-01T00:00:00Z",
                                "sha256_text": "x",
                                "snapshot_url": "x"
                            }
                        }
                    ],
                    "estimate": {}
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "program",
        "accessor": "Program",
        "op": "list",
        "method": "GET",
        "path": "/{program}.json",
        "args": [
            {
                "name": "program",
                "wire": "program",
                "value": "hsa-contribution-limit"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "program": "x",
            "name": "x",
            "category": "x",
            "agency": "x",
            "dimension": "x",
            "page_url": "x",
            "verified_through": "2026-01-01",
            "documentation": "x",
            "count": 1,
            "records": [
                {
                    "program": "x",
                    "name": "x",
                    "category": "x",
                    "agency": "x",
                    "year": 1,
                    "state": "x",
                    "status": "x",
                    "effective_date": "2026-01-01",
                    "date_basis": "x",
                    "verified_at": "2026-01-01",
                    "published_at": "2026-01-01T00:00:00Z",
                    "canonical_url": "x",
                    "figures": [
                        {
                            "key": "x",
                            "label": "x",
                            "value": 1,
                            "format": "x",
                            "formatted": "x",
                            "scope": "x",
                            "derived": true,
                            "quote": "x",
                            "offset": 1,
                            "source": {
                                "url": "x",
                                "title": "x",
                                "publisher": "x",
                                "fetched_at": "2026-01-01T00:00:00Z",
                                "sha256_text": "x",
                                "snapshot_url": "x"
                            }
                        }
                    ],
                    "schedule": [
                        {
                            "from": "2026-01-01",
                            "verified_at": "2026-01-01",
                            "figures": [
                                {}
                            ]
                        }
                    ],
                    "explainers": [
                        {
                            "key": "x",
                            "heading": "x",
                            "body": "x",
                            "quote": "x",
                            "offset": 1,
                            "verified_at": "2026-01-01",
                            "source": {
                                "url": "x",
                                "title": "x",
                                "publisher": "x",
                                "fetched_at": "2026-01-01T00:00:00Z",
                                "sha256_text": "x",
                                "snapshot_url": "x"
                            }
                        }
                    ],
                    "estimate": {}
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "year",
        "accessor": "Year",
        "op": "list",
        "method": "GET",
        "path": "/{program}/{state}/{year}.json",
        "args": [
            {
                "name": "program",
                "wire": "program",
                "value": "minimum-wage"
            },
            {
                "name": "state",
                "wire": "state",
                "value": "florida"
            },
            {
                "name": "year",
                "wire": "year",
                "value": 2026
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "program": "x",
            "name": "x",
            "category": "x",
            "agency": "x",
            "year": 1,
            "state": "x",
            "status": "x",
            "effective_date": "2026-01-01",
            "date_basis": "x",
            "verified_at": "2026-01-01",
            "published_at": "2026-01-01T00:00:00Z",
            "canonical_url": "x",
            "figures": [
                {
                    "key": "x",
                    "label": "x",
                    "value": 1,
                    "format": "x",
                    "formatted": "x",
                    "scope": "x",
                    "derived": true,
                    "quote": "x",
                    "offset": 1,
                    "source": {
                        "url": "x",
                        "title": "x",
                        "publisher": "x",
                        "fetched_at": "2026-01-01T00:00:00Z",
                        "sha256_text": "x",
                        "snapshot_url": "x"
                    }
                }
            ],
            "schedule": [
                {
                    "from": "2026-01-01",
                    "verified_at": "2026-01-01",
                    "figures": [
                        {
                            "key": "x",
                            "label": "x",
                            "value": 1,
                            "format": "x",
                            "formatted": "x",
                            "scope": "x",
                            "derived": true,
                            "quote": "x",
                            "offset": 1,
                            "source": {
                                "url": "x",
                                "title": "x",
                                "publisher": "x",
                                "fetched_at": "2026-01-01T00:00:00Z",
                                "sha256_text": "x",
                                "snapshot_url": "x"
                            }
                        }
                    ]
                }
            ],
            "explainers": [
                {
                    "key": "x",
                    "heading": "x",
                    "body": "x",
                    "quote": "x",
                    "offset": 1,
                    "verified_at": "2026-01-01",
                    "source": {
                        "url": "x",
                        "title": "x",
                        "publisher": "x",
                        "fetched_at": "2026-01-01T00:00:00Z",
                        "sha256_text": "x",
                        "snapshot_url": "x"
                    }
                }
            ],
            "estimate": {}
        },
        "idField": "id"
    },
    {
        "entity": "year",
        "accessor": "Year",
        "op": "list",
        "method": "GET",
        "path": "/{program}/{year}.json",
        "args": [
            {
                "name": "program",
                "wire": "program",
                "value": "hsa-contribution-limit"
            },
            {
                "name": "year",
                "wire": "year",
                "value": 2026
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "program": "x",
            "name": "x",
            "category": "x",
            "agency": "x",
            "year": 1,
            "state": "x",
            "status": "x",
            "effective_date": "2026-01-01",
            "date_basis": "x",
            "verified_at": "2026-01-01",
            "published_at": "2026-01-01T00:00:00Z",
            "canonical_url": "x",
            "figures": [
                {
                    "key": "x",
                    "label": "x",
                    "value": 1,
                    "format": "x",
                    "formatted": "x",
                    "scope": "x",
                    "derived": true,
                    "quote": "x",
                    "offset": 1,
                    "source": {
                        "url": "x",
                        "title": "x",
                        "publisher": "x",
                        "fetched_at": "2026-01-01T00:00:00Z",
                        "sha256_text": "x",
                        "snapshot_url": "x"
                    }
                }
            ],
            "schedule": [
                {
                    "from": "2026-01-01",
                    "verified_at": "2026-01-01",
                    "figures": [
                        {
                            "key": "x",
                            "label": "x",
                            "value": 1,
                            "format": "x",
                            "formatted": "x",
                            "scope": "x",
                            "derived": true,
                            "quote": "x",
                            "offset": 1,
                            "source": {
                                "url": "x",
                                "title": "x",
                                "publisher": "x",
                                "fetched_at": "2026-01-01T00:00:00Z",
                                "sha256_text": "x",
                                "snapshot_url": "x"
                            }
                        }
                    ]
                }
            ],
            "explainers": [
                {
                    "key": "x",
                    "heading": "x",
                    "body": "x",
                    "quote": "x",
                    "offset": 1,
                    "verified_at": "2026-01-01",
                    "source": {
                        "url": "x",
                        "title": "x",
                        "publisher": "x",
                        "fetched_at": "2026-01-01T00:00:00Z",
                        "sha256_text": "x",
                        "snapshot_url": "x"
                    }
                }
            ],
            "estimate": {}
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map