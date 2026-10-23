package voxgigrateslimitssdk

import (
	"github.com/voxgig-sdk/rates-limits-sdk/go/core"
	"github.com/voxgig-sdk/rates-limits-sdk/go/entity"
	"github.com/voxgig-sdk/rates-limits-sdk/go/feature"
	_ "github.com/voxgig-sdk/rates-limits-sdk/go/utility"
)

// Type aliases preserve external API.
type RatesLimitsSDK = core.RatesLimitsSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type RatesLimitsEntity = core.RatesLimitsEntity
type StreamItem = core.StreamItem
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type RatesLimitsError = core.RatesLimitsError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewCatalogEntityFunc = func(client *core.RatesLimitsSDK, entopts map[string]any) core.RatesLimitsEntity {
		return entity.NewCatalogEntity(client, entopts)
	}
	core.NewLatestEntityFunc = func(client *core.RatesLimitsSDK, entopts map[string]any) core.RatesLimitsEntity {
		return entity.NewLatestEntity(client, entopts)
	}
	core.NewProgramEntityFunc = func(client *core.RatesLimitsSDK, entopts map[string]any) core.RatesLimitsEntity {
		return entity.NewProgramEntity(client, entopts)
	}
	core.NewYearEntityFunc = func(client *core.RatesLimitsSDK, entopts map[string]any) core.RatesLimitsEntity {
		return entity.NewYearEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewRatesLimitsSDK = core.NewRatesLimitsSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewRatesLimitsSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *RatesLimitsSDK  { return NewRatesLimitsSDK(nil) }
func Test() *RatesLimitsSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
