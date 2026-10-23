<?php
declare(strict_types=1);

// Typed models for the RatesLimits SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Catalog entity data model. */
class Catalog
{
    public string $agency;
    public string $api_url;
    public string $category;
    public string $dimension;
    public string $name;
    public string $page_url;
    public string $program;
    public array $states;
    public array $years;
}

/** Request payload for Catalog#list. */
class CatalogListMatch
{
    public ?string $agency = null;
    public ?string $api_url = null;
    public ?string $category = null;
    public ?string $dimension = null;
    public ?string $name = null;
    public ?string $page_url = null;
    public ?string $program = null;
    public ?array $states = null;
    public ?array $years = null;
}

/** Latest entity data model. */
class Latest
{
    public string $agency;
    public string $canonical_url;
    public string $category;
    public string $date_basis;
    public string $effective_date;
    public ?array $estimate = null;
    public ?array $explainers = null;
    public array $figures;
    public string $name;
    public string $program;
    public string $published_at;
    public ?array $schedule = null;
    public string $state;
    public string $status;
    public string $verified_at;
    public int $year;
}

/** Request payload for Latest#list. */
class LatestListMatch
{
    public ?string $agency = null;
    public ?string $canonical_url = null;
    public ?string $category = null;
    public ?string $date_basis = null;
    public ?string $effective_date = null;
    public ?array $estimate = null;
    public ?array $explainers = null;
    public ?array $figures = null;
    public ?string $name = null;
    public ?string $program = null;
    public ?string $published_at = null;
    public ?array $schedule = null;
    public ?string $state = null;
    public ?string $status = null;
    public ?string $verified_at = null;
    public ?int $year = null;
}

/** Program entity data model. */
class Program
{
    public string $agency;
    public string $canonical_url;
    public string $category;
    public string $date_basis;
    public string $effective_date;
    public ?array $estimate = null;
    public ?array $explainers = null;
    public array $figures;
    public string $name;
    public string $program;
    public string $published_at;
    public ?array $schedule = null;
    public string $state;
    public string $status;
    public string $verified_at;
    public int $year;
}

/** Request payload for Program#list. */
class ProgramListMatch
{
    public string $program;
}

/** Year entity data model. */
class Year
{
    public string $agency;
    public string $canonical_url;
    public string $category;
    public string $date_basis;
    public string $effective_date;
    public ?array $estimate = null;
    public ?array $explainers = null;
    public array $figures;
    public string $name;
    public string $program;
    public string $published_at;
    public ?array $schedule = null;
    public string $state;
    public string $status;
    public string $verified_at;
    public int $year;
}

/** Request payload for Year#list. */
class YearListMatch
{
    public string $program;
    public ?string $state = null;
    public int $year;
}

