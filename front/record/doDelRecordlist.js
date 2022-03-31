import Request from '../Request.js';
export default function doDelRecordlist(id,Book_ID){
    let data = {
        "rid": id ,
        "Book_ID": Book_ID,
    };
    console.log(data);
    Request().post("/index.php?action=DelRecordlist",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        $("#content").html(response['message']);
    })
    .catch(err => {
        console.error(err); 
    })          
}
