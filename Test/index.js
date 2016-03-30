var mode = "happy";
//alert(mode);


function countBodyChildren() {
    var body_element = document.body;
    alert(body_element.nodeType)
}

function showPic(image) {
    var source = image.getAttribute("href");
    var title = image.getAttribute("title");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    
    var description = document.getElementById("description");
    description.firstChild.nodeValue = title;
    return false;
}

function prepareGallery() {
    if(!document.getElementsByName
    ||!document.getElementById) 
    return false;   
    var imagegallery = document.getElementById("imagegallery");
    var children = imagegallery.getElementsByTagName("a");
    for (var index = 0; index < children.length; index++) {
        var element = children[index];
        element.onclick = function() {
         return showPic(this);
        }
        //element.onkeypress=element.onclick;
    }
}

function preparePlaceholder() {
    var img = document.createElement("img");
    img.setAttribute("src","images/download.png");
    img.setAttribute("alt","Show image");
    img.setAttribute("id","placeholder");
    document.body.appendChild(img);
    
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var textNode = document.createTextNode("Choose an image");
    description.appendChild(textNode);
    //document.body.appendChild(description);
    img.parentNode.insertBefore(description,img);
}

window.onload =function () {
    prepareGallery();
    preparePlaceholder();     
}

var arrays = document.getElementsByTagName("li");
//alert(length);

//print("hello");
//var colors = Array();

//window.open("http://www.baidu.com");