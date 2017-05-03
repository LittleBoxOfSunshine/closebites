<?php

//set up global session to save user_id and vendor_id
session_start();

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

        $app->get('/exists', function($request,$response,$args) {
          $body = $request->getParsedBody();
          $email = $body['email'];
          $password = $body['password'];
          $type = $body['email'];
          if($type == 'consumer') {
            $query = "SELECT email FROM user WHERE user.email = '$email' AND user.password = '$password'";
            $db = getDB();
            $result = $db->query($query);
            if($result) {
              return "200";
            } else {
              return "400";
            }
          }
          else {
            if($body['email'] == 'vendor') {
              $query = "SELECT email FROM user WHERE user.email = '$email' AND user.password = '$password'";
              $db = getDB();
              $result = $db->query($query);
              if($result) {
                return "200";
              } else {
                return "400";
              }
            }
          }
        });

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
                            'repeats' => '0010000'
                        ],
                        [
                            'name' => 'Thirsty Thursday',
                            'id' => 1,
                            'start' => '2016/05/15 17:30',
                            'end' => '2016/05/15 19:30',
                            'repeats' => '0000100'
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
             $email = $body['email'];
             $password = $body['password'];
             $options = [
               'cost' => 11,
               'salt' => mcrypt_create_iv(22, MCRYPT_DEV_URANDOM),
             ];
             $hash = password_hash($password, PASSWORD_BCRYPT, $options);
            //  return $hash;
             $query = "INSERT INTO user (user_id, email, password) VALUES (6, '$email', '$hash')";
             $db = getDB();
             $db->query($query);
            //  if($result) {
            //    return "200";
            //  } else {
            //    return "400";
            //  }
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
                            'repeats' => '0010000'
                        ],
                        [
                            'name' => 'Thirsty Thursday',
                            'id' => 1,
                            'start' => '2016/05/15 17:30',
                            'end' => '2016/05/15 19:30',
                            'repeats' => '0000100'
                        ]
                    ]
                ]);
            }
            else {
                return $response->withStatus(422);
            }
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
            return "POST /unfavorite";
        });
        $app->get('/saveFilter', function($request,$response,$args) {
            return $response->withJson([
                'id'=> 0,
                'name' => 'Steak n shake',
                'accountType' => 'vendor',
                'address' => '123 fake street',
                'calendar' => [
                    [
                        'name' => 'Drinks Tuesday',
                        'id' => 0,
                        'start' => '2016/05/15 15:0',
                        'end' => '2016/05/15 19:00',
                        'repeats' => '0010000'
                    ],
                    [
                        'name' => 'Shakes Saturday',
                        'id' => 1,
                        'start' => '2016/05/15 17:30',
                        'end' => '2016/05/15 19:30',
                        'repeats' => '0000100'
                    ]
                ]
            ]);
            // return "GET /saveFilter";
        });
    });
});

