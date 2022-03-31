

import Request from "../Request.js";
export default async function lostinfo(){
    const url = await Request().get("/index.php?action=getEaclost");
    const data =url.data;
        switch(data.status){
            case 200:
                const rows = data.result;
                let str = `<table class="example">`;
                str += `<thead><tr><td>借書人</td><td>書名</td><td>電話</td><td>賠償金額</td><td>遺失天數</td></tr></thead>`;
                str += `<tbody>`;  
                for (const row of rows){
                    str += `<td id='id'>` + row['name'] + `</td>`;
                    str += `<td>` + row['title'] + `</td>`;
                    str += `<td>` + row['tel'] + `</td>`;
                    str += `<td>` +row['price'] + `</td>`;
                    str += `<td>` +row['time'] + `</td>`;
                    str += `</tr>`;
                }
    
                str += `</tbody>`;
                str += `</table>`;
                $("#content").html(str);
                $('.example').DataTable({

                    "fixedHeader": true 
            
                });
                
                if(window.localStorage){ //儲存到 local storage
                    window.localStorage.setItem("jwtToken", data['token']);
                }
                break;
            case 403:
                loginPage();
                break;
        
            default:
                $("#content").html(data['message']);
                break;
        }
    
}
