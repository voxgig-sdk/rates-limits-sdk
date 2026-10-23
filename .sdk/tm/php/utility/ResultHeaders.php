<?php
declare(strict_types=1);

// RatesLimits SDK utility: result_headers

class RatesLimitsResultHeaders
{
    public static function call(RatesLimitsContext $ctx): ?RatesLimitsResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
