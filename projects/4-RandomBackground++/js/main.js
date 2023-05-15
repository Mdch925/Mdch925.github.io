let ell = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {

    let scrollTop = document.documentElement.scrollTop;
    ell.style.width = `${(scrollTop / height) * 100}%`

})

var mytxt = '    Hello from mohammad marraach This is Type writer Effets on Text';

i = 0;

document.getElementById('btnWriter').onclick = function () {

    'use strict';
    var typewriter = setInterval(function () {
        document.getElementById('type').textContent += mytxt[i];
        i++;

        if (i > mytxt.length - 1) {
            clearInterval(typewriter);
        }

    }, 25)

}

var $count = document.getElementById("count"),
    $textarea = document.getElementById("text"),
    $maxLength = $textarea.getAttribute("maxlength");

$textarea.oninput = function () {
    $count.innerHTML = $maxLength - this.value.length;
    if ($count.innerHTML == 0) {

        $count.classList.add('zero');
    } else {
        $count.classList.remove('zero');
    }

}

var userCaptalize = document.querySelector(".captalize");
let btnCap = document.querySelector(".btnCap");

btnCap.addEventListener("click", function Cap() {

    var oldArray = userCaptalize.value.split(' '),
        newArray = [];

    for (var i = 0; i < oldArray.length; i++) {

        newArray.push(oldArray[i].charAt(0).toUpperCase() + oldArray[i].slice(1));

    }
    let txtCap = document.createElement("textarea");
    txtCap.className = "txtCap";

    return newArray.join(' '),
        // txtCap.value.appendChild(newArray),
        document.body.appendChild(txtCap);

});

document.body.style.backgroundColor = localStorage.getItem('backgrdColor');

let btn = document.querySelector(".btn");
btn.addEventListener('click', random);
function random() {
    var backgroundColorS = document.body.style.backgroundColor = '#' + Math.random().toString(16).slice(2, 8);
    localStorage.setItem('backgrdColor', backgroundColorS);

}

let rowsInput = document.getElementById('rows');
let colsInput = document.getElementById('cols');
let btn1 = document.querySelector(".btn1");
btn1.addEventListener('click', CreateTable);

function CreateTable() {
    let div = document.createElement("div");
    let table = document.createElement("table");

    for (var i = 0; i < rowsInput.value; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);

        for (var j = 0; j < colsInput.value; j++) {
            let td = document.createElement("td");
            let txt = document.createTextNode("item txt");
            td.appendChild(txt);
            tr.appendChild(td);
        }
    }

    table.className = 'table';
    div.appendChild(table);
    document.body.appendChild(div);
}

document.body.classList.add(localStorage.getItem("pageColor") || "red");

var el = document.querySelectorAll(".color-switcher li");
var classList = [];

for (var i = 0; i < el.length; i++) {
    // get att. from html (for creating dynamic prog // in case of
    // anyone pushed a new color)
    classList.push(el[i].getAttribute("data-color"));

    el[i].addEventListener("click", function () {
        document.body.classList.remove(...classList);
        document.body.classList.add(this.getAttribute("data-color"));

        localStorage.setItem('pageColor', this.getAttribute("data-color"));

    }, false);
}
