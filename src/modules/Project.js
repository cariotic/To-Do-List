export default class Project {
    constructor(title) {
        this.title = title;
        this.taskList = [];
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getTaskList() {
        return this.taskList;
    }

    setTaskList(taskList) {
        this.taskList = taskList;
    }

    addToTaskList(task){
        this.taskList.push(task);
    }
}