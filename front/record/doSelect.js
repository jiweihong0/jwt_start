import Request from '../Request.js';
export default function doSelect(){
    Request().get("/index.php?action=getrecord")
    .then(res => {
        let response = res['data'];
        switch(response['status']){
            case 200:
                const rows = response['result'];
                let str = '<table>';
                rows.forEach(element => {
                    str += "<tr>";
                    str += "<td>" + element['id'] + "</td>";
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
                $("#content").html(str);
                if(window.localStorage){ //儲存到 local storage
                    window.localStorage.setItem("jwtToken", response['token']);
                }
                break;
            case 403:
                loginPage();
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
