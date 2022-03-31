import doInsertrecord from './doInsertrecord.js';

export default function showinsertrecordPage(rid){
    let str = `借閱編號：<input type="text" id="rid" disabled="disabled" value="` +rid + `"><br>`;
        str += `書籍編號：<input type="text" id="name" ><br>`;
        str += `<button id="doinsert">新增</button>`;
        $("#content").html(str);
    $("#doinsert").click(function(){
        doInsertrecord();
    });
}
