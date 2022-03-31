import Request from '../Request.js';
async function get(a){
    let data1 = {
        "Book_ID": a,
    };
    const url = await Request().post("/index.php?action=getBookRemark", Qs.stringify(data1));
    const data = url.data;
    console.log(data,1)
    return data;
}
async function updateBookRemark(b){
    let data1 = {
        "Book_ID": b,
    };
    const url = await Request().post("/index.php?action=updateBookRemark", Qs.stringify(data1));
    const data = url.data;
    console.log(data,2)
    return data;

}
export default async function doInsertrecord(){
    const result =await get($("#name").val());
    if(result['result']['length']>0){
    const Book_ID=result['result'][0]['Book_ID'];
    await updateBookRemark(Book_ID);
    let data = {
        "rid": $("#rid").val(),
        "Book_ID":Book_ID
     };
     const url=await Request().post("/index.php?action=newrecordlist",Qs.stringify(data))
     const data1=url.data;
     console.log(data1)
    }else{
        console.log("error")
    }

} 
