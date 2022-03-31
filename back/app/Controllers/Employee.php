<?php
namespace app\Controllers; 
use vendor\Controller;
use app\Models\Employee as EmployeeModel;
use app\Middleware\AuthMiddleware;

class Employee extends Controller 
{
    private $em;
    public function __construct() {
        $this->em = new EmployeeModel();
    }
    public function getUsers() {
        $response = authMiddleware::checkToken();
        if ($response == true){
            if (isset($_POST['id'])) {
                $id = $_POST['id'];
                return $this->em->getUsers($id);
            } else {
                return $this->em->getUsers();
            }
        }
        else {
            $response["status"] = 403;
            $response["message"] = 'Access denied';
            return $response;
        }
        
    }
    public function newUser() {
        $id = $_POST['id'];
        $name=$_POST['name'];
        $password = $_POST['password'];
        $tdate=$_POST['tdate'];
        $posi=$_POST['posi'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $jobtitle=$_POST['jobtitle'];
        return $this->em->newUser($id, $name,$password, $tdate,$posi,$email, $phone,$jobtitle);
    }
    public function removeUser() {
        $id = $_POST['id'];
        return $this->em->removeUser($id);
    }
    public function updateUser() {
        $id = $_POST['id'];
        $name=$_POST['name'];
        $password = $_POST['password'];
        $tdate=$_POST['tdate'];
        $posi=$_POST['posi'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $jobtitle=$_POST['jobtitle'];
        return $this->em->updateUser($id, $name,$password, $tdate,$posi,$email, $phone,$jobtitle);
    }
}



?>