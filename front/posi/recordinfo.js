
import Request from "../Request.js";
export default async function recordinfo(id){
    let data1 = {
        "user_id":id
    }
    const url = await Request().post("/index.php?action=getGuestRecord",Qs.stringify(data1));
    const data =url.data;
    console.log(data);
        switch(data.status){
            case 200:
                console.log(data.result)
                const rows = data.result;
                let str = `<table class="example">`;
                str += `<thead><tr><td>書名</td><td>日期</td></tr></thead>`;
                str += `<tbody>`;  
                for (const row of rows){
                    str += `<td id='id'>` + row['bookname'] + `</td>`;
                    str += `<td>` + row['date'] + `</td>`;
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
