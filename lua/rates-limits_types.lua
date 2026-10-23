-- Typed models for the RatesLimits SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Catalog
---@field agency string
---@field api_url string
---@field category string
---@field dimension string
---@field name string
---@field page_url string
---@field program string
---@field states table
---@field years table

---@class CatalogListMatch
---@field agency? string
---@field api_url? string
---@field category? string
---@field dimension? string
---@field name? string
---@field page_url? string
---@field program? string
---@field states? table
---@field years? table

---@class Latest
---@field agency string
---@field canonical_url string
---@field category string
---@field date_basis string
---@field effective_date string
---@field estimate? table
---@field explainers? table
---@field figures table
---@field name string
---@field program string
---@field published_at string
---@field schedule? table
---@field state string
---@field status string
---@field verified_at string
---@field year number

---@class LatestListMatch
---@field agency? string
---@field canonical_url? string
---@field category? string
---@field date_basis? string
---@field effective_date? string
---@field estimate? table
---@field explainers? table
---@field figures? table
---@field name? string
---@field program? string
---@field published_at? string
---@field schedule? table
---@field state? string
---@field status? string
---@field verified_at? string
---@field year? number

---@class Program
---@field agency string
---@field canonical_url string
---@field category string
---@field date_basis string
---@field effective_date string
---@field estimate? table
---@field explainers? table
---@field figures table
---@field name string
---@field program string
---@field published_at string
---@field schedule? table
---@field state string
---@field status string
---@field verified_at string
---@field year number

---@class ProgramListMatch
---@field program string

---@class Year
---@field agency string
---@field canonical_url string
---@field category string
---@field date_basis string
---@field effective_date string
---@field estimate? table
---@field explainers? table
---@field figures table
---@field name string
---@field program string
---@field published_at string
---@field schedule? table
---@field state string
---@field status string
---@field verified_at string
---@field year number

---@class YearListMatch
---@field program string
---@field state? string
---@field year number

local M = {}

return M
