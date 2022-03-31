import Request from '../Request.js';

async function insert(a) {
    let data1 = {
        "pub_name": a,
        "contact": "null",
        "tel": "null",
        "address": "null"
    };
    const url = await Request().post("/index.php?action=newpub", Qs.stringify(data1));
    const data = url.data;
    return data;
}

async function select(b) {
    let data1 = {
        "pub_name": b,
    };
    const url = await Request().post("/index.php?action=getpubname", Qs.stringify(data1));
    const data = url.data;
    return data;
}

export default async function doUpdate(aaa) {
    await insert(aaa);
    const name1 = await select(aaa);
    const data123 = name1['result'][0]['Pub_ID'];
    let data = {
        "title": $("#title").val(),
        "author": $("#author").val(),
        "Pub_ID": data123,
        "remark": $("#remark").val(),
        "price": $("#price").val(),
        "place": $("#place").val(),
    };
    const url2 = await Request().post("/index.php?action=newbook", Qs.stringify(data))
    console.log(url2.data,1)
}
