<?php
declare(strict_types=1);

// RatesLimits SDK base feature

class RatesLimitsBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(RatesLimitsContext $ctx, array $options): void {}
    public function PostConstruct(RatesLimitsContext $ctx): void {}
    public function PostConstructEntity(RatesLimitsContext $ctx): void {}
    public function SetData(RatesLimitsContext $ctx): void {}
    public function GetData(RatesLimitsContext $ctx): void {}
    public function GetMatch(RatesLimitsContext $ctx): void {}
    public function SetMatch(RatesLimitsContext $ctx): void {}
    public function PrePoint(RatesLimitsContext $ctx): void {}
    public function PreSpec(RatesLimitsContext $ctx): void {}
    public function PreRequest(RatesLimitsContext $ctx): void {}
    public function PreResponse(RatesLimitsContext $ctx): void {}
    public function PreResult(RatesLimitsContext $ctx): void {}
    public function PreDone(RatesLimitsContext $ctx): void {}
    public function PreUnexpected(RatesLimitsContext $ctx): void {}
}
