import Request from '../Request.js';

async function select(b) {
    let data1 = {
        "name": b,
    };
    const url = await Request().post("/index.php?action=getguestname", Qs.stringify(data1));
    const data = url.data;
    return data;  
}

export default async function doUpdate(aaa) {
    const name1 = await select(aaa);
    const data123 = name1['result'][0]['Guest_ID'];
    let data = {
        "rid": $("#rid").val(),
        "Guest_ID": data123

    };
    const url2 = await Request().post("/index.php?action=updaterecord", Qs.stringify(data))
    console.log(url2.data,1)
}
