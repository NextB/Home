//"use strict";
//require("scripts/JsUnity.js");

function positionMessage() {
    var element = document.getElementById("message");
    element.style.position = "absolute";
    element.style.left = "50px";
    element.style.top = "100px";
    moveElement("message", 500, 300, 10);
}

function moveElement(elementID, finalX, finalY, interval) {
    var element = document.getElementById(elementID);
    var x = parseInt(element.style.left);
    var y = parseInt(element.style.top);
    if (x == finalX && y == finalY)
        return true;
    if (x < finalX) {
        x++;
    }
    else if (x > finalX) {
        x--;
    }
    if (y < finalY) {
        y++;
    }
    else if (y > finalY) {
        y--;
    }

    element.style.left = x + "px";
    element.style.top = y + "px";
    var func = "moveElement('" + elementID + "'," + finalX + "," + finalY + "," + interval + ")";
    movement = setTimeout(func, interval);
}

function replaceContent() {
    var testdiv = document.getElementById("testdiv");
    //alert(testdiv.innerHTML);
    //testdiv.innerHTML="<p>I inserted <em> this </em> content.</p>";
    var para = document.createElement("p");
    var txt = document.createTextNode("This is ");
    para.appendChild(txt);
    var emphasis = document.createElement("em");
    var txt2 = document.createTextNode("my");
    emphasis.appendChild(txt2);
    para.appendChild(emphasis);
    var txt3 = document.createTextNode(" content.");
    para.appendChild(txt3);
    //para.textContent = "Hello";
    testdiv.appendChild(para);
}

// window.onload = function() {
//     moveMessage();
// }

function draw() {
    var canvas = document.getElementById("draw-in-me");
    if (!canvas.getContext)
        return;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(120.0, 32.0);
    ctx.bezierCurveTo(120.0, 36.4, 116.4, 40.0, 112.0, 40.0);
    ctx.lineTo(8.0, 40.0);
    ctx.bezierCurveTo(3.6, 40.0, 0.0, 36.4, 0.0, 32.0);
    ctx.lineTo(0.0, 8.0);
    ctx.bezierCurveTo(0.0, 3.6, 3.6, 0.0, 8.0, 0.0);
    ctx.lineTo(112.0, 0.0);
    ctx.bezierCurveTo(116.4, 0.0, 120, 3.6, 120, 8);
    ctx.lineTo(120, 32);

    ctx.closePath();
    ctx.fill();
    ctx.lineWidth = 2.0;
    ctx.strokeStyle = "rgb(255,255,255)";
    ctx.stroke();
}


function Person() {
    Person.prototype.name = "Nicholas";
    Person.prototype.age = 29;
    Person.prototype.job = "Software Engineer";
    Person.prototype.sayName = function() {
        alert(this.name);
    };
}
var person1 = new Person();



//addLoadEvent(positionMessage);
//addLoadEvent(moveElement);
addLoadEvent(draw);

