// Typed models for the RatesLimits SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Catalog {
  agency: string
  api_url: string
  category: string
  dimension: string
  name: string
  page_url: string
  program: string
  states: any[]
  years: any[]
}

export interface CatalogListMatch {
  agency?: string
  api_url?: string
  category?: string
  dimension?: string
  name?: string
  page_url?: string
  program?: string
  states?: any[]
  years?: any[]
}

export interface Latest {
  agency: string
  canonical_url: string
  category: string
  date_basis: string
  effective_date: string
  estimate?: Record<string, any>
  explainers?: any[]
  figures: any[]
  name: string
  program: string
  published_at: string
  schedule?: any[]
  state: string
  status: string
  verified_at: string
  year: number
}

export interface LatestListMatch {
  agency?: string
  canonical_url?: string
  category?: string
  date_basis?: string
  effective_date?: string
  estimate?: Record<string, any>
  explainers?: any[]
  figures?: any[]
  name?: string
  program?: string
  published_at?: string
  schedule?: any[]
  state?: string
  status?: string
  verified_at?: string
  year?: number
}

export interface Program {
  agency: string
  canonical_url: string
  category: string
  date_basis: string
  effective_date: string
  estimate?: Record<string, any>
  explainers?: any[]
  figures: any[]
  name: string
  program: string
  published_at: string
  schedule?: any[]
  state: string
  status: string
  verified_at: string
  year: number
}

export interface ProgramListMatch {
  program: string
}

export interface Year {
  agency: string
  canonical_url: string
  category: string
  date_basis: string
  effective_date: string
  estimate?: Record<string, any>
  explainers?: any[]
  figures: any[]
  name: string
  program: string
  published_at: string
  schedule?: any[]
  state: string
  status: string
  verified_at: string
  year: number
}

export interface YearListMatch {
  program: string
  state?: string
  year: number
}

