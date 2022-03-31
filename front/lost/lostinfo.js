
import doUpdate from './doUpdate.js';
import Request from "../Request.js";
export default async function lostinfo(){
    const url = await Request().get("/index.php?action=getLost");
    const data =url.data;
        switch(data.status){
            case 200:
                const rows = data.result;
                let str = `<table class="example">`;
                str += `<thead><tr><td>借書人</td><td>書名</td><td>電話</td><td>狀態</td><td>修改</td></tr></thead>`;
                str += `<tbody>`;  
                for (const row of rows){
                    str += `<td id='id'>` + row['name'] + `</td>`;
                    str += `<td>` + row['bookname'] + `</td>`;
                    str += `<td>` + row['tel'] + `</td>`;
                    str += `<td>` +row['remark'] + `</td>`;
                    str += `<td><button id='updateUser' name=` + row['name'] + ` bookname=`+ row['bookname'] +`>確認遺失</button></td>`;
                    str += `</tr>`;
                }
    
                str += `</tbody>`;
                str += `</table>`;
                $("#content").html(str);
                $('.example').DataTable({

                    "fixedHeader": true 
            
                });
                $("#updateUser").click(function () {
                    const name = $(this).attr("name");
                    const bookname = $(this).attr("bookname");
                    console.log(name,bookname);
                    doUpdate(name,bookname);
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
