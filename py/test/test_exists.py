# RatesLimits SDK exists test

import pytest
from rateslimits_sdk import RatesLimitsSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = RatesLimitsSDK.test(None, None)
        assert testsdk is not None
