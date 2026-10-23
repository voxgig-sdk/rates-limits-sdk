# Typed models for the RatesLimits SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Catalog(TypedDict):
    agency: str
    api_url: str
    category: str
    dimension: str
    name: str
    page_url: str
    program: str
    states: list
    years: list


class CatalogListMatch(TypedDict, total=False):
    agency: str
    api_url: str
    category: str
    dimension: str
    name: str
    page_url: str
    program: str
    states: list
    years: list


class LatestRequired(TypedDict):
    agency: str
    canonical_url: str
    category: str
    date_basis: str
    effective_date: str
    figures: list
    name: str
    program: str
    published_at: str
    state: str
    status: str
    verified_at: str
    year: int


class Latest(LatestRequired, total=False):
    estimate: dict
    explainers: list
    schedule: list


class LatestListMatch(TypedDict, total=False):
    agency: str
    canonical_url: str
    category: str
    date_basis: str
    effective_date: str
    estimate: dict
    explainers: list
    figures: list
    name: str
    program: str
    published_at: str
    schedule: list
    state: str
    status: str
    verified_at: str
    year: int


class ProgramRequired(TypedDict):
    agency: str
    canonical_url: str
    category: str
    date_basis: str
    effective_date: str
    figures: list
    name: str
    program: str
    published_at: str
    state: str
    status: str
    verified_at: str
    year: int


class Program(ProgramRequired, total=False):
    estimate: dict
    explainers: list
    schedule: list


class ProgramListMatch(TypedDict):
    program: str


class YearRequired(TypedDict):
    agency: str
    canonical_url: str
    category: str
    date_basis: str
    effective_date: str
    figures: list
    name: str
    program: str
    published_at: str
    state: str
    status: str
    verified_at: str
    year: int


class Year(YearRequired, total=False):
    estimate: dict
    explainers: list
    schedule: list


class YearListMatchRequired(TypedDict):
    program: str
    year: int


class YearListMatch(YearListMatchRequired, total=False):
    state: str
