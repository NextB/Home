function displayAbbreviations() {
    var abbreviation = document.getElementsByTagName("abbr");
    var dl = document.createElement("dl");
    for (var index = 0; index < abbreviation.length; index++) {
        var element = abbreviation[index];
        var definition = element.getAttribute("title");
        var name = element.lastChild.nodeValue;
        var dt = document.createElement("dt");
        var dtitle_text = document.createTextNode(name);
        dt.appendChild(dtitle_text);
        
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        
        dl.appendChild(dt);
        dl.appendChild(ddesc);
    }
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    
    document.body.appendChild(header);
    document.body.appendChild(dl);
}

function displayCitations() {
    var quotes = document.getElementsByTagName("blockquote");
    for (var index = 0; index < quotes.length; index++) {
        var element = quotes[index];
        if (!element.getAttribute("cite"))
            continue;
        var url = element.getAttribute("cite");
        var text = element.textContent;
        
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        
        element.appendChild(superscript);
    }
}

window.onload = function () {
    displayAbbreviations();
    displayCitations();
};