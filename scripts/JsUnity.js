function addLoadEvent(func) {
    var oldAction = window.onload;
    if (typeof oldAction != "function") {
        window.onload = func;
    }
    else {
        window.onload = function() {
            oldAction();
            func();
        }
    }
}

function highlightRows() {
    var rows = document.getElementsByTagName("tr");
    for (var index = 0; index < rows.length; index++) {
        var element = rows[index];
        element.onmouseover = function() {
            element.style.fontStyle = "bold";
        }
        element.onmouseout = function() {
            element.style.fontStyle = "normal";
        }
    }
}

function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    }
    else {
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

function styleElementSiblings(tag, theClass) {
    var elements = document.getElementsByTagName(tag);
    for (var index = 0; index < elements.length; index++) {
        var element = elements[index];
        addClass(element, theClass);
    }
}

function moveElement(elementID, finalX, finalY, interval) {
    var element = document.getElementById(elementID);
    if (element.moveElement != null)
        clearTimeout(element.moveElement);
    if (!element.style.left)
        element.style.left = "0px";
    if (!element.style.top)
        element.style.top = "0px";
    var x = parseInt(element.style.left);
    var y = parseInt(element.style.top);
    if (x == finalX && y == finalY)
        return true;
    if (x < finalX) {
        var dist = Math.ceil((finalX - x) / 10);
        x = x + dist;
    }
    else if (x > finalX) {
        var dist = Math.ceil((x - finalX) / 10);
        x = x - dist;
    }
    if (y < finalY) {
        var dist = Math.ceil((finalY - y) / 10);
        y = y + dist;
    }
    else if (y > finalY) {
        var dist = Math.ceil((y - finalY) / 10);
        y = y - dist
    }

    element.style.left = x + "px";
    element.style.top = y + "px";
    var func = "moveElement('" + elementID + "'," + finalX + "," + finalY + "," + interval + ")";
    element.moveElement = setTimeout(func, interval);
}
function highlightPage() {
    var nav = document.getElementById("navigation");
    var links = nav.getElementsByTagName("a");
    for (var index = 0; index < links.length; index++) {
        var element = links[index];
        var url = element.href;
        var currentuUrl = window.location.href;
        if (currentuUrl.indexOf(url) != -1) {
            addClass(element, "here");
        }
    }
}

function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && (name in object);
}


//addLoadEvent(highlightPage);