-- RatesLimits SDK exists test

local sdk = require("rates-limits_sdk")

describe("RatesLimitsSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
