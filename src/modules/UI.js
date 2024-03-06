export default class GUI {
    constructor() {

    }

    static initButtons() {
        const btnAllTasks = document.querySelector('#btn-all-tasks');
        const btnToday = document.querySelector('#btn-today-tasks');

        const btnAddProject = document.querySelector('#btn-add-project');

        btnAllTasks.addEventListener('click', () => changeTaskList('allTasks'));
        btnToday.addEventListener('click', () => changeTaskList('todayTasks'));
        btnAddProject.addEventListener('click', () => addProject());
    }

    static addProject() {

    }

    static changeView(filterName) {

    }
    
}