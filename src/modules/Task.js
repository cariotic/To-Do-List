export default class Task {
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
        this.isCompleted = false;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title) {
        this.title = title;
    }

    getIsCompleted() {
        return this.isCompleted;
    }

    setIsCompleted(isCompleted) {
        this.isCompleted = isCompleted;
    }
}