const {TodoList} = await import('./todo.mjs');

const list = new TodoList(['task 1']);

list.addTask('task 2');
list.addTask('task 3');
list.markTask('task 1')
list.listTasks();