<?php
namespace app\Models;
use vendor\DB;

class Order{
    public function getOrders(){
        DB::connect();
        $sql = "SELECT  *  FROM  `order1`";
        $arg = NULL;
        return DB::select($sql, $arg);
    }
    public function getOrder($id){
        DB::connect();
        $sql = "SELECT  *  FROM  `order1` 
                    WHERE `id`=?";
        $arg = array($id);
        return DB::select($sql, $arg);
    }
    public function getOrderlist($order_id){
        DB::connect();
        $sql = "SELECT 
                    `orderlist`.`id` as id,
                    `orderlist`.`product_id` as product_id,
                    `product`.`name` as product_name,
                    `orderlist`.`num` as num,
                    `orderlist`.`price` as price
                FROM `orderlist`, `product` 
                WHERE `order_id`=? and `orderlist`.product_id=`product`.id
                ";
        $arg = array($order_id);
        return DB::select($sql, $arg);
    }
    public function newOrder($user_id, $date){
        DB::connect();
        $sql = "INSERT INTO `order1` (`user_id`, `date`) VALUES (?)";
        return DB::insert($sql, array($user_id, $date));
    }
    public function newItem($order_id, $product_id, $product_price, $number){
        DB::connect();
        $sql = "INSERT INTO  
                   `orderlist` 
                   (`order_id`, `product_id`, `num`, `price`) 
                    VALUES (?, ?, ?, ?)
        ";
        $arg = array($order_id, $product_id, $number, $product_price);
        return DB::insert($sql, $arg);
    }
}

  

?>