<?php
namespace app\Middleware;
require_once __DIR__ . '/../../vendor/Autoload.php';
use \Exception;
use \vendor\JWT\JWT;
use app\Models\User;

class AuthMiddleware
{
    public static function checkToken($secret_key)
    {
        $headers = getallheaders();
        $jwt = $headers['Authorization'];
        try {
            $payload = JWT::decode($jwt, $secret_key, array('HS256'));
            $ida = $payload->data->id;
            $jwt = self::genToken($payload->data->id, $secret_key);
            $response['status'] = 200;
            $response['message'] = "Access granted";
            $response['token'] = $jwt;
            $response['id']=$ida;
        } catch (Exception $e) {
            $response['status'] = 403;
            $response['message'] = $e->getMessage();
        }
        return $response;
    }

    public static function doLogin($secret_key)
    {
        $id = $_POST['id'];
        $password = $_POST['password'];
        //查詢DB驗證帳密的正確性
        // DB::connect();
        // $sql = "SELECT `role_id` from `user_role` where `user_id`=
        // =?";
        // $arg = array($userid);
        // return DB::select($sql, $arg);
        $response= User :: doLogin($id,$password);
        $jwt = self::genToken($id, $secret_key);
        $response['status'] = 200;
        $response['message'] = "Access granted";
        $response['token'] = $jwt;
        return $response;
    }
    private static function genToken($id, $secret_key)
    {
        $issuer_claim = "http://localhost";
        $audience_claim = "http://localhost";
        $issuedat_claim = time(); // issued at
        $expire_claim = $issuedat_claim + 300;
        $payload = array(
            "iss" => $issuer_claim,
            "aud" => $audience_claim,
            "iat" => $issuedat_claim,
            "exp" => $expire_claim,
            "data" => array(
                "id" => $id,
            )
        );
        $jwt = JWT::encode($payload, $secret_key);
        return $jwt;
    }

    public static function getPermission($id, $action){
        return User::hasPermission($id, $action);
    }
}
