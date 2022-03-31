import showinsertrecord from "./showinsertrecord.js";
import Request from '../Request.js';
import doDelRecordlist from './doDelRecordlist.js';
async function select(b) {
    let data1 = {
        "Book_ID": b,
    };
    const url = await Request().post("/index.php?action=getbook", Qs.stringify(data1));
    const data = url.data;
    return data;
}

export default async function showUpdateresordlistPage(id) {
    let data2 = {
        "rid": id,
    };
    const url = await Request().post("/index.php?action=getrecordlist", Qs.stringify(data2));
    const data = url.data;
    switch (data['status']) {
        case 200:
            const rows = data['result'];
            console.log(rows)
            let str =`<button id='newUser'>新增書籍</button>`;
                str += `<table class="example">`;
                str += `<thead><tr><td>借書號</td><td>書名</td><td>刪除</td></tr></thead>`;
                str += `<tbody>`;
            for (const row of rows){ 
                console.log(row['Book_ID'])
                const name = await select(row['Book_ID']);
                const nameswitch=name['result'][0]['title'];
                str += `<td id='id'>` + row['rid'] + `</td>`;
                str += `<td>` +nameswitch+`</td>`;
                str += `<td><button id='deleteUser' bookid=`+row['Book_ID']+` value=`+ row['rid'] +`>刪除</button></td>`;
                str += `</tr>`; 
            }
            str += `</tbody>`;
            str += `</table>`;
            $("#content").html(str); 
            $('.example').DataTable({
                "fixedHeader": true 
            });
            $("#newUser").click(function(){
                showinsertrecord(id);
            });
            $("button[id=deleteUser]").click(function (e) { 
                const id =$(this).val();
                const Book_ID = $(this).attr("bookid");
                console.log(Book_ID);
                doDelRecordlist(id,Book_ID);
            });
            if (window.localStorage) { //儲存到 local storage
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
