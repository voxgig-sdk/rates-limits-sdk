# RatesLimits SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

RatesLimitsUtility.registrar = ->(u) {
  u.clean = RatesLimitsUtilities::Clean
  u.clean_add = RatesLimitsUtilities::CleanAdd
  u.clean_explain = RatesLimitsUtilities::CleanExplain
  u.done = RatesLimitsUtilities::Done
  u.make_error = RatesLimitsUtilities::MakeError
  u.feature_add = RatesLimitsUtilities::FeatureAdd
  u.feature_hook = RatesLimitsUtilities::FeatureHook
  u.feature_init = RatesLimitsUtilities::FeatureInit
  u.fetcher = RatesLimitsUtilities::Fetcher
  u.make_fetch_def = RatesLimitsUtilities::MakeFetchDef
  u.make_context = RatesLimitsUtilities::MakeContext
  u.make_options = RatesLimitsUtilities::MakeOptions
  u.make_request = RatesLimitsUtilities::MakeRequest
  u.make_response = RatesLimitsUtilities::MakeResponse
  u.make_result = RatesLimitsUtilities::MakeResult
  u.make_point = RatesLimitsUtilities::MakePoint
  u.make_spec = RatesLimitsUtilities::MakeSpec
  u.make_url = RatesLimitsUtilities::MakeUrl
  u.param = RatesLimitsUtilities::Param
  u.prepare_auth = RatesLimitsUtilities::PrepareAuth
  u.prepare_body = RatesLimitsUtilities::PrepareBody
  u.prepare_headers = RatesLimitsUtilities::PrepareHeaders
  u.prepare_method = RatesLimitsUtilities::PrepareMethod
  u.prepare_params = RatesLimitsUtilities::PrepareParams
  u.prepare_path = RatesLimitsUtilities::PreparePath
  u.prepare_query = RatesLimitsUtilities::PrepareQuery
  u.graphql_body = RatesLimitsUtilities::GraphqlBody
  u.graphql_errors = RatesLimitsUtilities::GraphqlErrors
  u.result_basic = RatesLimitsUtilities::ResultBasic
  u.result_body = RatesLimitsUtilities::ResultBody
  u.result_headers = RatesLimitsUtilities::ResultHeaders
  u.transform_request = RatesLimitsUtilities::TransformRequest
  u.transform_response = RatesLimitsUtilities::TransformResponse
}
