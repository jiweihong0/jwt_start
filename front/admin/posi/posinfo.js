import Request from "../../Request.js";
async function pub(a){
    let data1 = {
        "Pub_ID":a 
    };
    const url = await Request().post("/index.php?action=getpub",Qs.stringify(data1));
    const data =url.data['result'][0]['pub_name'];
    console.log(data)
    return data;
};
async function status(b){
    b =parseInt(b);
    switch (b) {
        case 0:
            return "可借閱";
        case 1:
            return "不可借閱";
        default:
            break;
    }
};
export default async function posinfo(){
    const url = await Request().get("/index.php?action=getbook");
    const data =url.data;
        switch(data.status){
            case 200:
                console.log(data.result)
                const rows = data.result;
                let str = `<table class="example">`;
                str += `<thead><tr><td>書籍編號</td><td>書名</td><td>作者</td><td>出版商</td><td>狀態</td><td>place</td></tr></thead>`;
                str += `<tbody>`;  
                for (const row of rows){
                    const name = await pub(row['Pub_ID']);
                    const status1 = await status(row['remark']) ;
                    str += `<td id='id'>` + row['Book_ID'] + `</td>`;
                    str += `<td>` + row['title'] + `</td>`;
                    str += `<td>` + row['author'] + `</td>`;
                    str += `<td>` +name+`</td>`;
                    str += `<td>` +status1 + `</td>`;
                    str += `<td>` + row['place'] + `</td>`;
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
