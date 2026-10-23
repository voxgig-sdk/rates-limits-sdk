# RatesLimits SDK feature factory

from rateslimits_sdk.feature.base_feature import RatesLimitsBaseFeature
from rateslimits_sdk.feature.ratelimit_feature import RatesLimitsRatelimitFeature
from rateslimits_sdk.feature.retry_feature import RatesLimitsRetryFeature
from rateslimits_sdk.feature.test_feature import RatesLimitsTestFeature
from rateslimits_sdk.feature.timeout_feature import RatesLimitsTimeoutFeature


_FEATURES = {
    "base": lambda: RatesLimitsBaseFeature(),
    "ratelimit": lambda: RatesLimitsRatelimitFeature(),
    "retry": lambda: RatesLimitsRetryFeature(),
    "test": lambda: RatesLimitsTestFeature(),
    "timeout": lambda: RatesLimitsTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
