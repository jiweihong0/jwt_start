export default function doInsert(){
    let data = {
         "name": $("#name").val(),
         "pname": $("#pname").val(),
         "phone": $("#phone").val(),
         "addr": $("#addr").val()
     };
     console.log(data)
     axios.post("http://localhost/mvc1122test/back/index.php?action=insertsup",Qs.stringify(data))
     
     .then(res => {
         let response = res['data'];
         $("#content").html(response['message']);
     })
     .catch(err => {
         console.error(err); 
     })
 }
