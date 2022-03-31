<?php
namespace app\Controllers; 
use vendor\Controller;
use app\Models\Lost as LostModel;

class Lost extends Controller 
{
    private $em;
    public function __construct() {
        $this->em = new LostModel();
    }
    public function getLost() {
        return $this->em->getLost();
    }
    public function getEaclost() {
        return $this->em->getEaclost();
    }
    public function newlost() {
        $Book_ID=$_POST['Book_ID'];
        $Guest_ID = $_POST['Guest_ID'];
        return $this->em->newlost($Book_ID,$Guest_ID);
    }
}



?>