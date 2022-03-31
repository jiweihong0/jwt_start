<?php
namespace app\Models;
use vendor\DB; 

class record{
    public function getrecorditem(){
        DB::connect();
        $sql = "SELECT record.seq,record.rid,ifnull(qty,'0')as qty,guest.name,record.date
        FROM guest,record LEFT JOIN (SELECT recordlist.rid,COUNT(recordlist.rid) as qty
                              FROM recordlist
                              GROUP BY recordlist.rid)R1 ON R1.rid = record.rid 
        WHERE record.Guest_ID = guest.Guest_ID";
        $arg = NULL;
        return DB::select($sql, $arg);
    }
    public function getrecord($rid){
        DB::connect();
        $sql = "SELECT  *  FROM  `record` WHERE `rid`=?";
        $arg = array($rid);
        return DB::select($sql, $arg);
    }
    public function getrecordlist($rid){
        DB::connect();
        $sql = "SELECT  *  FROM  `recordlist` WHERE `rid`=?";
        $arg = array($rid);
        return DB::select($sql, $arg);
    }
    public function getrecordlistbook($Book_ID){
    
        $sql = "SELECT  *  FROM  `recordlist` WHERE `Book_ID`=?";
        $arg = array($Book_ID);
        return DB::select($sql, $arg);
    }
    public function newrecord($rid,$Guest_ID){
        DB::connect();
        $sql = "INSERT INTO `record` (`rid`,`Guest_ID`) VALUES (?,?)";
        $arg = array($rid,$Guest_ID);
        return DB::insert($sql , $arg);
    }
    public function newrecordlist($rid,$Book_ID){
        DB::connect();
        $sql = "INSERT INTO `recordlist` (`rid`,`Book_ID`) VALUES (?,?)";
        $arg = array($rid,$Book_ID);
        return DB::insert($sql , $arg);
    }
    public function removerecord($rid){
        DB::connect();
        $sql = "DELETE FROM `record` WHERE rid=?";
        return DB::delete($sql, array($rid));
    }
    public function DelRecordlist($rid,$Book_ID){
        $sql = "DELETE FROM `recordlist` WHERE rid=? and Book_ID=?";
        $arg = array($rid,$Book_ID);
        return DB::delete($sql, $arg);
    }
    public function updaterecordlist($Book_ID,$rid){
        DB::connect();
        $sql = "UPDATE `recordlist` SET `remark`= 0 WHERE Book_ID=? and `rid`=?";
        return DB::update($sql, array($Book_ID,$rid));
    }
    public function updaterecord($rid, $Guest_ID){
        DB::connect();
        $sql = "UPDATE `record` SET `Guest_ID`=?WHERE `rid`=?";
        return DB::update($sql, array($Guest_ID,$rid));
    }
    
    public function getrecordname($record_name){
        DB::connect();
        $sql = "SELECT  *  FROM  `record` WHERE `record_name`=?";
        $arg = array($record_name);
        return DB::select($sql, $arg);
    }

    public function getGuestRecord($user_id){
        DB::connect();
        $sql = "SELECT book.title as bookname, record.date as date
        FROM book,record,recordlist
        WHERE record.rid=recordlist.rid
        AND recordlist.Book_ID=book.Book_ID 
        AND record.Guest_ID=?";
        $arg = array($user_id);
        return DB::select($sql, $arg);
    }
}
