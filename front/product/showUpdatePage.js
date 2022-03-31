import doUpdate from './doUpdate.js';
export default function showUpdatePage(id){
    let data = {
        "id": id,
    };
    axios.post("http://localhost/mvc1122test/back/public/index.php?action=getbook",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        switch(response['status']){
            case 200:
                const rows = response['result'];
                const row = rows[0];
                let str = `編號：<input type="text" id="id" value="` + row['id'] + `"><br>`;
                str += `書名：<input type="text" id="name" value="` + row['name'] + `"><br>`;
                str += `種類：<input type="text" id="type" value="` + row['type'] + `"><br>`;
                str += `狀態：<input type="text" id="info" value="` + row['info'] + `"><br>`;
                str += `借閱人：<input type="text" id="person" value="` + row['person'] + `"><br>`;
                str += `借閱日期：<input type="text" id="bdate" value="` + row['bdate'] + `"><br>`;
                str += `歸還日期：<input type="text" id="rdate" value="` + row['rdate'] + `"><br>`;
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
