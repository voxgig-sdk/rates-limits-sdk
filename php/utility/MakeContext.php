<?php
declare(strict_types=1);

// RatesLimits SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class RatesLimitsMakeContext
{
    public static function call(array $ctxmap, ?RatesLimitsContext $basectx): RatesLimitsContext
    {
        return new RatesLimitsContext($ctxmap, $basectx);
    }
}
