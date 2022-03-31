import employeeInfo from './employee/employeeinfo.js';
import posinfo from './posi/posinfo.js';
import recordinfo from './record/record.js';
import lostinfo from './lost/lostinfo.js';
import Eaclostinfo from './Eaclost/Eaclostinfo.js';
import adminPage from './adminPage.js';
import Request from './Request.js';
import loginPage from './loginPage.js';
export default function startPage(id){
    const sp = `
        <button id="posi">圖書資訊更改</button>
        <button id="pub">出版商資料</button>
        <button id="lost">確認遺失</button>
        <button id="Eaclost">已遺失</button>
        <button id="record">借書</button>
        <button id="adminPage">回首頁</button>
        <div id="content"></div>
    `;
    $("#root").html(sp);
    $("#pub").click(function (e) { 
        if(window.localStorage){
            Request().get("/index.php")
            .then(function(resp){
                const response = resp['data'];
                if(response["status"] == 200){
                    //儲存到 local storage
                    window.localStorage.setItem("jwtToken", response['token']);
                    employeeInfo();
                }
                else{
                    loginPage();
                    console.log(response);
                }
            })
            .catch(function(err){
                console.log(err);
            });
        }
        
    });
    $("#posi").click(function (e) { 
        if(window.localStorage){
            Request().get("/index.php")
            .then(function(resp){
                const response = resp['data'];
                if(response["status"] == 200){
                    //儲存到 local storage
                    window.localStorage.setItem("jwtToken", response['token']);
                    posinfo();
                }
                else{
                    loginPage();
                    console.log(response);
                }
            })
            .catch(function(err){
                console.log(err);
            });
        }
    });
    $("#record").click(function (e) { 
        if(window.localStorage){
            Request().get("/index.php")
            .then(function(resp){
                const response = resp['data'];
                if(response["status"] == 200){
                    //儲存到 local storage
                    window.localStorage.setItem("jwtToken", response['token']);
                    recordinfo();
                }
                else{
                    loginPage();
                    console.log(response);
                }
            })
            .catch(function(err){
                console.log(err);
            });
        }
        
    });
    $("#lost").click(function (e) { 
        if(window.localStorage){
            Request().get("/index.php")
            .then(function(resp){
                const response = resp['data'];
                if(response["status"] == 200){
                    //儲存到 local storage
                    window.localStorage.setItem("jwtToken", response['token']);
                    lostinfo();
                }
                else{
                    loginPage();
                    console.log(response);
                }
            })
            .catch(function(err){
                console.log(err);
            });
        }
       
    });
    $("#Eaclost").click(function (e) { 
        if(window.localStorage){
            Request().get("/index.php")
            .then(function(resp){
                const response = resp['data'];
                if(response["status"] == 200){
                    //儲存到 local storage
                    window.localStorage.setItem("jwtToken", response['token']);
                    Eaclostinfo();
                }
                else{
                    loginPage();
                    console.log(response);
                }
            })
            .catch(function(err){
                console.log(err);
            });
        }
        
    });
    $("#adminPage").click(function (e) { 
        if(window.localStorage){
            Request().get("/index.php")
            .then(function(resp){
                const response = resp['data'];
                if(response["status"] == 200){
                    //儲存到 local storage
                    window.localStorage.setItem("jwtToken", response['token']);
                    adminPage(id);
                }
                else{
                    loginPage();
                    console.log(response);
                }
            })
            .catch(function(err){
                console.log(err);
            });
        }
    });
}
