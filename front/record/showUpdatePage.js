import doUpdate from './doUpdate.js';
import Request from '../Request.js';
export default function showUpdatePage(id){
    let data = {
        "id": id,
    };
    Request().post("/index.php?action=getrecord",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        switch(response['status']){
            case 200:
                const rows = response['result'];
                const row = rows[0];
                let str = `出版商編號：<input type="text" disabled="disabled" id="id" value="` + row['Pub_ID'] + `"><br>`;
                str += `出版商名稱：<input type="text" id="name" value="` + row['record_name'] + `"><br>`;
                str += `聯繫：<input type="text" id="contact" value="` + row['contact'] + `"><br>`;
                str += `手機：<input type="text" id="tel" value="` + row['tel'] + `"><br>`;
                str += `住址：<input type="text" id="address" value="` + row['address'] + `"><br>`;
                str += `<button id="doUpdate">修改</button>`;
                $("#content").html(str);
                $("#doUpdate").click(function(){
                    doUpdate();
                });
                if(window.localStorage){ //儲存到 local storage
                    window.localStorage.setItem("jwtToken", response['token']);
                }
                break;
            case 403:
                loginPage();
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
