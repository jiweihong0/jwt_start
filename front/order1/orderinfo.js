import newOrder from "./showInsertPage.js";
import Request from "../Request.js";

export default function showOrders(){ 
    Request().get("/index.php?action=getOrders")
    .then(res => {
        let response = res['data'];

        switch(response['status']){
            case 200:
                const rows = response['result'];
                let str = `<table>`;
                str += `<tr><td>編號</td><td>訂購者</td><td>時間</td><td><button id='newOrder'>新訂單</button></td></tr>`;
                rows.forEach(element => {
                    str += `<tr>`;
                    str += `<td>` + element['user_id'] + `</td>`;
                    str += `<td>` + element['date'] + `</td>`;
                    str += `<td><button id='updateUser'>修改</button><button id='deleteUser'>刪除</button></td>`;
                    str += `</tr>`;
                });
                str += `</table>`;
                $("#content").html(str);
                $("#newOrder").click(function(e){
                    newOrder();
                });
                break;
            default: 
                $("#content").html(response['message']);
                break;
        }
    })
    
    .catch(err => {
        console.log(response['result']);
        console.error(err); 
    }) 
}
