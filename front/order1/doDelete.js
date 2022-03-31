import Request from "../Request";
export default function doDelete(id){
    let data = {
        "id": id 
    };
    Request().post("/index.php?action=removeUser",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        $("#content").html(response['message']);
    })
    .catch(err => {
        console.error(err); 
    })          
}
