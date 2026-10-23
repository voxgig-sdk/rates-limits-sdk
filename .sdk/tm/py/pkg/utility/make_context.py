# RatesLimits SDK utility: make_context

from projectname_sdk.core.context import RatesLimitsContext


def make_context_util(ctxmap, basectx):
    return RatesLimitsContext(ctxmap, basectx)
