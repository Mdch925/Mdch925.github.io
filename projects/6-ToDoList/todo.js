var todoList = [];

function remove(index) {
    todoList.splice(index, 1)
    show()
}

function add() {
    // 1. get value from input
    var mon = document.getElementById("task").value;
    // 2. store value in array
    todoList.push(mon);

    show()
    document.getElementById("task").value = ""
}

function show() {
    // 3. prepare HTML code to be inserted
    var html = "<ul>";
    for (let i = 0; i < todoList.length; i++) {
        html += '<li>' + todoList[i] + ' <span style="cursor:pointer" onclick="remove(' + i + ')">X</span></li>'
    }
    html += '</ul>'

    // 4. set todos html
    document.getElementById('todo').innerHTML = html;
}