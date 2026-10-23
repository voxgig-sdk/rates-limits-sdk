package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewCatalogEntityFunc func(client *RatesLimitsSDK, entopts map[string]any) RatesLimitsEntity

var NewLatestEntityFunc func(client *RatesLimitsSDK, entopts map[string]any) RatesLimitsEntity

var NewProgramEntityFunc func(client *RatesLimitsSDK, entopts map[string]any) RatesLimitsEntity

var NewYearEntityFunc func(client *RatesLimitsSDK, entopts map[string]any) RatesLimitsEntity

