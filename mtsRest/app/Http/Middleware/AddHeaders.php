<?php 

namespace App\Http\Middleware;

use Closure;

class AddHeaders
{
    public function handle($request, Closure $next)
    {
        $response = $next($request);
        $response->header('Access-Control-Allow-Origin', '*');
        $response->header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE');
        $response->header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization, X-Request-With, x-xsrf-token ');
        $response->header('Access-Control-Allow-Credentials', 'true');

        return $response;
    }
}
