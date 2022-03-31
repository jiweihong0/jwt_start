import doUpdate from './doUpdate.js';
import Request from '../Request.js';
async function pub(a) {
    let data1 = {
        "Guest_ID": a
    };
    const url = await Request().post("/index.php?action=getguest", Qs.stringify(data1));
    const data = url.data['result'][0]['name'];
    console.log(url.data)
    return data;
};
export default async function showUpdaterecordPage(id) {
    let data2 = {
        "rid": id,
    };
    const url = await Request().post("/index.php?action=getrecord", Qs.stringify(data2));
    const data = url.data;
    switch (data['status']) {
        case 200:
            const rows = data['result'];
            const row = rows[0];
            let name = await pub(row['Guest_ID']);
            let str = `編號：<input type="text" id="seq" disabled="disabled" value="` + row['seq'] + `"><br>`;
            str += `書籍編號：<input type="text" id="rid" value="` + row['rid'] + `"><br>`;
            str += `借書人：<input type="text" id="name" value="` + name + `"><br>`;
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
