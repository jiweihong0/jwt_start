import doUpdate from './doUpdate.js';
import Request from '../Request.js';
async function pub(a) {
    let data1 = {
        "Pub_ID": a
    };
    const url = await Request().post("/index.php?action=getpub", Qs.stringify(data1));
    const data = url.data['result'][0]['pub_name'];
    console.log(url.data)
    return data;
};

export default async function showUpdatePage(id) {
    let data2 = {
        "Book_ID": id,
    };
    const url = await Request().post("/index.php?action=getbook", Qs.stringify(data2));
    const data = url.data;
    switch (data['status']) {
        case 200:
            const rows = data['result'];
            const row = rows[0];
            let name = await pub(row['Pub_ID']);
            let str = `書籍編號：<input type="text" id="Book_ID" value="` + row['Book_ID'] + `"><br>`;
            str += `書名：<input type="text" id="title" value="` + row['title'] + `"><br>`;
            str += `作者：<input type="text" id="author" value="` + row['author'] + `"><br>`;
            str += `出版商：<input type="text" id="name" value="` + name + `"><br>`;
            str += `標記：<input type="text" id="remark" value="` + row['remark'] + `"><br>`;
            str += `價格：<input type="text" id="price" value="` + row['price'] + `"><br>`;
            str += `位置：<input type="text" id="place" value="` + row['place'] + `"><br>`;
            str += `<button id="doUpdate">修改</button>`;
            $("#content").html(str);
            $("#doUpdate").click(function () {
                const aaa = $("#name").val();
                doUpdate(aaa);
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
