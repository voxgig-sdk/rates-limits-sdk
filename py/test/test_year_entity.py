# Year entity test

import json
import os
import time

import pytest

from rateslimits_sdk.utility.voxgig_struct import voxgig_struct as vs
from rateslimits_sdk import RatesLimitsSDK
from rateslimits_sdk.core import helpers
from rateslimits_sdk.config import shared_config
from rateslimits_sdk.feature.base_feature import RatesLimitsBaseFeature

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner



# main.kit.test.live.strict is true (the default is true): a live
# request that fails, or a live test missing an input it needs,
# fails the test.
# An account with no record for a test to read skips it either way.
LIVE_STRICT = True


class TestYearEntity:

    def test_should_create_instance(self):
        testsdk = RatesLimitsSDK.test(None, None)
        ent = testsdk.Year(None)
        assert ent is not None

    def test_should_refuse_an_invalid_request(self):
        if "validate" not in (shared_config().get("feature") or {}):
            pytest.skip("feature not present in this SDK: validate")
        client = RatesLimitsSDK.test(
            None, {"feature": {"validate": {"active": True}}})
        with pytest.raises(Exception) as err:
            client.Year(None).list({"program": 1, "year": 1}, None)
        assert "validate_failed" == getattr(err.value, "code", None)

    def test_should_run_basic_flow(self):
        setup = _year_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["list"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "year." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        if setup["live"]:
            for _live_key in ["program01", "year01"]:
                if setup.get("synthetic_only") or setup["idmap"].get(_live_key) is None:
                    runner.live_miss(LIVE_STRICT, f"Live entity test blocked: needs {_live_key} via RATES_LIMITS_TEST_YEAR_ENTID")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        year_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.year")))
        year_ref01_data = None
        if len(year_ref01_data_raw) > 0:
            year_ref01_data = helpers.to_map(year_ref01_data_raw[0][1])

        # LIST
        year_ref01_ent = client.Year(None)
        year_ref01_match = {
            "program": setup["idmap"]["program01"],
            "year": setup["idmap"]["year01"],
        }

        year_ref01_list_result = year_ref01_ent.list(year_ref01_match, None)
        assert isinstance(year_ref01_list_result, list)



def _year_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/year/YearTestData.json")
    with open(entity_data_file, "r", encoding="utf-8") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = RatesLimitsSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["year01", "year02", "year03", "program01"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Whether *_ENTID supplied the idmap, read before env_override consumes
    # it: without it, the ids a live flow binds are the fixture's synthetic ones.
    _entid_env_raw = os.environ.get(
        "RATES_LIMITS_TEST_YEAR_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "RATES_LIMITS_TEST_YEAR_ENTID": idmap,
        "RATES_LIMITS_TEST_LIVE": "FALSE",
        "RATES_LIMITS_TEST_EXPLAIN": "FALSE",
    })

    idmap_resolved = helpers.to_map(
        env.get("RATES_LIMITS_TEST_YEAR_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("RATES_LIMITS_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
            },
            extra or {},
        ])
        client = RatesLimitsSDK(helpers.to_map(merged_opts))

    _live = env.get("RATES_LIMITS_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("RATES_LIMITS_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
