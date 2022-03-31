<?php
namespace app\Controllers; 
use vendor\Controller;
use app\Models\publish as publishModel;

class publish extends Controller 
{
    private $em;
    public function __construct() {
        $this->em = new publishModel();
    }
    public function getpub() {
        if (isset($_POST['Pub_ID'])) {
            $Pub_ID = $_POST['Pub_ID'];
            return $this->em->getpub($Pub_ID);
        } else {
            return $this->em->getpubitem();
        }
    }
    public function newpub() {
        $pub_name=$_POST['pub_name'];
        $contact = $_POST['contact'];
        $tel=$_POST['tel'];
        $address = $_POST['address'];


        return $this->em->newpub($pub_name,$contact,$tel, $address);
    }
    public function removepub() {
        $Pub_ID = $_POST['Pub_ID'];
        return $this->em->removepub($Pub_ID);
    }
    public function updatepub() {
        $Pub_ID= $_POST['Pub_ID'];
        $pub_name=$_POST['pub_name'];
        $contact = $_POST['contact'];
        $tel=$_POST['tel'];
        $address = $_POST['address'];

        return $this->em->updatepub($Pub_ID,$pub_name,$contact,$tel,$address);
    }
    public function getpubname() {
       
        $pub_name = $_POST['pub_name'];
        return $this->em->getpubname($pub_name);
       
    }
}



?>