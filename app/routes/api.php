<?php
// Routes

$app->get('/temp', function($request, $response, $args){
   return $response->withJson(            ['deals' => [
                ['id'=>1,'name'=>"McDonald's",'description'=>"Deal 1 text",'type'=>'food'],
                ['id'=>2,'name'=>'Burger King','description'=>'Deal 2 text','type'=>'drink'],
                ['id'=>3,'name'=>'Chick Fil-A','description'=>'Deal 3 text','type'=>'drink'],
                ['id'=>4,'name'=>'Subway','description'=>'Deal 4 text','type'=>'food'],
                ['id'=>5,'name'=>'Pizzeria','description'=>'Deal 5 text','type'=>'food'],
                ['id'=>6,'name'=>'Jamba Juice','description'=>'Deal 6 text','type'=>'drink'],
            ]]);
});

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



