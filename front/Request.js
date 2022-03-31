export default function Request(){
    const req = axios.create({
        baseURL: 'http://localhost/mvc1122test/back/public',
        headers: { 'Authorization': window.localStorage.getItem("jwtToken")}
    })
    return req;
}
