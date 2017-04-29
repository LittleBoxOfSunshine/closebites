<?php

function getDB() {
  $dbhost="localhost";
  $dbuser="root";
  $dbpass="Jaav13!@G";
  $dbname="closebites1";
  $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);
  $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  return $dbh;
}

// Routes


// *********************** testing ************************* //

$app->get('/temp', function($request, $response, $args){
   return $response->withJson(            [
                ['id'=>1,'name'=>"McDonald's",'description'=>"Deal 1 text",'type'=>'food'],
                ['id'=>2,'name'=>'Burger King','description'=>'Deal 2 text','type'=>'drink'],
                ['id'=>3,'name'=>'Chick Fil-A','description'=>'Deal 3 text','type'=>'drink'],
                ['id'=>4,'name'=>'Subway','description'=>'Deal 4 text','type'=>'food'],
                ['id'=>5,'name'=>'Pizzeria','description'=>'Deal 5 text','type'=>'food'],
                ['id'=>6,'name'=>'Jamba Juice','description'=>'Deal 6 text','type'=>'drink'],
            ]);
});

$app->get('api/find', function($request,$response,$args) {
    //$connection = $this->get("db");
    $dbhost="localhost";
    $dbuser="root";
    $dbpass="Jaav13!@G";
    $dbname="closebites1";
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $query="select * from deal";
    $result = $dbh->query($query);

    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        $data[] = $row;
    }
    return json_encode($data);

    //return "Welcome to Slim 3.0 based API";
});


// *********************** Vendor Collection ************************* //

$app->post('/create', function($request,$response,$args) {
    $name = $app->request->post('title');
    $description = $app->request->post('description');
    $query = "insert into deal (deal_id,category_id,vendor_id,title,image,description,type,created,last_updated,likes)
              values (0,0,0,"NOT FREE DRINKS","IMG","Free drinks with dinner purchase.",0,current_timestamp,current_timestamp,10)"
    try
    {
        $db = getDB();
    } catch(PDOException $e) {
        $app->response()->setStatus(404);
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
    return "POST /login";
});

$app->put('/publish', function($request,$response,$args) {
    return "PUT /publish";
});

$app->get('/calendar', function($request,$response,$args) {
    return "GET /calendar";
});

// *********************** User Collection ************************* //

$app->post('/login', function($request,$response,$args) {
    return "POST /login";
});

$app->put('/logout', function($request,$response,$args) {
    return "PUT /logout";
});

$app->get('/exists', function($request,$response,$args) {
    return "GET /exists";
});


// *********************** Consumer Collection ************************* //

$app->post('/favorite', function($request,$response,$args) {
    return "POST /favorite";
});

$app->post('/unfavorite', function($request,$response,$args) {
    return "POST /unfavorite";
});

$app->get('/findDeals', function($request,$response,$args) {
    return "GET /findDeals";
});

$app->get('/saveFilter', function($request,$response,$args) {
    return "GET /saveFilter";
});


// *********************** Deal Collection ************************* //

$app->get('/getFeedback', function($request,$response,$args) {
    return "GET /saveFilter";
});
