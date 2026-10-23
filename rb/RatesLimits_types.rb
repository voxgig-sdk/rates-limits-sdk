# frozen_string_literal: true

# Typed models for the RatesLimits SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Catalog entity data model.
#
# @!attribute [rw] agency
#   @return [String]
#
# @!attribute [rw] api_url
#   @return [String]
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] dimension
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] page_url
#   @return [String]
#
# @!attribute [rw] program
#   @return [String]
#
# @!attribute [rw] states
#   @return [Array]
#
# @!attribute [rw] years
#   @return [Array]
Catalog = Struct.new(
  :agency,
  :api_url,
  :category,
  :dimension,
  :name,
  :page_url,
  :program,
  :states,
  :years,
  keyword_init: true
)

# Request payload for Catalog#list.
#
# @!attribute [rw] agency
#   @return [String, nil]
#
# @!attribute [rw] api_url
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] dimension
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] page_url
#   @return [String, nil]
#
# @!attribute [rw] program
#   @return [String, nil]
#
# @!attribute [rw] states
#   @return [Array, nil]
#
# @!attribute [rw] years
#   @return [Array, nil]
CatalogListMatch = Struct.new(
  :agency,
  :api_url,
  :category,
  :dimension,
  :name,
  :page_url,
  :program,
  :states,
  :years,
  keyword_init: true
)

# Latest entity data model.
#
# @!attribute [rw] agency
#   @return [String]
#
# @!attribute [rw] canonical_url
#   @return [String]
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] date_basis
#   @return [String]
#
# @!attribute [rw] effective_date
#   @return [String]
#
# @!attribute [rw] estimate
#   @return [Hash, nil]
#
# @!attribute [rw] explainers
#   @return [Array, nil]
#
# @!attribute [rw] figures
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] program
#   @return [String]
#
# @!attribute [rw] published_at
#   @return [String]
#
# @!attribute [rw] schedule
#   @return [Array, nil]
#
# @!attribute [rw] state
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] verified_at
#   @return [String]
#
# @!attribute [rw] year
#   @return [Integer]
Latest = Struct.new(
  :agency,
  :canonical_url,
  :category,
  :date_basis,
  :effective_date,
  :estimate,
  :explainers,
  :figures,
  :name,
  :program,
  :published_at,
  :schedule,
  :state,
  :status,
  :verified_at,
  :year,
  keyword_init: true
)

# Request payload for Latest#list.
#
# @!attribute [rw] agency
#   @return [String, nil]
#
# @!attribute [rw] canonical_url
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] date_basis
#   @return [String, nil]
#
# @!attribute [rw] effective_date
#   @return [String, nil]
#
# @!attribute [rw] estimate
#   @return [Hash, nil]
#
# @!attribute [rw] explainers
#   @return [Array, nil]
#
# @!attribute [rw] figures
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] program
#   @return [String, nil]
#
# @!attribute [rw] published_at
#   @return [String, nil]
#
# @!attribute [rw] schedule
#   @return [Array, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] verified_at
#   @return [String, nil]
#
# @!attribute [rw] year
#   @return [Integer, nil]
LatestListMatch = Struct.new(
  :agency,
  :canonical_url,
  :category,
  :date_basis,
  :effective_date,
  :estimate,
  :explainers,
  :figures,
  :name,
  :program,
  :published_at,
  :schedule,
  :state,
  :status,
  :verified_at,
  :year,
  keyword_init: true
)

# Program entity data model.
#
# @!attribute [rw] agency
#   @return [String]
#
# @!attribute [rw] canonical_url
#   @return [String]
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] date_basis
#   @return [String]
#
# @!attribute [rw] effective_date
#   @return [String]
#
# @!attribute [rw] estimate
#   @return [Hash, nil]
#
# @!attribute [rw] explainers
#   @return [Array, nil]
#
# @!attribute [rw] figures
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] program
#   @return [String]
#
# @!attribute [rw] published_at
#   @return [String]
#
# @!attribute [rw] schedule
#   @return [Array, nil]
#
# @!attribute [rw] state
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] verified_at
#   @return [String]
#
# @!attribute [rw] year
#   @return [Integer]
Program = Struct.new(
  :agency,
  :canonical_url,
  :category,
  :date_basis,
  :effective_date,
  :estimate,
  :explainers,
  :figures,
  :name,
  :program,
  :published_at,
  :schedule,
  :state,
  :status,
  :verified_at,
  :year,
  keyword_init: true
)

# Request payload for Program#list.
#
# @!attribute [rw] program
#   @return [String]
ProgramListMatch = Struct.new(
  :program,
  keyword_init: true
)

# Year entity data model.
#
# @!attribute [rw] agency
#   @return [String]
#
# @!attribute [rw] canonical_url
#   @return [String]
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] date_basis
#   @return [String]
#
# @!attribute [rw] effective_date
#   @return [String]
#
# @!attribute [rw] estimate
#   @return [Hash, nil]
#
# @!attribute [rw] explainers
#   @return [Array, nil]
#
# @!attribute [rw] figures
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] program
#   @return [String]
#
# @!attribute [rw] published_at
#   @return [String]
#
# @!attribute [rw] schedule
#   @return [Array, nil]
#
# @!attribute [rw] state
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] verified_at
#   @return [String]
#
# @!attribute [rw] year
#   @return [Integer]
Year = Struct.new(
  :agency,
  :canonical_url,
  :category,
  :date_basis,
  :effective_date,
  :estimate,
  :explainers,
  :figures,
  :name,
  :program,
  :published_at,
  :schedule,
  :state,
  :status,
  :verified_at,
  :year,
  keyword_init: true
)

# Request payload for Year#list.
#
# @!attribute [rw] program
#   @return [String]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] year
#   @return [Integer]
YearListMatch = Struct.new(
  :program,
  :state,
  :year,
  keyword_init: true
)

