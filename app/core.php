<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');
ini_set('display_startup_errors', 'On');

session_start();

use \Slim\Http\Request as Request;
use \Slim\Http\Response as Response;

require 'vendor/autoload.php';

// Create and configure slim app
$config = ['settings' => [
    'displayErrorDetails' => true, // set to false in production
    'addContentLengthHeader' => false, // Allow the web server to send the content-length header
]];

$app = new \Slim\App($config);

require_once __DIR__.'/api/api.php';

$app->run();
