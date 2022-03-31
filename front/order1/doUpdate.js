import Request from "../Request";
export default function doUpdate(){
    let data = {
        "id": $("#id").val(),
        "name": $("#name").val(),
        "password": $("#password").val(),
        "tdate": $("#tdate").val(),
        "posi": $("#posi").val(),
        "email": $("#email").val(),
        "phone": $("#phone").val(),
        "jobtitle": $("#jobtitle").val()
     };
     Request().post("/index.php?action=updateUser",Qs.stringify(data))
     .then(res => {
         let response = res['data'];
         $("#content").html(response['message']);
     })
     .catch(err => {
         console.error(err); 
     })
 }
