<?php
namespace app\Models;
use vendor\DB;

class guest{
    public function getguestitem(){
        DB::connect();
        $sql = "SELECT  *  FROM  `guest`";
        $arg = NULL;
        return DB::select($sql, $arg);
    }
    public function getguest($Guest_ID){
        DB::connect();
        $sql = "SELECT  *  FROM  `guest` WHERE `Guest_ID`=?";
        $arg = array($Guest_ID);
        return DB::select($sql, $arg);
    }
    public function newguest($account_ID, $password, $name, $addr, $birth){
        DB::connect();
        $sql = "INSERT INTO `user`(`account_ID`, `password`, `name`, `addr`, `birth`) VALUES (?,?,?,?,?)";
        DB::insert($sql, array($account_ID, $password, $name, $addr, $birth));
        $sql = "INSERT INTO `user_role`(`id`, `user_id`, `role_id`) VALUES (Null,?,'B02')";
        DB::insert($sql, array($account_ID));
        $sql = "INSERT INTO `guest`(`Guest_ID`, `name`, `tel`) VALUES (?,?,'null')";
        return DB::insert($sql, array($account_ID,$name));
    }
    public function removeguest($Guest_ID){
        DB::connect();
        $sql = "DELETE FROM `guest` WHERE Guest_ID=?";
        return DB::delete($sql, array($Guest_ID));
    }
    public function updateguest($Guest_ID, $guest_name,$contact, $tel,$address){
        DB::connect();
        $sql = "UPDATE `guest` SET `guest_name`=?, `contact`=?, `tel`=?, `address`=?WHERE `Guest_ID`=?";
        return DB::update($sql, array($guest_name,$contact, $tel,$address,$Guest_ID));
    }
    public function getguestname($name){
        DB::connect();
        $sql = "SELECT  *  FROM  `guest` WHERE `name`=?";
        $arg = array($name);
        return DB::select($sql, $arg);
    }
}
?>