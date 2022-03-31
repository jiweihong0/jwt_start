import showInsertPage from "./showInsertPage.js";
import showUpdatePage from "./showUpdatePage.js";
import doDelete from "./doDelete.js";
import Request from "../Request.js";
export default function employeeInfo(){
    Request().get("/index.php?action=getpub")
    .then(res => {
        let response = res['data'];
        console.log(response);
        switch(response['status']){
            case 200:
                const rows = response['result'];
                let str =`<button id='newUser'>新增使用者</button>`;
                str += `<table id="example">`;
                str += `<thead><tr><td>出版商編號</td><td>出版商名稱</td><td>聯繫</td><td>手機</td><td>位址</td><td>新增</td><td>修改</td></tr></thead>`;
                str += `<tbody>`;
                rows.forEach(element => {
                    str += `<td id='id'>` + element['Pub_ID'] + `</td>`;
                    str += `<td>` + element['pub_name'] + `</td>`;
                    str += `<td>` + element['contact'] + `</td>`;
                    str += `<td>` + element['tel'] + `</td>`;
                    str += `<td>` + element['address'] + `</td>`;;
                    str += `<td><button id='updateUser'>修改</button></td>`;
                    str += `<td><button id='deleteUser'>刪除</button></td>`;
                    str += `</tr>`;
                });
                str += `</tbody>`;
                str += `</table>`;
                $("#content").html(str);
                $("#example").DataTable({

                    "fixedHeader": true 
                });
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
