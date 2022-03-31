export default function doSelect(){
    axios.get("http://localhost/mvc1122test/back/public/index.php?action=getbook")
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
                    str += "<td>" + element['type'] + "</td>";
                    str += "<td>" + element['info'] + "</td>";
                    str += "<td>" + element['person'] + "</td>";
                    str += "<td>" + element['bdate'] + "</td>";
                    str += "<td>" + element['rdate'] + "</td>";
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
