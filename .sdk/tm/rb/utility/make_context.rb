# RatesLimits SDK utility: make_context
require_relative '../core/context'
module RatesLimitsUtilities
  MakeContext = ->(ctxmap, basectx) {
    RatesLimitsContext.new(ctxmap, basectx)
  }
end
