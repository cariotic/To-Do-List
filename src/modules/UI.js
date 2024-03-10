import StorageHandler from "./StorageHandler";
import Project from "./Project";

export default class UI {
    constructor() {

    }

    static loadContent() {
        UI.loadProjects();
        UI.initButtons();
    }

    static loadProjects() {
        const projectList = document.querySelector('.project-list');
        const savedProjects = StorageHandler.getProjectList();          // returns array of objects of type Project

        savedProjects.forEach(element => {
            const project = document.createElement('div');
            const projectTitle = document.createElement('p');

            project.classList.add('project');
            projectTitle.classList.add('project-title');
            projectTitle.textContent = element.title;
            project.append(projectTitle);
            projectList.append(project);
        });
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
        const inputProjectTitle = document.querySelector('#input-project-title');
        if(!inputProjectTitle.value) {
            alert('You must enter project title');
            return;
        }
        else if(StorageHandler.getProject(inputProjectTitle.value)){
            alert('Project of this title already exists');
            return;
        }

        StorageHandler.saveProject(new Project(inputProjectTitle.value));

        const projectList = document.querySelector('.project-list');

        const project = document.createElement('div');
        const projectTitle = document.createElement('p');

        projectTitle.textContent = inputProjectTitle.value;
        project.append(projectTitle);
        projectList.append(project);

        UI.hideAddProjectForm();
    }

    static cancelProjectCreation() {
        const inputProjectTitle = document.querySelector('#input-project-title');
        const addProjectForm = document.querySelector('.add-project-form');

        inputProjectTitle.value = '';
        UI.hideAddProjectForm();
    }

    static submitTaskCreation() {
        // TODO: read & validate input from add-task-form
        const inputTaskTitle = document.querySelector('#input-task-title');
        if(!inputTaskTitle.value) {
            alert('You must enter task title');
            return;
        }

        const dueDate = document.querySelector('#input-task-date');
        const priority = document.querySelector('input[name="task-priority"]:checked');
        const description = document.querySelector('#input-task-description');
        StorageHandler.saveTask(new Task(inputTaskTitle.value, dueDate.value, priority.value, description.value));
    
        UI.hideAddTaskForm();
    }

    static cancelTaskCreation() {
        const inputTaskTitle = document.querySelector('#input-task-title');
        const inputTaskDescription = document.querySelector('#input-task-description');
        const addTaskForm = document.querySelector('.add-task-form');

        inputTaskTitle.textContent = '';
        inputTaskDescription.textContent = '';
        UI.hideAddTaskForm();
    }

    static filterTaskList(filterName) {
        // TODO: filter tasks by date
    }

    static hideAddProjectForm() {
        const addProjectForm = document.querySelector('.add-project-form');
        addProjectForm.classList.remove('show');
    }

    static hideAddTaskForm() {
        const addTaskForm = document.querySelector('.add-task-form');
        addTaskForm.classList.remove('show');
    }
    
}