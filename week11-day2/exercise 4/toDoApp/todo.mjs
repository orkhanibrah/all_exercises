export class TodoList {
    constructor(tasks){
        this.tasks = tasks;
        
    }

    addTask(task){
        this.tasks.push(task);
    }

    markTask(task){
        this.tasks[this.tasks.indexOf(task)] += ' completed';
    }

    listTasks(){
        this.tasks.forEach(task => {
            console.log(task);
        })
    }
    
}