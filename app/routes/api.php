<?php
// Routes



$app->get('/', function($request,$response,$args) {
    return "Welcome to Slim 3.0 based API";
});

$app->post('/login', function($request,$response,$args) {
    return "POST /login";
});

$app->post('/register', function($request,$response,$args) {
    return "POST /register";
});

$app->post('/favorite', function($request,$response,$args) {
    return "POST /favorite";
});

$app->post('/unfavorite', function($request,$response,$args) {
    return "POST /unfavorite";
});

$app->get('/saveFilter', function($request,$response,$args) {
    return "GET /saveFilter";
});



