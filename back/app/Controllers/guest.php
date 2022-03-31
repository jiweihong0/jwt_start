<?php
namespace app\Controllers; 
use vendor\Controller;
use app\Models\guest as guestModel;

class guest extends Controller 
{
    private $em;
    public function __construct() {
        $this->em = new guestModel();
    }
    public function getguest() {
        if (isset($_POST['Guest_ID'])) {
            $Guest_ID = $_POST['Guest_ID'];
            return $this->em->getguest($Guest_ID);
        } else {
            return $this->em->getguestitem();
        }
    }
    public function newguest() {
      
        $account_ID=$_POST['account_ID'];
        $password = $_POST['password'];
        $name=$_POST['name'];
        $addr = $_POST['addr'];
        $birth = $_POST['birth'];


        return $this->em->newguest($account_ID, $password, $name, $addr, $birth);
    }
    public function removeguest() {
        $Guest_ID = $_POST['Guest_ID'];
        return $this->em->removeguest($Guest_ID);
    }
    public function updateguest() {
        $Guest_ID= $_POST['Guest_ID'];
        $guest_name=$_POST['guest_name'];
        $contact = $_POST['contact'];
        $tel=$_POST['tel'];
        $address = $_POST['address'];

        return $this->em->updateguest($Guest_ID,$guest_name,$contact,$tel,$address);
    }
    public function getguestname() {
       
        $name = $_POST['name'];
        return $this->em->getguestname($name);
       
    }
}



?>