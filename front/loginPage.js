import Request from './Request.js';
import Rigister from './rigister.js';
export default function loginPage(){
    const sp = `
        帳號：<input type="text" id="id"><br>
        密碼：<input type="password" id="password"><br>
        <button id="login">登入</button><button id="Rigister">註冊</button>
        <div id="content"></div>
    `;
    $("#root").html(sp);
    $("#login").click(function (e) { 
        const data={
            "id": $("#id").val(),
            "password": $("#password").val()
        };
        Request().post('/index.php?action=doLogin', Qs.stringify(data))
        .then(function(resp){
            let response = resp['data'];
            let result = response['result'];
            console.log(response);
            if (result.length > 0) {
                if(window.localStorage){ //儲存到 local storage
                    window.localStorage.setItem('jwtToken', response['token']);
                }
            }else{
                alert('帳號或密碼錯誤');
            }
            window.location.reload(); //重新載入網頁
        })
        .catch(function(err){
            console.log(err);
        });
    });
    $("#Rigister").click(function (e) { 
        Rigister();
        
    });
}
