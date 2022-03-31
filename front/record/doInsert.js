import Request from '../Request.js';
async function name1(b) {
    let data1 = {
        "name": b,
    };
    const url = await Request().post("/index.php?action=getguestname", Qs.stringify(data1));
    const data2 = url.data;
    console.log(data2,1)
    return data2;  
}
export default async function doInsert(aaa){
    const name = await name1(aaa);
    console.log(name,5);
    const nameans= name['result'][0]['Guest_ID']
    console.log(nameans,3);
    let data123 = {
        "rid": $("#rid").val(),
        "Guest_ID": nameans
        
     };
     console.log(data123,4)
     const url=await Request().post("/index.php?action=newrecord",Qs.stringify(data123))
     const data1=url.data;
     console.log(data1,2)

}
