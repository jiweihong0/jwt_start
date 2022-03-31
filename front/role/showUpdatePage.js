import doUpdate from './doUpdate.js';
export default function showUpdatePage(id){
    let data = {
        "id": id,
    };
    axios.post("http://localhost/mvc1122test/back/public/index.php?action=selroom",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        switch(response['status']){
            case 200:
                const rows = response['result'];
                const row = rows[0];
                
                let str = `編號：<input type="text" id="id" value="` + row['id'] + `"><br>`;
                str += `名稱：<input type="text" id="name" value="` + row['name'] + `"><br>`;
                str += `使用者編號：<input type="text" id="pid" value="` + row['pid'] + `"><br>`;
                str += `借用日期：<input type="text" id="bdate" value="` + row['bdate'] + `"><br>`;
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
