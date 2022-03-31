import Request from "../Request.js";
export default function newItem() {
    const data = {
        "debugermode":1,
        "order_id": $("#order_id").text(),
        "product_id": $("#product_id").text(),
        "number": $("#number").val(),
        "product_price": $("#product_price").text()
    };
    Request().post("/index.php?action=newItem", Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        if(response['status'] != 200)
           $("#order_content").html(response['message']);
        else
            showOrderList();
    })
    .catch(err => {
        console.error(err);
    })
}

