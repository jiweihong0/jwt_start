export default function doUpdate(){
    let data = {
        "id": $("#id").val(),
        "name": $("#name").val(),
        "pname": $("#pname").val(),
        "phone": $("#phone").val(),
        "addr": $("#addr").val()
     };
     axios.post("http://localhost/mvc1122test/back/index.php?action=updatesup",Qs.stringify(data))
     .then(res => {
         let response = res['data'];
         $("#content").html(response['message']);
     })
     .catch(err => {
         console.error(err); 
     })
 }

