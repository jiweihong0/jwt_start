import Request from './Request.js';
export default function Rigister(){
    const sp = `
        帳號：<input type="text" id="account_ID"><br>
        密碼：<input type="text" id="password"><br>
        姓名：<input type="text" id="name"><br>
        住址：<input type="text" id="addr"><br>
        生日：<input type="date" id="birth"><br>
        <button id="Rigister">註冊</button>
        <div id="content"></div>
    `;
    $("#root").html(sp);
    $("#Rigister").click(function (e) { 
        const data={
            "account_ID": $("#account_ID").val(),
            "password": $("#password").val(),
            "name": $("#name").val(),
            "password": $("#password").val(),
            "addr": $("#addr").val(),
            "birth": $("#birth").val()
        };
        Request().post('/index.php?action=newguest', Qs.stringify(data))
        .then(function(resp){
            let response = resp['data'];
            let result = response['result'];
            console.log(response);
            window.location.reload(); //重新載入網頁
        })
        .catch(function(err){
            console.log(err);
        });
    });
}
