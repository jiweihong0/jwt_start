import doInsert from './doInsert.js';

export default function showInsertPage(){
    let str = `編號：<input type="text" id="id"><br>`;
    str += `書名：<input type="text" id="name"><br>`;
    str += `種類：<input type="text" id="type"><br>`;
    str += `狀態：<input type="text" id="info"><br>`;
    str += `借閱人：<input type="text" id="person"><br>`;
    str += `借閱日期：<input type="text" id="bdate"><br>`;
    str += `歸還日期：<input type="text" id="rdate"><br>`;
    str += `<button id="doinsert">新增</button>`;
    $("#content").html(str);
    $("#doinsert").click(function(){
        doInsert();
    });
}
