import Request from '../Request.js';
export default function doDelete(id){
    let data = {
        "Pub_ID": id ,
        
    };
    Request().post("/index.php?action=removerecord",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        $("#content").html(response['message']);
    })
    .catch(err => {
        console.error(err); 
    })          
}
