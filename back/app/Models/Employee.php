<?php
namespace app\Models;
use vendor\DB;

class Employee{
    public function getUsers(){
        DB::connect();
        $sql = "SELECT  *  FROM  `employee`";
        $arg = NULL;
        return DB::select($sql, $arg);
    }
    public function getUser($id){
        DB::connect();
        $sql = "SELECT  *  FROM  `employee` WHERE `id`=?";
        $arg = array($id);
        return DB::select($sql, $arg);
    }
    public function newUser($id, $name,$password, $tdate,$posi,$email, $phone,$jobtitle){
        DB::connect();
        $sql = "INSERT INTO `employee` (`id`, `name`, `password`, `tdate`, `posi`, `email`, `phone`, `jobtitle`) VALUES (?,?,?,?,?,?, ?, ?)";
        return DB::insert($sql, array($id, $name,$password, $tdate,$posi,$email, $phone,$jobtitle));
    }
    public function removeUser($id){
        DB::connect();
        $sql = "DELETE FROM `employee` WHERE id=?";
        return DB::delete($sql, array($id));
    }
    public function updateUser($id, $name,$password, $tdate,$posi,$email, $phone,$jobtitle){
        DB::connect();
        $sql = "UPDATE `employee` SET `name`=?, `password`=?, `tdate`=?, `posi`=?, `email`=?, `phone`=?, `jobtitle`=?WHERE id=?";
        return DB::update($sql, array($name,$password, $tdate,$posi,$email, $phone,$jobtitle,$id ));
    }
}
?>