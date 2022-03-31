import Request from '../Request.js';
export default function doUpdate(){
    let data = {
        "Pub_ID": $("#id").val(),
        "pub_name": $("#name").val(),
        "contact": $("#contact").val(),
        "tel": $("#tel").val(),
        "address": $("#address").val()
        
     };
     Request().post("/index.php?action=updatepub",Qs.stringify(data))
     .then(res => {
         let response = res['data'];
         console.log(response)
         $("#content").html(response['message']);
     })
     .catch(err => {
         console.error(err); 
     })
 }
