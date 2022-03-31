export default function doUpdate(){
    let data = {
        "id": $("#id").val(),
        "name": $("#name").val(),
        "type": $("#type").val(),
        "info": $("#info").val(),
        "person": $("#person").val(),
        "bdate": $("#bdate").val(),
        "rdate": $("#rdate").val()
     };
     axios.post("http://localhost/mvc1122test/back/public/index.php?action=updatebook",Qs.stringify(data))
     .then(res => {
         let response = res['data'];
         $("#content").html(response['message']);
     })
     .catch(err => {
         console.error(err); 
     })
 }
