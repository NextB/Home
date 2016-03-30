function prepareSlideshow() {
    //var slideShow = document.createElement("div");
    //slideShow.id="slideShow";
       
    var preview = document.getElementById("preview");
    preview.style.position = "absolute";
    preview.style.left = "0px";
    preview.style.top = "0px";

    var list = document.getElementById("linklist");
    var links = list.getElementsByTagName("a");
    links[0].onmouseover = function() {
        moveElement("preview", 0, 0, 1);
    }
    links[1].onmouseover = function() {
        moveElement("preview", -50, 0, 1);
    }
    links[2].onmouseover = function() {
        moveElement("preview", -100, 0, 1);
    }
}

addLoadEvent(prepareSlideshow);