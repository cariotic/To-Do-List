export default class Project {
    constructor(title) {
        this.title = title;
        this.taskList = [];
    }

    setTaskList(taskList) {
        this.taskList = taskList;
    }

    addToTaskList(task){
        this.taskList.push(task);
    }
}