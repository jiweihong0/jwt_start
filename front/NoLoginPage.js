import posinfo from './admin/posi/posinfo.js';
import loginPage from './loginPage.js';
import startPage from './startPage.js';
export default function NoLoginPage() {    
    const sp = `
        <button id="posi">查詢位於圖書館位置</button>
        <button id="homepage">回首頁</button>
        <button id="login">登入</button>
        <div id="content"></div>
    `;
    $("#root").html(sp);
    $("#posi").click(function (e) { 
        posinfo();
    });
    $("#homepage").click(function (e) { 
        window.location.reload();
    });

    $("#login").click(function (e) { 
        loginPage();
    });
  
    
    
}
