import Request from '../Request.js';
async function select(b) {
    let data1 = {
        "Book_name": b,
    };
    const url = await Request().post("/index.php?action=getbooktitle", Qs.stringify(data1));
    const data = url.data;
    return data;
}
async function select2(b) {
    let data1 = {
        "name": b,
    };
    const url = await Request().post("/index.php?action=getguestname", Qs.stringify(data1));
    const data = url.data;
    return data;
}
export default async function doUpdate(name,bookname) {
    const result = await select(bookname);
    const result2 = await select2(name);
    console.log(result2);
    const Book_ID = result['result'][0]['Book_ID'];
    const Guest_ID = result2['result'][0]['Guest_ID'];
    let data = {
        "Book_ID": Book_ID,
        "Guest_ID": Guest_ID,
    };
    const url2 =await Request().post("/index.php?action=newlost", Qs.stringify(data))
    console.log(url2.data,1)
}
