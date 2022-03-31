<?php

require_once __DIR__."/../vendor/Autoload.php";
use app\Middleware\AuthMiddleware;
use vendor\DB;
use vendor\Router;
use app\models\User;

class Main{
    static function run(){
        //讀取.env, 設定相關config
        $conf =  parse_ini_file(__DIR__ .'/../vendor/.env');
        DB::$dbHost = $conf['dbHost'];
        DB::$dbName = $conf['dbName'];
        DB::$dbUser = $conf['dbUser'];
        DB::$dbPassword = $conf['dbPassword'];

        //讀取action的值
          
        if(isset($_GET['action'])) {
            $action=$_GET['action'];
            // $id = $_POST['id'];
            // $permission = User :: hasPermission($id,$action);

         
        }else{$action='no_action';}
        

        if(isset($_POST['debugermode'])){
            $router = new Router();
            require_once __DIR__ . "/../routes/web.php";
            $response = $router->run($action);
            echo json_encode($response);
            return;
        }
        //檢查token是否有效        
        $response = $responseToken = AuthMiddleware::checkToken($conf["jwtSecretKey"]);
        // echo json_encode($responseToken);
        // echo "111111111111111111111";
        // $r = array_intersect(userRoles, actionRoles);
        // if(count($r)!=0)
        //     //代表具有權限
        // else
        //     //不具有權限
        
        if($responseToken['status'] == 200){
            if($action != 'no_action') { 
                $userid = $response['id'];
                // echo $userid;
                $permission = AuthMiddleware::getPermission($userid, $action);
                if (count($permission['result'])>0){
                    $router = new Router();
                    require_once __DIR__ . "/../routes/web.php";
                    $response = $router->run($action);
                    $response['token'] = $responseToken['token'];
                }else{
                    $response['message'] = "no permission";
                }
            }
        }
        else {
            switch($action){
                case 'doLogin':
                    $response = AuthMiddleware::doLogin($conf["jwtSecretKey"]);
                    break;
                case 'getbook':
                    $router = new Router();
                    require_once __DIR__ . "/../routes/web.php";
                    $response = $router->run($action);
                    break;
                case 'getpub':
                    $router = new Router();
                    require_once __DIR__ . "/../routes/web.php";
                    $response = $router->run($action);
                    break;
                case 'newguest':
                    $router = new Router();
                    require_once __DIR__ . "/../routes/web.php";
                    $response = $router->run($action);
                    break;

                default:
                    break;
            }  
        }
        echo json_encode($response);
    }
}
