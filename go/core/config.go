package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "RatesLimits",
			"slug": "rates-limits",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"now": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://ratesandlimits.com/api/v1",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"catalog": map[string]any{},
				"latest": map[string]any{},
				"program": map[string]any{},
				"year": map[string]any{},
			},
		},
		"entity": map[string]any{
			"catalog": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "agency",
						"title": "Agency",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "api_url",
						"title": "Api Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "category",
						"title": "Category",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "dimension",
						"title": "Dimension",
						"type": "`$STRING`",
						"req": true,
						"short": "`year` for federal programs, `state-year` for state-level ones.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "page_url",
						"title": "Page Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "program",
						"title": "Program",
						"type": "`$STRING`",
						"req": true,
						"short": "Program slug, the `{program}` path parameter.",
					},
					map[string]any{
						"name": "states",
						"title": "States",
						"type": "`$ARRAY`",
						"req": true,
						"short": "State slugs published (empty for year programs).",
					},
					map[string]any{
						"name": "years",
						"title": "Years",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Years published (empty for state-year programs).",
					},
				},
				"name": "catalog",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/index.json",
								"segments": []any{
									map[string]any{
										"lit": "index.json",
									},
								},
								"parts": []any{
									"index.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"latest": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "agency",
						"title": "Agency",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "canonical_url",
						"title": "Canonical Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "category",
						"title": "Category",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "date_basis",
						"title": "Date Basis",
						"type": "`$STRING`",
						"req": true,
						"short": "Observed: `effective`, `as-of`.",
					},
					map[string]any{
						"name": "effective_date",
						"title": "Effective Date",
						"type": "`$STRING`",
						"req": true,
						"format": "date",
					},
					map[string]any{
						"name": "estimate",
						"title": "Estimate",
						"type": "`$OBJECT`",
						"short": "Estimate block (formula and inputs) for derived figures.",
					},
					map[string]any{
						"name": "explainers",
						"title": "Explainers",
						"type": "`$ARRAY`",
						"short": "Explanatory notes, or null.",
					},
					map[string]any{
						"name": "figures",
						"title": "Figures",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "program",
						"title": "Program",
						"type": "`$STRING`",
						"req": true,
						"short": "Program slug, e.g.",
					},
					map[string]any{
						"name": "published_at",
						"title": "Published At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "schedule",
						"title": "Schedule",
						"type": "`$ARRAY`",
						"short": "Mid-year changes, or null.",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"req": true,
						"short": "State slug for state-level programs (e.g.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Observed: `official`.",
					},
					map[string]any{
						"name": "verified_at",
						"title": "Verified At",
						"type": "`$STRING`",
						"req": true,
						"format": "date",
					},
					map[string]any{
						"name": "year",
						"title": "Year",
						"type": "`$INTEGER`",
						"req": true,
					},
				},
				"name": "latest",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/latest.json",
								"segments": []any{
									map[string]any{
										"lit": "latest.json",
									},
								},
								"parts": []any{
									"latest.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"program": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "agency",
						"title": "Agency",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "canonical_url",
						"title": "Canonical Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "category",
						"title": "Category",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "date_basis",
						"title": "Date Basis",
						"type": "`$STRING`",
						"req": true,
						"short": "Observed: `effective`, `as-of`.",
					},
					map[string]any{
						"name": "effective_date",
						"title": "Effective Date",
						"type": "`$STRING`",
						"req": true,
						"format": "date",
					},
					map[string]any{
						"name": "estimate",
						"title": "Estimate",
						"type": "`$OBJECT`",
						"short": "Estimate block (formula and inputs) for derived figures.",
					},
					map[string]any{
						"name": "explainers",
						"title": "Explainers",
						"type": "`$ARRAY`",
						"short": "Explanatory notes, or null.",
					},
					map[string]any{
						"name": "figures",
						"title": "Figures",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "program",
						"title": "Program",
						"type": "`$STRING`",
						"req": true,
						"short": "Program slug, e.g.",
					},
					map[string]any{
						"name": "published_at",
						"title": "Published At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "schedule",
						"title": "Schedule",
						"type": "`$ARRAY`",
						"short": "Mid-year changes, or null.",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"req": true,
						"short": "State slug for state-level programs (e.g.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Observed: `official`.",
					},
					map[string]any{
						"name": "verified_at",
						"title": "Verified At",
						"type": "`$STRING`",
						"req": true,
						"format": "date",
					},
					map[string]any{
						"name": "year",
						"title": "Year",
						"type": "`$INTEGER`",
						"req": true,
					},
				},
				"name": "program",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/{program}.json",
								"segments": []any{
									map[string]any{
										"lit": "{program}.json",
									},
								},
								"parts": []any{
									"{program}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.records`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "program",
											"orig": "program",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "hsa-contribution-limit",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"program",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"year": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "agency",
						"title": "Agency",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "canonical_url",
						"title": "Canonical Url",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "category",
						"title": "Category",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "date_basis",
						"title": "Date Basis",
						"type": "`$STRING`",
						"req": true,
						"short": "Observed: `effective`, `as-of`.",
					},
					map[string]any{
						"name": "effective_date",
						"title": "Effective Date",
						"type": "`$STRING`",
						"req": true,
						"format": "date",
					},
					map[string]any{
						"name": "estimate",
						"title": "Estimate",
						"type": "`$OBJECT`",
						"short": "Estimate block (formula and inputs) for derived figures.",
					},
					map[string]any{
						"name": "explainers",
						"title": "Explainers",
						"type": "`$ARRAY`",
						"short": "Explanatory notes, or null.",
					},
					map[string]any{
						"name": "figures",
						"title": "Figures",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "program",
						"title": "Program",
						"type": "`$STRING`",
						"req": true,
						"short": "Program slug, e.g.",
					},
					map[string]any{
						"name": "published_at",
						"title": "Published At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "schedule",
						"title": "Schedule",
						"type": "`$ARRAY`",
						"short": "Mid-year changes, or null.",
					},
					map[string]any{
						"name": "state",
						"title": "State",
						"type": "`$STRING`",
						"req": true,
						"short": "State slug for state-level programs (e.g.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Observed: `official`.",
					},
					map[string]any{
						"name": "verified_at",
						"title": "Verified At",
						"type": "`$STRING`",
						"req": true,
						"format": "date",
					},
					map[string]any{
						"name": "year",
						"title": "Year",
						"type": "`$INTEGER`",
						"req": true,
					},
				},
				"name": "year",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/{program}/{state}/{year}.json",
								"segments": []any{
									map[string]any{
										"var": "program",
									},
									map[string]any{
										"var": "state",
									},
									map[string]any{
										"lit": "{year}.json",
									},
								},
								"parts": []any{
									"{program}",
									"{state}",
									"{year}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "program",
											"orig": "program",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "minimum-wage",
										},
										map[string]any{
											"name": "state",
											"orig": "state",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "florida",
										},
										map[string]any{
											"name": "year",
											"orig": "year",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 2026,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"program",
										"state",
										"year",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/{program}/{year}.json",
								"segments": []any{
									map[string]any{
										"var": "program",
									},
									map[string]any{
										"lit": "{year}.json",
									},
								},
								"parts": []any{
									"{program}",
									"{year}.json",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "program",
											"orig": "program",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "hsa-contribution-limit",
										},
										map[string]any{
											"name": "year",
											"orig": "year",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
											"example": 2026,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"program",
										"year",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
