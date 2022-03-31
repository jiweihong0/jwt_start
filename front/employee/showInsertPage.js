import doInsert from './doInsert.js';

export default function showInsertPage(){
    let str =`出版商名稱：<input type="text" id="name"><br>`;
    str += `聯繫：<input type="text" id="contact"><br>`;
    str += `手機：<input type="text" id="tel"><br>`;
    str += `住址：<input type="text" id="address"><br>`;
    str += `<button id="doinsert">新增</button>`;
    $("#content").html(str);
    $("#doinsert").click(function(){
        doInsert();
    });
}
