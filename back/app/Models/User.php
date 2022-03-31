<?php
namespace app\Models;
require_once __DIR__."/../../vendor/Autoload.php";
use vendor\DB;
class User{
    public function doLogin($id, $password){                                                         
        $sql = "SELECT * from user where `account_ID`=? and `password`=?";
        $arg=array($id, $password);
        return DB::select($sql, $arg);
    }
    public function hasPermission($User_ID,$action){                                                         
        $sql = "SELECT *
        FROM user_role,user,role_action,role,action
        WHERE user_role.user_id = user.account_ID
        and role.id = user_role.role_id
        and role_action.role_id = role.id
        and action.id = role_action.action_id 
        and user.account_ID = ?
        and action.name = ?";
        $arg = array($User_ID,$action);
        return DB::select($sql, $arg);
    }
}
?>