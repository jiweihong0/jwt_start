import Request from '../Request.js';
export default function doInsert(){
    let data = {
        "pub_name": $("#name").val(),
        "contact": $("#contact").val(),
        "tel": $("#tel").val(),
        "address": $("#address").val(),
        "action" : "newpub"
     };
     console.log(data)
     Request().post("/index.php",Qs.stringify(data))
     .then(res => {
         let response = res['data'];
         console.log(response,1);
         $("#content").html(response['message']);
     })
     .catch(err => {
         console.error(err); 
     })
 }
