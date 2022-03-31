<?php
namespace app\Controllers; 
use vendor\Controller;
use app\Models\book as bookModel;

class book extends Controller 
{
    private $em;
    public function __construct() {
        $this->em = new bookModel();
    }
    public function getbook() {
        if (isset($_POST['Book_ID'])) {
            $Book_ID = $_POST['Book_ID'];
            return $this->em->getbook($Book_ID);
        } else {
            return $this->em->getitem();
        }
    }
    public function newbook() {
        $title=$_POST['title']; 
        $Pub_ID=$_POST['Pub_ID'];
        $author = $_POST['author'];
        $remark=$_POST['remark'];
        $price = $_POST['price'];
        $place = $_POST['place'];

        return $this->em->newbook($title,$author,$Pub_ID,$remark, $price, $place);
    }
    public function removebook() {
        $Book_ID = $_POST['Book_ID'];
        return $this->em->removebook($Book_ID);
    }
    public function updatebook() {
        $Book_ID= $_POST['Book_ID'];
        $title=$_POST['title'];
        $author = $_POST['author'];
        $Pub_ID=$_POST['Pub_ID'];
        $remark=$_POST['remark'];
        $price = $_POST['price'];
        $place = $_POST['place'];
        return $this->em->updatebook($Book_ID,$title,$author,$Pub_ID,$remark, $price, $place);
    }
    public function getbooktitle() {
       
        $Book_name = $_POST['Book_name'];
        return $this->em->getbooktitle($Book_name);
       
    }    
    public function getBookRemark() {
       
        $Book_ID = $_POST['Book_ID'];
        return $this->em->getBookRemark($Book_ID);
       
    }
    public function updateBookRemark() {
       
        $Book_ID = $_POST['Book_ID'];
        return $this->em->updateBookRemark($Book_ID);
       
    }
}
