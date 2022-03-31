import posinfo from './admin/posi/posinfo.js';
import NoLoginPage from './NoLoginPage.js';
import recordinfo from './posi/recordinfo.js';
import startPage from './startPage.js';

export default function adminPage(response) {    
    const sp = `
        <button id="posi">查詢位於圖書館位置</button>
        <button id="record">借書紀錄</button>
        <button id="homepage">回首頁</button>
        <button id="switch">切換管理員</button>
        <button id="logout">登出</button>
        <div id="content"></div>
    `;
    $("#root").html(sp);
    $("#posi").click(function (e) { 
        posinfo();
    });
    $("#record").click(function (e) { 
        recordinfo(response);
    });
    $("#homepage").click(function (e) { 
        window.location.reload();
    });
    console.log(response);
    $("#switch").click(function (e) { 
        startPage(response);
    });
    $("#logout").click(function (e) { 
        window.localStorage.clear();
        window.location.reload();
    });
    
    
}
