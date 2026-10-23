// Typed models for the RatesLimits SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/rates-limits-sdk/go/core"
)

// Catalog is the typed data model for the catalog entity.
type Catalog struct {
}

// CatalogListMatch is the typed request payload for Catalog.ListTyped.
type CatalogListMatch struct {
	Agency *string `json:"agency,omitempty"`
	ApiUrl *string `json:"api_url,omitempty"`
	Category *string `json:"category,omitempty"`
	Dimension *string `json:"dimension,omitempty"`
	Name *string `json:"name,omitempty"`
	PageUrl *string `json:"page_url,omitempty"`
	Program *string `json:"program,omitempty"`
	States *[]any `json:"states,omitempty"`
	Years *[]any `json:"years,omitempty"`
}

// Latest is the typed data model for the latest entity.
type Latest struct {
}

// LatestListMatch is the typed request payload for Latest.ListTyped.
type LatestListMatch struct {
	Agency *string `json:"agency,omitempty"`
	CanonicalUrl *string `json:"canonical_url,omitempty"`
	Category *string `json:"category,omitempty"`
	DateBasis *string `json:"date_basis,omitempty"`
	EffectiveDate *string `json:"effective_date,omitempty"`
	Estimate *map[string]any `json:"estimate,omitempty"`
	Explainers *[]any `json:"explainers,omitempty"`
	Figures *[]any `json:"figures,omitempty"`
	Name *string `json:"name,omitempty"`
	Program *string `json:"program,omitempty"`
	PublishedAt *string `json:"published_at,omitempty"`
	Schedule *[]any `json:"schedule,omitempty"`
	State *string `json:"state,omitempty"`
	Status *string `json:"status,omitempty"`
	VerifiedAt *string `json:"verified_at,omitempty"`
	Year *int `json:"year,omitempty"`
}

// Program is the typed data model for the program entity.
type Program struct {
}

// ProgramListMatch is the typed request payload for Program.ListTyped.
type ProgramListMatch struct {
	Program string `json:"program"`
}

// Year is the typed data model for the year entity.
type Year struct {
}

// YearListMatch is the typed request payload for Year.ListTyped.
type YearListMatch struct {
	Program string `json:"program"`
	State *string `json:"state,omitempty"`
	Year int `json:"year"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
