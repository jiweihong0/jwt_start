import doUpdate from './doUpdate.js';
import Request from '../Request.js';
export default function showUpdatePage(id){
    let data = {
        "id": id,
    };
    Request().post("/index.php?action=getUsers",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        switch(response['status']){
            case 200:
                const rows = response['result'];
                const row = rows[0];
                let str = `編號：<input type="text" id="id" value="` + row['id'] + `"><br>`;
                str += `姓名：<input type="text" id="name" value="` + row['name'] + `"><br>`;
                str += `密碼：<input type="text" id="password" value="` + row['password'] + `"><br>`;
                str += `入值日期：<input type="text" id="tdate" value="` + row['tdate'] + `"><br>`;
                str += `住址：<input type="text" id="posi" value="` + row['posi'] + `"><br>`;
                str += `email：<input type="text" id="email" value="` + row['email'] + `"><br>`;
                str += `電話：<input type="text" id="phone" value="` + row['phone'] + `"><br>`;
                str += `現任職位：<input type="text" id="jobtitle" value="` + row['jobtitle'] + `"><br>`;
                str += `<button id="doUpdate">修改</button>`;
                $("#content").html(str);
                $("#doUpdate").click(function(){
                    doUpdate();
                });
                break;
            default:
                $("#content").html(response['message']);
                break;
        }
    })
    .catch(err => {
        console.error(err); 
    })          
}
