import showUpdatePage from './showUpdatePage.js';
import doDelete from './doDelete.js';
import Request from '../Request.js';
function showDeleteList(){
    showList("delete"); 
}
function showUpdateList(){
    showList("update");
}
function showList(type){
    Request().get("/index.php?action=getUsers")
    .then(res => {
        let response = res['data'];
        switch(response['status']){
            case 200:
                const rows = response['result'];
                let str = '<table>';
                rows.forEach(element => {
                    str += "<tr>";
                    const idstr = "<input type='radio' id='id' name=id value='" + element['id'] + "'>";
                    str += "<td>" + idstr + "</td>";
                    str += "<td>" + element['name'] + "</td>";
                    str += "<td>" + element['password'] + "</td>";
                    str += "<td>" + element['tdate'] + "</td>";
                    str += "<td>" + element['posi'] + "</td>";
                    str += "<td>" + element['email'] + "</td>";
                    str += "<td>" + element['phone'] + "</td>";
                    str += "<td>" + element['jobtitle'] + "</td>";
                    str += "</tr>";
                });
                str += '</table>';
                if(type=="delete"){
                    str += `<button id="doDelete">刪除</button>`;
                    $("#content").html(str);
                    $("#doDelete").click(function(){
                        doDelete();
                    });
                }
                else{
                    str += `<button id="showUpdatePage">修改</button>`;
                    $("#content").html(str);
                    $("#showUpdatePage").click(function(){
                        showUpdatePage();
                    });
                }                
                break;
            default:
                $("#content").html(response['message']);
                break;
        }
    })
    .catch(err => {
        console.error(err); 
    }) 
}

export { showUpdateList, showDeleteList };
