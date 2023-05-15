function get_todos() {

    var todos = new Array;
    var todos_str = localStorage.getItem('todo');

    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {

    var task = document.getElementById('task').value;
    var todo = get_todos();

    todo.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function clear() {

    if (a.defultValue == a.Value) { a.Value = "" }

}

function remove() {

    var id = this.getElementById('id');
    var todos = get_todos();
    todos.splice(id, 1);

    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function show() {

    var todos = get_todos();
    var html = '<ul>';

    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id = "' + i + '">Delete</button> </li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var button = document.getElementsByClassName('remove');

    for (var i = 0; i < button.length; i++) {
        button[i].addEventListener('click', remove);
    };
}

document.getElementById('add').addEventListener('click', add);
show();
