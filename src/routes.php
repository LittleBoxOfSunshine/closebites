<?php
function getDB() {
  $dbhost="localhost";
  $dbuser="root";
  $dbpass="pass"; # CHANGE LATER
  $dbname="closebites";
  $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);
  $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  return $dbh;
}
// Routes
$app->get('/', function ($request, $response, $args) {
    // Sample log message
    // Render index view
    return "hello";
});
$app->group('/api', function() use ($app) {
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
    $app->group('/User', function() use ($app) {
        $app->post('/login', function($request,$response,$args) {
            /**
             *  THIS IS A HARDCODED TEST RESPONSE FOR FRONTEND TESTING
             */
            $body = $request->getParsedBody();
            if($body['email'] != 'vendor') {
                return $response->withJson([
                    'id'=> 0,
                    'name' => 'John Doe',
                    'accountType' => 'consumer',
                    'favorites' => [0, 1],
                    'filters' => [
                        [
                            'name' => 'Chinese Food',
                            'filterID' => 0,
                            'filters' => [
                                [
                                    'type' => 'food',
                                    'cuisine' => 'chinese'
                                ]
                            ]
                        ],
                        [
                            'name' => 'Drinks',
                            'filterID' => 1,
                            'filters' => [
                                [
                                    'type' => 'drinks'
                                ]
                            ]
                        ]
                    ]
                ]);
            }
            else {
                return $response->withJson([
                    'id'=> 0,
                    'name' => 'Tacos y Mas',
                    'accountType' => 'vendor',
                    'address' => '123 fake street',
                    'calendar' => [
                        [
                            'name' => 'Taco Tuesday',
                            'id' => 0,
                            'start' => '2016/05/15 15:0',
                            'end' => '2016/05/15 19:00',
                            'repeat' => '0010000'
                        ],
                        [
                            'name' => 'Thirsty Thursday',
                            'id' => 1,
                            'start' => '2016/05/15 17:30',
                            'end' => '2016/05/15 19:30',
                            'repeat' => '0000100'
                        ]
                    ]
                ]);
            }
        });
        $app->post('/register', function($request,$response,$args) {
            /**
             *  THIS IS A HARDCODED TEST RESPONSE FOR FRONTEND TESTING
             */
            $body = $request->getParsedBody();
            if($body['accountType'] == 'consumer') {
                return $response->withJson([
                    'id'=> 0,
                    'name' => 'John Doe',
                    'accountType' => 'consumer',
                    'favorites' => [0, 1],
                    'filters' => [
                        [
                            'name' => 'Chinese Food',
                            'filterID' => 0,
                            'filters' => [
                                [
                                    'type' => 'food',
                                    'cuisine' => 'chinese'
                                ]
                            ]
                        ],
                        [
                            'name' => 'Drinks',
                            'filterID' => 1,
                            'filters' => [
                                [
                                    'type' => 'drinks'
                                ]
                            ]
                        ]
                    ]
                ]);
            }
            else if($body['accountType'] == 'vendor') {
                return $response->withJson([
                    'id'=> 0,
                    'name' => 'Tacos y Mas',
                    'accountType' => 'vendor',
                    'address' => '123 fake street',
                    'calendar' => [
                        [
                            'name' => 'Taco Tuesday',
                            'id' => 0,
                            'start' => '2016/05/15 15:0',
                            'end' => '2016/05/15 19:00',
                            'repeat' => '0010000'
                        ],
                        [
                            'name' => 'Thirsty Thursday',
                            'id' => 1,
                            'start' => '2016/05/15 17:30',
                            'end' => '2016/05/15 19:30',
                            'repeat' => '0000100'
                        ]
                    ]
                ]);
            }
            else {
                return $response->withStatus(422);
            }
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
    });
});
$app->post('/login', function($request,$response,$args) {
    $body = $request->getParsedBody();
    $email = $body['email'];
    $password = $body['password'];
    if($body['email'] == 'consumer') {
    }
    $query = "SELECT email FROM user WHERE user.email = '$email' AND user.password = '$password'";
    $db = getDB();
    $result = $db->query($query);
    if($result != null) {
      return "200";
    } else {
      return "400";
    }
    return $body['email'];
});
$app->get('/find', function($request,$response,$args) {
    //$connection = $this->get("db");
    $dbhost="localhost";
    $dbuser="root";
    $dbpass="pass";
    $dbname="closebites";
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

$app->get('/favorite', function($request,$response,$args) {

  $dbhost="localhost";
  $dbuser="root";
  $dbpass="pass";
  $dbname="closebites";
  $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);
  $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $query="select * from deal";
  $result = $dbh->query($query);
  while($row = $result->fetch(PDO::FETCH_ASSOC)){
      $data[] = $row;
  }
  return json_encode($data);
});

$app->post('/unfavorite', function($request,$response,$args) {

});

$app->post('/saveFilter', function($request,$response,$args) {

});

$app->post('/unsaveFilter', function($request,$response,$args) {

});
