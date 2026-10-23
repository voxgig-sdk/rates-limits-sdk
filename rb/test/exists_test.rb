# RatesLimits SDK exists test

require "minitest/autorun"
require_relative "../RatesLimits_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = RatesLimitsSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