$app->post('/login', function($request,$response,$args) {
    $body = $request->getParsedBody();
    $email = $body['email'];
    $password = $body['password'];

/*
    if($body['email'] == 'matt') {
      return "200";
    } else {
      return "400";
    }

*/

    $query = "SELECT email,user_id FROM user WHERE user.email = '$email' AND user.password = '$password'";
    $db = getDB();
    $result = $db->query($query);

    //store user_id into SESSION array
    $row = $result->fetch(PDO::FETCH_ASSOC);
    $_SESSION['user_id'] = $row['user_id'];

    if($result) {
      return "200";
    } else {
      return "400";
    }

    return $body['email'];
});
$app->get('/findAll', function($request,$response,$args) {
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
    

$app->group('/Vendor', function() use ($app) {

   // vendor/create route
   $app->post('/create', function($request,$response) {

      //run the connection to the database again 
      $dbh = getDB();

      //parse request
      $body = $request->getParsedBody();
      
      //insert deal query 
      $sql = $dbh->prepare("insert into deal (user_id,category_id,title,start_date,end_date,repeats,description,norm_price,discount_price,type) values (:user_id,:category_id,:title,:start_date,:end_date,:repeats,:description,:norm_price,:discount_price,:type)"); 
      $sql->bindParam('title',$title);
      $sql->bindParam('start_date',$start_date);
      $sql->bindParam('end_date',$end_date);
      $sql->bindParam('repeats',$repeats);
      $sql->bindParam('description',$description);
      $sql->bindParam('norm_price',$norm_price);
      $sql->bindParam('discount_price',$discount_price);
      $sql->bindParam('type',$type);
      $sql->bindParam('user_id',$user_id);
      $sql->bindParam('category_id',$category_id);

      //set variables for insert deal query
      $user_id = $_SESSION['user_id'];
      $title = $body['title'];
      $start_date = $body['start_date'];
      $end_date = $body['end_date'];
      $repeats = $body['repeats'];
      $description = $body['description'];
      $norm_price = $body['norm_price'];
      $discount_price = $body['discount_price'];
      $type = $body['type'];
      $category_id = $body['category_id'];
      $sql->execute(); //run insert deal 
      $deal_id = $dbh->lastInsertId();

      //return deal_id
      return $deal_id;

   });//end vendor/create route

   // vendor/update route
   $app->post('/update/{deal_id}', function($request,$response,$args) {

      //run the connection to the database again 
      $dbh = getDB();

      //parse request
      $body = $request->getParsedBody();
      
      //update deal query 
      $sql = $dbh->prepare("update deal set user_id=:user_id,category_id=:category_id,title=:title,start_date=:start_date,end_date=:end_date,repeats=:repeats,description=:description,norm_price=:norm_price,discount_price=:discount_price,type=:type where :deal_id=deal.deal_id");
      $sql->bindParam('title',$title);
      $sql->bindParam('start_date',$start_date);
      $sql->bindParam('end_date',$end_date);
      $sql->bindParam('repeats',$repeats);
      $sql->bindParam('description',$description);
      $sql->bindParam('norm_price',$norm_price);
      $sql->bindParam('discount_price',$discount_price);
      $sql->bindParam('type',$type);
      $sql->bindParam('user_id',$user_id);
      $sql->bindParam('category_id',$category_id);
      $sql->bindParam('deal_id',$deal_id);

      //set variables for update deal query
      $user_id = $_SESSION['user_id'];
      $title = $body['title'];
      $start_date = $body['start_date'];
      $end_date = $body['end_date'];
      $repeats = $body['repeats'];
      $description = $body['description'];
      $norm_price = $body['norm_price'];
      $discount_price = $body['discount_price'];
      $type = $body['type'];
      $category_id = $body['category_id'];
      $deal_id = $args['deal_id'];
      $sql->execute(); //run insert deal 

   });//end vendor/create route

});//end Vendor group

//deal group
$app->group('/Deal', function() use ($app) {

   //get feedback route
   $app->get('/getFeedback/{deal_id}', function($request,$response,$args) {
      //pull out deal_id
      $deal_id = $args['deal_id'];

      //run the connection to the database again 
      $dbh = getDB();

      //parse request
      $body = $request->getParsedBody();
      
      //getFeedback query 
      $sql = $dbh->prepare("select comment from comment where comment.deal_id = '$deal_id'");
      $sql->execute(); //run it
      $results = $sql->fetchAll();
      return json_encode($results);  

   });//end getFeedback

   //post feedback route
   $app->post('/feedback/{deal_id}', function($request,$response,$args) {
      
      //run the connection to the database again 
      $dbh = getDB();

      //parse request
      $body = $request->getParsedBody();
      
      //insert feedback query 
      $sql = $dbh->prepare("insert into comment (user_id,deal_id,comment) values (:user_id,:deal_id,:comment)");

      $sql->bindParam('user_id',$user_id);
      $sql->bindParam('deal_id',$deal_id);
      $sql->bindParam('comment',$comment);
      
      //set variables for insert feedback query
      $user_id = $_SESSION['user_id'];
      $comment = $body['comment'];
      $deal_id = $args['deal_id'];
      $arr = array($deal_id,$comment,$user_id);

      $sql->execute();

   });//end insert feedback route

});//end Vendor group
