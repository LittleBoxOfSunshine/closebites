<?php
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

        $app->post('/exists', function($request,$response,$args) {

          $body = $request->getParsedBody();
          $email = $body['email'];

          if($type == 'consumer') {
            // $query = "SELECT email, name FROM user WHERE user.email = '$email' AND user.password = '$password'";
            $query = "SELECT email, name FROM user WHERE user.email = '$email'";
            $db = getDB();
            $result = $db->query($query);
            while($row = $result->fetch(PDO::FETCH_ASSOC)){
                $data[] = $row;
            }
            return json_encode($data[0]['email']);
          }
          else {
            // $query = "SELECT email FROM user WHERE user.email = '$email' AND user.password = '$password'";
            $query = "SELECT email FROM user WHERE user.email = '$email'";
            // return $query;
            $db = getDB();
            $result = $db->query($query);
            while($row = $result->fetch(PDO::FETCH_ASSOC)){
                $data[] = $row;
            }
            return json_encode($data[0]['email']);
          }
        });

        $app->post('/login', function($request,$response,$args) {

            $body = $request->getParsedBody();
            $email = $body['email'];
            $password = $body['password'];
            $accountType = $body['accountType'];

            // Password Verification
            $getPassword = "SELECT password
                            FROM user
                            WHERE
                              user.email = '$email'
                           ";
            $db = getDB();
            $userResult = $db->query($getPassword);
            while($row = $userResult->fetch(PDO::FETCH_ASSOC)){
                $data[] = $row;
            }
            $passwordDB = json_encode($data[0]['password']);
            $hash = str_replace('"', "", $passwordDB);
            $passwordClean = stripslashes($hash);

            if (password_verify($password, $passwordClean)) {
                echo 'Valid password';
            } else {
                echo 'Invalid password.';
            }

            // Vendor Login - if password is correct
            if($accountType == 'vendor') {
              // Retreive vendor account information
              // $getVendorInfo = "SELECT name, locationer
              //                   FROM vendor
              //                   WHERE user_id IN (
              //                     SELECT user_id
              //                     FROM user
              //                     WHERE email = '$email'
              //                   )
              //                  ";
              // $vendorInfo = $db->query($getVendorInfo);
              // while($row = $vendorInfo->fetch(PDO::FETCH_ASSOC)){
              //     $vendor[] = $row;
              // }

// broken
              // Get deals associated with vendor
              // $getVendorDeals = "SELECT title, description, start_date, end_date, repeat
              //                    FROM deal
              //                    WHERE vendor_id IN
              //                      (SELECT vendor_id
              //                       FROM vendor
              //                       WHERE user_id IN (
              //                         SELECT user_id
              //                         FROM user
              //                         WHERE email = '$email'
              //                       ))
              //                     ";

              // Get deals associated with vendor
              $getVendorDeals = "SELECT title, description, start_date, end_date, repeat
                                 FROM deal
                                 WHERE user_id IN
                                   (SELECT user_id
                                    FROM user
                                    WHERE email = '$email')
                                ";
              $vendorDeals = $db->query($getVendorDeals);
              while($row = $vendorDeals->fetch(PDO::FETCH_ASSOC)){
                  $deals[] = $row;
              }


              // Return vendor information
              return $response->withJson([
                'id'=> 0,
                'name' => $vendor,
                'accountType' => 'vendor',
                'address' => $vendor,
                'calendar' => $deals
              ]);
            }
            // User login - if password is correct
            else {
              // Get user account information
              $getInfo = "SELECT user_id, name, accountType
                          FROM user
                          WHERE
                            email = '$email'
                         ";
              $infoResult = $db->query($getInfo);

              $getFavorites = "SELECT favorite_id
                                  FROM favorite
                                  WHERE user_id IN (
                                    SELECT user_id
                                    FROM user
                                    WHERE email = '$email'
                                  )
                              ";
              $favResult = $db->query($getFavorites);
              while($row = $favResult->fetch(PDO::FETCH_ASSOC)){
                  $favData[] = $row['favorite_id'];
              }

              // return $favs;

              // GET Filters associated with the consumer
              $getFilters = "SELECT type, cuisine
                             FROM filter
                             WHERE user_id IN (
                               SELECT user_id
                               FROM user
                               WHERE email = '$email'
                             )
                            ";
              $filterResult = $db->query($getFilters);
              while($row = $filterResult->fetch(PDO::FETCH_ASSOC)){
                  $filterData[] = $row;
              }


              // Return information regarding user
              return $response->withJson([
                  'id'=> 0,
                  'name' => $email,
                  'accountType' => 'consumer',
                  'favorites' => $favData,
                  'filters' => $filterData
              ]);
            }
        });

        $app->post('/register', function($request,$response,$args) {
            // Retreive registration information from json
            $body = $request->getParsedBody();
            $email = $body['email'];
            $name = $body['name'];
            $password = $body['password'];
            $accountType = $body['accountType'];

            // Hash and salt user password
            // $options = [
            //  'cost' => 11,
            //  'salt' => mcrypt_create_iv(22, MCRYPT_DEV_URANDOM),
            // ];
            // $hash = password_hash($password, PASSWORD_BCRYPT, $options);
            // $query = "INSERT INTO user (user_id, email, name, password, accountType)
            //           VALUES (NULL, '$email', '$body' '$hash', '$accountType')";
            // $db = getDB();
            // $db->query($query);
            //
            // return "200";
            // Get user information


            // Return user information - after register
            if($body['accountType'] == 'consumer') {
                // Retreive account info
                $userInfoQuery = "SELECT user_id, name, accountType
                                  FROM user
                                  WHERE
                                    email = '$email'
                                  ";
                return $userInfoQuery;
                $infoResult = $db->query($userInfoQuery);
                while($row = $infoResult->fetch(PDO::FETCH_ASSOC)){
                    $userData[] = $row;
                }
                return $userData;
                // $userinformation = json_encode($userData);

                return $response->withJson([
                    'id'=> 0,
                    'name' => $userData,
                    'accountType' => 'consumer',
                    'favorites' => [],
                    'filters' => []
                ]);
            }

            //Return vendor information -- after register
            else if($body['accountType'] == 'vendor') {
                $vendorInfoQuery = "SELECT name, location
                                    FROM vendor
                                    WHERE user_id IN (
                                      SELECT user_id
                                      FROM user
                                      WHERE email = '$email')
                                   ";
                $infoResult = $db->query($vendorInfoQuery);
                while($row = $infoResult->fetch(PDO::FETCH_ASSOC)){
                    $vendorData[] = $row;
                }
                // $vendorinformation = json_encode($vendorData);
//***************************************************MUST TEST
                return $response->withJson([
                    'id'=> 0,
                    'name' => $vendorData['name'],
                    'accountType' => 'vendor',
                    'address' => $vendorData['location'],
                    'calendar' => []
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
                        'repeat' => '0010000'
                    ],
                    [
                        'name' => 'Shakes Saturday',
                        'id' => 1,
                        'start' => '2016/05/15 17:30',
                        'end' => '2016/05/15 19:30',
                        'repeat' => '0000100'
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
    if($body['email'] == 'matt') {
      return "200";
    } else {
      return "400";
    }
    $query = "SELECT email FROM user WHERE user.email = '$email' AND user.password = '$password'";

    $db = getDB();
    $result = $db->query($query);
    // $row = $result->fetch(PDO::FETCH_ASSOC)

    if($result) {
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
