import doInsert from './doInsert.js';
export default function showInsertPage(){
    let str = `書名：<input type="text" id="title"> <br>`;
    str += `作者：<input type="text" id="author" ><br>`;
    str += `出版商：<input type="text" id="name"><br>`;
    str += `標記：<input type="text" id="remark" ><br>`;
    str += `價格：<input type="text" id="price" ><br>`;
    str += `位置：<input type="text" id="place" ><br>`; 
    str += `<button id="doinsert">新增</button>`;
    $("#content").html(str);
    $("#doinsert").click(function(){
        const aaa =$("#name").val();
        doInsert(aaa);
    });
}
