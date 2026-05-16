<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CloudinarySignatureController extends Controller
{
    /**
     * Generate a secure cryptographic upload signature for the frontend.
     */
    public function generate(Request $request)
    {
        // 1. Generate a UNIX timestamp (Valid for 1 hour by default)
        $timestamp = time();
        $preset = env('CLOUDINARY_UPLOAD_PRESET', 'ecommerce_products');

        // 2. Define parameters to sign (Must exactly match frontend parameters)
        $paramsToSign = [
            'timestamp' => $timestamp,
            'upload_preset' => $preset,
        ];

        // 3. Sort keys alphabetically (Mandatory requirement by Cloudinary)
        ksort($paramsToSign);

        // 4. Transform array to a string query format (e.g., 'timestamp=1234&upload_preset=xyz')
        $serializedParams = http_build_query($paramsToSign);

        // 5. Securely parse the API secret, API key, and Cloud Name out of CLOUDINARY_URL
        $parsedUrl = parse_url(env('CLOUDINARY_URL'));
        $apiKey = $parsedUrl['user'] ?? '';
        $apiSecret = $parsedUrl['pass'] ?? '';
        $cloudName = $parsedUrl['host'] ?? '';

        // 6. Generate the SHA-1 signature string
        $signature = sha1($serializedParams . $apiSecret);

        // 7. Return payload to Vue frontend
        return response()->json([
            'signature' => $signature,
            'timestamp' => $timestamp,
            'api_key' => $apiKey,
            'cloud_name' => $cloudName,
            'upload_preset' => $preset
        ], 200);
    }
}
