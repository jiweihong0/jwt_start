import adminPage from './adminPage.js';
import Request from './Request.js';
import NoLoginPage from './NoLoginPage.js';
$(document).ready(function () {
    if(window.localStorage){
        Request().get("/index.php")
        .then(function(resp){
            const response = resp['data'];
            if(response["status"] == 200){
                //儲存到 local storage
                window.localStorage.setItem("jwtToken", response['token']);
                adminPage(response.id);
            }
            else{
                NoLoginPage();
            }
        })
        .catch(function(err){
            console.log(err);
        });
    }
});
 