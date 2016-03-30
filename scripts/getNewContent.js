function getNewContent() {
    var request = new XMLHttpRequest();// getHTTPObject(0);
    if (!request)
        return false;
    request.open("GET", "example.txt", true);
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            var para =document.createElement("p");
            var txt = document.createTextNode(request.responseText);
            para.appendChild(txt);
            document.getElementById("new").appendChild(para);
        }
    }
    request.send(null);
}

addLoadEvent(getNewContent);