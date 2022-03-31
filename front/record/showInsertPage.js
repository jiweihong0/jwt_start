import doInsert from './doInsert.js';

export default function showInsertPage(){
    let str = `書籍編號：<input type="text" id="rid" disabled="disabled"><br>`;
        str += `借書人：<input type="text" id="name"><br>`;
        str += `<button id="doinsert">修改</button>`;
    $("#content").html(str);
    $("#doinsert").click(function(){
        const aaa = $("#name").val();
        doInsert(aaa);
    });
}
