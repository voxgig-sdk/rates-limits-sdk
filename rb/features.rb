# RatesLimits SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module RatesLimitsFeatures
  def self.make_feature(name)
    case name
    when "base"
      RatesLimitsBaseFeature.new
    when "ratelimit"
      RatesLimitsRatelimitFeature.new
    when "retry"
      RatesLimitsRetryFeature.new
    when "test"
      RatesLimitsTestFeature.new
    when "timeout"
      RatesLimitsTimeoutFeature.new
    else
      RatesLimitsBaseFeature.new
    end
  end
end
