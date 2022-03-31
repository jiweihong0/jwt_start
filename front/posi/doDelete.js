import Request from '../Request.js';
export default function doDelete(id){
    let data = {
        "Book_ID": id , 
        
    };
    console.log(id)
    Request().post("/index.php?action=removebook",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        $("#content").html(response['message']);
    })
    .catch(err => {
        console.error(err); 
    })          
}
