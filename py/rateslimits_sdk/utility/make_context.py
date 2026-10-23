# RatesLimits SDK utility: make_context

from rateslimits_sdk.core.context import RatesLimitsContext


def make_context_util(ctxmap, basectx):
    return RatesLimitsContext(ctxmap, basectx)
