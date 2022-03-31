import doUpdate from './doUpdate.js';
export default function showUpdatePage(id){
    let data = {
        "id": id,
    };
    axios.post("http://localhost/mvc1122test/back/index.php?action=selsup",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        switch(response['status']){
            case 200:
                const rows = response['result'];
                const row = rows[0];
                let str = `編號：<input type="text" id="id" value="` + row['id'] + `"><br>`;
                str += `供應商：<input type="text" id="name" value="` + row['name'] + `"><br>`;
                str += `聯絡人：<input type="text" id="pname" value="` + row['pname'] + `"><br>`;
                str += `電話：<input type="text" id="phone" value="` + row['phone'] + `"><br>`;
                str += `住址：<input type="text" id="addr" value="` + row['addr'] + `"><br>`;
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
