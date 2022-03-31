<?php
namespace app\Controllers;

use app\Middleware\AuthMiddleware;
use vendor\Controller;
use app\Models\User as UserModel;
class User extends Controller 
{
    private $em;
    public function __construct() {
        $this-> em = new UserModel();
    }
    // public function hasPermission() {
    //     $UserID = AuthMiddleware::getUserID();
    //     $action=$_POST['action'];
    //     return $this->em->hasPermission($UserID,$action);
    // }
    // public function doLogin($id, $password){                                                         
    //     $sql = "SELECT * from user where `account_ID`=? and `password`=?";
    //     $arg=array($id, $password);
    //     return DB::select($sql, $arg);
    // }
    // public function hasPermission($id, $password){                                                         
    //     $sql = "SELECT * from user where `account_ID`=? and `password`=?";
    //     $arg=array($id, $password);
    //     return DB::select($sql, $arg);
    // }
}



?>