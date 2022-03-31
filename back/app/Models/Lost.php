<?php
namespace app\Models;
use vendor\DB;

class Lost{
    public function getLost(){
        $sql = "SELECT guest.name as name, book.title as bookname, guest.tel as tel, book.remark
        FROM guest,book,record,recordlist
        WHERE guest.Guest_ID=record.Guest_ID
        AND record.rid=recordlist.rid
        AND recordlist.Book_ID=book.Book_ID
        AND book.remark=recordlist.remark
        AND DATEDIFF(Now(),record.date)>30";
        $arg = NULL;
        return DB::select($sql, $arg);
    }
    public function newlost($Book_ID,$Guest_ID){
        $sql = "INSERT INTO `lost` (`Book_ID`, `Guest_ID`) VALUES (?,?)";
        $arg = array($Book_ID, $Guest_ID);
        return DB::insert($sql, $arg);
    }
    public function getEaclost(){
        $sql = "SELECT guest.name,book.title,guest.tel,book.price,DATEDIFF(Now(),record.date) as time
        FROM lost,book,guest,record
        WHERE lost.Book_ID=book.Book_ID
        and lost.Guest_ID=guest.Guest_ID
        and record.Guest_ID=lost.Guest_ID";
        $arg = NULL;
        return DB::select($sql, $arg);
    }
    
}

  

?>