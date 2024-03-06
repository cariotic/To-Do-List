export default class UI {
    constructor() {

    }

    static loadContent() {
        UI.initButtons();
    }

    static initButtons() {
        UI.initFilterButtons();
        UI.initProjectButtons();
        UI.initTaskButtons();
        
    }

    static initFilterButtons() {
        const btnAllTasks = document.querySelector('#btn-all-tasks');
        const btnToday = document.querySelector('#btn-today-tasks');

        btnAllTasks.addEventListener('click', () => UI.filterTaskList('allTasks'));
        btnToday.addEventListener('click', () => UI.filterTaskList('todayTasks'));
    }

    static initProjectButtons() {
        const btnAddProject = document.querySelector('#btn-add-project');
        const btnSubmitProjectCreation = document.querySelector('#btn-submit-project');
        const btnCancelProjectCreation = document.querySelector('#btn-cancel-project');

        btnAddProject.addEventListener('click', UI.showAddProjectForm);
        btnSubmitProjectCreation.addEventListener('click', UI.submitProjectCreation);
        btnCancelProjectCreation.addEventListener('click', UI.cancelProjectCreation);
    }

    static initTaskButtons() {
        const btnAddTask = document.querySelector('#btn-add-task');
        const btnSubmitTaskCreation = document.querySelector('#btn-submit-task');
        const btnCancelTaskCreation = document.querySelector('#btn-cancel-task');

        btnAddTask.addEventListener('click', UI.showAddTaskForm);
        btnSubmitTaskCreation.addEventListener('click', UI.submitTaskCreation);
        btnCancelTaskCreation.addEventListener('click', UI.cancelTaskCreation);
    }

    static showAddProjectForm() {
        const addProjectForm = document.querySelector('.add-project-form');
        addProjectForm.classList.add('show');
    }

    static showAddTaskForm() {
        const addTaskForm = document.querySelector('.add-task-form');
        addTaskForm.classList.add('show');
    }

    static submitProjectCreation() {
        // TODO: read & validate input from add-project-form
    }

    static cancelProjectCreation() {
        const inputProjectTitle = document.querySelector('#input-project-title');
        const addProjectForm = document.querySelector('.add-project-form');

        inputProjectTitle.textContent = '';
        addProjectForm.classList.remove('show');
    }

    static submitTaskCreation() {
        // TODO: read & validate input from add-task-form
    }

    static cancelTaskCreation() {
        const inputTaskTitle = document.querySelector('#input-task-title');
        const inputTaskDescription = document.querySelector('#input-task-description');
        const addTaskForm = document.querySelector('.add-task-form');

        inputTaskTitle.textContent = '';
        inputTaskDescription.textContent = '';
        addTaskForm.classList.remove('show');
    }

    static filterTaskList(filterName) {
        // TODO: filter tasks by date
    }
    
}