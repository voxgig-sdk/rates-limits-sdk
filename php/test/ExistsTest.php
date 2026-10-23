<?php
declare(strict_types=1);

// RatesLimits SDK exists test

require_once __DIR__ . '/../rateslimits_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = RatesLimitsSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
