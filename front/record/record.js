import showInsertPage from "./showInsertPage.js";
import showUpdaterecordPage from "./showUpdaterecordPage.js";
import showUpdaterecordlistPage from "./showUpdateresordlistPage.js";
import doDelete from "./doDelete.js"
import Request from "../Request.js";
export default async function recordinfo(){
    const url = await Request().get("/index.php?action=getrecord");
    const data =url.data;
        switch(data.status){
            case 200:
      
                const rows = data.result;
                let str =`<button id='newUser'>新增書籍</button>`;
                str += `<table class="example">`;
                str += `<thead><tr><td>編號</td><td>借書號</td><td>借用書量</td><td>借用人</td><td>日期</td><td>修改抬頭</td><td>修改明細</td><td>刪除</td></tr></thead>`;
                str += `<tbody>`;  
                for (const row of rows){ 
                    str += `<td >` + row['seq'] + `</td>`;
                    str += `<td id='id'>` + row['rid'] + `</td>`;
                    str += `<td>` + row['qty'] + `</td>`;
                    str += `<td>` +row['name']+`</td>`;
                    str += `<td>` + row['date'] + `</td>`;
                    str += `<td><button id='updaterecord' value=`+ row['rid'] +`>修改抬頭</button></td>`;
                    str += `<td><button id='updaterecordlist' value=`+ row['rid'] +`>修改明細</button></td>`;
                    str += `<td><button id='deleteUser' value=`+ row['rid'] +`>刪除</button></td>`;
                    str += `</tr>`;
                }
                str += `</tbody>`;
                str += `</table>`;
                $("#content").html(str);
                $('.example').DataTable({

                    "fixedHeader": true 
            
                });
                      
                $("#newUser").click(function (e) { 
                    showInsertPage();
                });
                $("button[id=updaterecord]").click(function (e) { 
                    const id =$(this).val();
                    showUpdaterecordPage(id);

                });
                $("button[id=updaterecordlist]").click(function (e) { 
                    const id =$(this).val();
                    showUpdaterecordlistPage(id,str);

                });
                $("button[id=deleteUser]").click(function (e) { 
                    const id =$(this).val();
                    doDelete(id);

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
