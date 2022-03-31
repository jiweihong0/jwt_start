import showInsertPage from "./showInsertPage.js";
import showUpdatePage from "./showUpdatePage.js";
import doDelete from "./doDelete.js";
import Request from "../Request.js";
async function pub(a){
    let data1 = {
        "Pub_ID":a 
    };
    const url = await Request().post("/index.php?action=getpub",Qs.stringify(data1));
    const data =url.data['result'][0]['pub_name'];
    console.log(data)
    return data;
};
export default async function posinfo(){
    const url = await Request().get("/index.php?action=getbook");
    const data =url.data;
        switch(data.status){
            case 200:
                console.log(data.result)
                const rows = data.result;
                let str =`<button id='newUser'>新增書籍</button>`;
                str += `<table class="example">`;
                str += `<thead><tr><td>書籍編號</td><td>書名</td><td>作者</td><td>出版商</td><td>狀態</td><td>金額</td><td>place</td><td>修改</td><td>刪除</td></tr></thead>`;
                str += `<tbody>`;  
                for (const row of rows){
                    const name=await pub(row['Pub_ID']) 
                    str += `<td id='id'>` + row['Book_ID'] + `</td>`;
                    str += `<td>` + row['title'] + `</td>`;
                    str += `<td>` + row['author'] + `</td>`;
                    str += `<td>` +name+`</td>`;
                    str += `<td>` +row['remark'] + `</td>`;
                    str += `<td>` + row['price'] + `</td>`;
                    str += `<td>` + row['place'] + `</td>`;
                    str += `<td><button id='updateUser' value=`+ row['Book_ID'] +`>修改</button></td>`;
                    str += `<td><button id='deleteUser' value=`+ row['Book_ID'] +`>刪除</button></td>`;
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
                $("button[id=updateUser]").click(function (e) { 
                    const id =$(this).val();
                    showUpdatePage(id,str);

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
// getGuestRecord