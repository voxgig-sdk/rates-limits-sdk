# RatesLimits SDK utility: prepare_body
require_relative 'media'
module RatesLimitsUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return RatesLimitsUtilities.raw_body(ctx.reqdata) if RatesLimitsUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
