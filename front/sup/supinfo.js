import showInsertPage from "./showInsertPage.js";
import showUpdatePage from "./showUpdatePage.js";
import doDelete from "./doDelete.js";

export default function supinfo(){
    axios.get("http://localhost/mvc1122test/back/index.php?action=selsup")
    .then(res => {
        let response = res['data'];
        switch(response['status']){
            case 200:
                const rows = response['result'];
                let str = `<table>`;
                str += `<tr><td>編號</td><td>供應商</td><td>聯絡人</td><td>電話</td><td>住址</td><td><button id='newUser'>新增使用者</button></td></tr>`;
                rows.forEach(element => {
                    str += `<tr>`;
                    str += `<td id='id'>` + element['id'] + `</td>`;
                    str += `<td>` + element['name'] + `</td>`;
                    str += `<td>` + element['pname'] + `</td>`;
                    str += `<td>` + element['phone'] + `</td>`;
                    str += `<td>` + element['addr'] + `</td>`;
                    str += `<td><button id='updateUser'>修改</button><button id='deleteUser'>刪除</button></td>`;
                    str += `</tr>`;
                });
                str += `</table>`;
                $("#content").html(str);
                $("#newUser").click(function (e) { 
                    showInsertPage();
                });
                const updateButtons = $("button[id=updateUser]");
                const deleteButtons = $("button[id=deleteUser]");
                const ids = $("td[id=id]");
                updateButtons.click(function(e){
                    const idx = updateButtons.index($(this));
                    showUpdatePage(ids[idx].innerText);
                })
                deleteButtons.click(function(e){
                    const idx = deleteButtons.index($(this));
                    doDelete(ids[idx].innerText);
                })
                
                
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
