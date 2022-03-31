export default function doUpdate(){
    let data = {
        "id": $("#id").val(),
        "name": $("#name").val(),
        "pid": $("#pid").val(),
        "bdate": $("#bdate").val(),
     };
     console.log(data);   
     axios.post("http://localhost/mvc1122test/back/public/index.php?action=updateroom",Qs.stringify(data))
     .then(res => {
         let response = res['data'];
         $("#content").html(response['message']);
     })
     .catch(err => {
         console.error(err); 
     })
 }
