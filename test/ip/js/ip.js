
function httpRequest(url, callback) {
    var xhr = XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        
        alert(xhr.responseText);
        if(xhr.readyState == 4) {
            alert(xhr.responseText);
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

httpRequest("http://1212.ip138.com/ic.asp", function (ip) {
    document.getElementById("ip_div").innerText(ip);
});