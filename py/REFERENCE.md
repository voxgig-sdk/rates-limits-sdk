# RatesLimits Python SDK Reference

Complete API reference for the RatesLimits Python SDK.


## RatesLimitsSDK

### Constructor

```python
from rateslimits_sdk import RatesLimitsSDK

client = RatesLimitsSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `RatesLimitsSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = RatesLimitsSDK.test()
```


### Instance Methods

#### `Catalog(data=None)`

Create a new `CatalogEntity` instance. Pass `None` for no initial data.

#### `Latest(data=None)`

Create a new `LatestEntity` instance. Pass `None` for no initial data.

#### `Program(data=None)`

Create a new `ProgramEntity` instance. Pass `None` for no initial data.

#### `Year(data=None)`

Create a new `YearEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## CatalogEntity

```python
catalog = client.Catalog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agency` | `str` | Yes |  |
| `api_url` | `str` | Yes |  |
| `category` | `str` | Yes |  |
| `dimension` | `str` | Yes | `year` for federal programs, `state-year` for state-level ones. |
| `name` | `str` | Yes |  |
| `page_url` | `str` | Yes |  |
| `program` | `str` | Yes | Program slug, the `{program}` path parameter. |
| `states` | `list` | Yes | State slugs published (empty for year programs). |
| `years` | `list` | Yes | Years published (empty for state-year programs). |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[CatalogEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Catalog().list()
for catalog in results:
    print(catalog.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CatalogEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LatestEntity

```python
latest = client.Latest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agency` | `str` | Yes |  |
| `canonical_url` | `str` | Yes |  |
| `category` | `str` | Yes |  |
| `date_basis` | `str` | Yes | Observed: `effective`, `as-of`. |
| `effective_date` | `str` | Yes |  |
| `estimate` | `dict` | No | Estimate block (formula and inputs) for derived figures. |
| `explainers` | `list` | No | Explanatory notes, or null. |
| `figures` | `list` | Yes |  |
| `name` | `str` | Yes |  |
| `program` | `str` | Yes | Program slug, e.g. |
| `published_at` | `str` | Yes |  |
| `schedule` | `list` | No | Mid-year changes, or null. |
| `state` | `str` | Yes | State slug for state-level programs (e.g. |
| `status` | `str` | Yes | Observed: `official`. |
| `verified_at` | `str` | Yes |  |
| `year` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[LatestEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Latest().list()
for latest in results:
    print(latest.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LatestEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProgramEntity

```python
program = client.Program()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agency` | `str` | Yes |  |
| `canonical_url` | `str` | Yes |  |
| `category` | `str` | Yes |  |
| `date_basis` | `str` | Yes | Observed: `effective`, `as-of`. |
| `effective_date` | `str` | Yes |  |
| `estimate` | `dict` | No | Estimate block (formula and inputs) for derived figures. |
| `explainers` | `list` | No | Explanatory notes, or null. |
| `figures` | `list` | Yes |  |
| `name` | `str` | Yes |  |
| `program` | `str` | Yes | Program slug, e.g. |
| `published_at` | `str` | Yes |  |
| `schedule` | `list` | No | Mid-year changes, or null. |
| `state` | `str` | Yes | State slug for state-level programs (e.g. |
| `status` | `str` | Yes | Observed: `official`. |
| `verified_at` | `str` | Yes |  |
| `year` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[ProgramEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Program().list({"program": "example"})
for program in results:
    print(program.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProgramEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## YearEntity

```python
year = client.Year()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `agency` | `str` | Yes |  |
| `canonical_url` | `str` | Yes |  |
| `category` | `str` | Yes |  |
| `date_basis` | `str` | Yes | Observed: `effective`, `as-of`. |
| `effective_date` | `str` | Yes |  |
| `estimate` | `dict` | No | Estimate block (formula and inputs) for derived figures. |
| `explainers` | `list` | No | Explanatory notes, or null. |
| `figures` | `list` | Yes |  |
| `name` | `str` | Yes |  |
| `program` | `str` | Yes | Program slug, e.g. |
| `published_at` | `str` | Yes |  |
| `schedule` | `list` | No | Mid-year changes, or null. |
| `state` | `str` | Yes | State slug for state-level programs (e.g. |
| `status` | `str` | Yes | Observed: `official`. |
| `verified_at` | `str` | Yes |  |
| `year` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[YearEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Year().list({"program": "example", "year": 1})
for year in results:
    print(year.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `YearEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```python
client = RatesLimitsSDK({
    "feature": {
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `ratelimit`

Rate limiting.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Retry.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Timeout.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `now` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

