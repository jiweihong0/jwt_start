export default function doSelect(){
    axios.get("http://localhost/mvc1122test/back/index.php?action=selsup")
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
                    str += "<td>" + element['pname'] + "</td>";
                    str += "<td>" + element['phone'] + "</td>";
                    str += "<td>" + element['addr'] + "</td>";
                    str += "</tr>";
                });
                str += '</table>';
                $("#content").html(str);
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
