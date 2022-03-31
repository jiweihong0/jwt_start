import doInsert from './doInsert.js';

export default function showInsertPage(){
    let str = `編號：<label type="text" id="id"><br>`;
    str += `供應商：<input type="text" id="name"><br>`;
    str += `聯絡人：<input type="text" id="pname"><br>`;
    str += `電話：<input type="text" id="phone"><br>`;
    str += `住址：<input type="text" id="addr"><br>`;
    str += `<button id="doinsert">新增</button>`;
    $("#content").html(str);
    $("#doinsert").click(function(){
        doInsert();
    });
}
