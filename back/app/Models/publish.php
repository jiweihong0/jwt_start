<?php
namespace app\Models;
use vendor\DB;

class publish{
    public function getpubitem(){
        DB::connect();
        $sql = "SELECT  *  FROM  `publish`";
        $arg = NULL;
        return DB::select($sql, $arg);
    }
    public function getpub($Pub_ID){
        DB::connect();
        $sql = "SELECT  *  FROM  `publish` WHERE `Pub_ID`=?";
        $arg = array($Pub_ID);
        return DB::select($sql, $arg);
    }
    public function newpub($pub_name,$contact, $tel,$address){
        DB::connect();
        $sql = "INSERT INTO `publish` (`pub_name`,`contact`, `tel`, `address`) VALUES (?,?,?,?)";
        return DB::insert($sql, array( $pub_name,$contact, $tel,$address));
    }
    public function removepub($Pub_ID){
        DB::connect();
        $sql = "DELETE FROM `publish` WHERE Pub_ID=?";
        return DB::delete($sql, array($Pub_ID));
    }
    public function updatepub($Pub_ID, $pub_name,$contact, $tel,$address){
        DB::connect();
        $sql = "UPDATE `publish` SET `pub_name`=?, `contact`=?, `tel`=?, `address`=?WHERE `Pub_ID`=?";
        return DB::update($sql, array($pub_name,$contact, $tel,$address,$Pub_ID));
    }
    public function getpubname($pub_name){
        DB::connect();
        $sql = "SELECT  *  FROM  `publish` WHERE `pub_name`=?";
        $arg = array($pub_name);
        return DB::select($sql, $arg);
    }
}
?>