<?php
namespace app\Models;
use vendor\DB;

class book{
    public function getitem(){
        DB::connect();
        $sql = "SELECT  *  FROM  `book`";
        $arg = NULL;
        return DB::select($sql, $arg);
    }
    public function getbook($Book_ID){
        DB::connect();
        $sql = "SELECT  *  FROM  `book` WHERE `Book_ID`=?";
        $arg = array($Book_ID);
        return DB::select($sql, $arg);
    }
    public function newbook($title,$author,$Pub_ID,$remark, $price,  $place){
        DB::connect();
        $sql = "INSERT INTO `book` (`title`, `author`,`Pub_ID`,`remark`, `price`, `place`) VALUES (?, ?, ?, ?,?,?)";
        return DB::insert($sql, array($title,$author,$Pub_ID,$remark, $price, $place));
    }
    public function removebook($Book_ID){
        DB::connect();
        $sql = "DELETE FROM `book` WHERE Book_ID=?";
        return DB::delete($sql, array($Book_ID));
    }
    public function updatebook($Book_ID,$title,$author,$Pub_ID,$remark, $price, $place){
        DB::connect();
        $sql = "UPDATE `book` SET `title`=?, `author`=?,`Pub_ID`=?,`remark`=?, `price`=?, `place`=?WHERE Book_ID=?";
        $arg = array($title,$author,$Pub_ID,$remark, $price, $place,$Book_ID);
        return DB::update($sql, $arg);
    }
    public function getbooktitle($Book_name){
        DB::connect();
        $sql = "SELECT  *  FROM  `book` WHERE `title`=?";
        $arg = array($Book_name);
        return DB::select($sql, $arg);
    }
    public function getBookRemark($Book_ID){
        DB::connect();
        $sql = "SELECT book.Book_ID, book.remark 
        FROM `book` 
        WHERE book.Book_ID=?
        and book.remark=0";
        $arg = array($Book_ID);
        return DB::select($sql, $arg);
    }
    public function updateBookRemark($Book_ID){
        DB::connect();
        $sql = "UPDATE `book`
        set book.remark=1 
        WHERE book.Book_ID=?";
        $arg = array($Book_ID);
        return DB::select($sql, $arg);
    }
    
    
}
