import doInsert from './doInsert.js';

export default function showInsertPage(){
    let str = `編號：<input type="text" id="id"><br>`;
    str += `名稱：<input type="text" id="name"><br>`;
    str += `使用者編號：<input type="text" id="pid"><br>`;
    str += `借用日期：<input type="text" id="bdate"><br>`;
    str += `<button id="doinsert">新增</button>`;
    $("#content").html(str);
    $("#doinsert").click(function(){
        doInsert();
    });
}
