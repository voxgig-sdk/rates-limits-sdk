package sdktest

import (
	"testing"

	sdk "github.com/voxgig-sdk/rates-limits-sdk/go"
)

func TestExists(t *testing.T) {
	t.Run("test-mode", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		if testsdk == nil {
			t.Fatal("expected non-nil SDK")
		}
	})
}
