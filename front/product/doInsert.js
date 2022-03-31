export default function doInsert(){
    let data = {
         "id": $("#id").val(),
         "name": $("#name").val(),
         "type": $("#type").val(),
         "info": $("#info").val(),
         "person": $("#person").val(),
         "bdate": $("#bdate").val(),
         "rdate": $("#rdate").val()
        
     };
     console.log(data)
     axios.post("http://localhost/mvc1122test/back/public/index.php?action=newbook",Qs.stringify(data))
     
     .then(res => {
         let response = res['data'];
         $("#content").html(response['message']);
     })
     .catch(err => {
         console.error(err); 
     })
 }
