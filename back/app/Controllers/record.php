<?php
namespace app\Controllers; 
use vendor\Controller;
use app\Models\record as recordModel; 

class record extends Controller 
{
    private $em;
    public function __construct() {
        $this->em = new recordModel();
    }
    public function getrecord() {
        if (isset($_POST['rid'])) { 
            $rid = $_POST['rid'];
            return $this->em->getrecord($rid);
        } else {
            return $this->em->getrecorditem();
        }
    }
    public function newrecord() {
      
        $rid=$_POST['rid'];
        $Guest_ID = $_POST['Guest_ID'];
        return $this->em->newrecord($rid,$Guest_ID);
    }
    public function newrecordlist() {
      
        $rid=$_POST['rid'];
        $Book_ID = $_POST['Book_ID'];
        return $this->em->newrecordlist($rid,$Book_ID);
    }
    public function removerecord() {
        $Pub_ID = $_POST['Pub_ID'];
        return $this->em->removerecord($Pub_ID);
    }
    public function DelRecordlist() {
        $rid = $_POST['rid'];
        $Book_ID = $_POST['Book_ID'];
        return $this->em-> DelRecordlist($rid,$Book_ID);
    }
    public function updaterecord() {
        $rid= $_POST['rid'];
        $Guest_ID=$_POST['Guest_ID'];


        return $this->em->updaterecord($rid,$Guest_ID);
    }
    public function updaterecordlist() {
        $rid= $_POST['rid'];
        $Book_ID=$_POST['Book_ID'];


        return $this->em->updaterecord($Book_ID,$rid);
    }
    public function getrecordlist() {
       
        $rid = $_POST['rid'];
        return $this->em->getrecordlist($rid);
       
    }
    public function getrecordlistbook() {
       
        $Book_ID = $_POST['Book_ID'];
        return $this->em->getrecordlistbook($Book_ID);
       
    }

    public function getGuestRecord(){
        $user_id = $_POST['user_id'];
        return $this->em->getGuestRecord($user_id);
    }
}



?>