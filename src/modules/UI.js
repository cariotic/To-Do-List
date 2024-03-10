import StorageHandler from "./StorageHandler";
import Project from "./Project";
import Task from "./Task";
import { format } from "date-fns";

export default class UI {
    constructor() {

    }

    static loadContent() {
        UI.loadProjects();
        UI.loadTasks();
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
        UI.initChooseProjectButtons();
    }

    static loadTasks(projectTitle) {
        UI.hideTasks();
        const taskList = document.querySelector('.task-list');
        const storedTasks = StorageHandler.getTaskList(projectTitle);

        if(!storedTasks) {
            return;
        }

        storedTasks.forEach(element => {
            const task = document.createElement('div');
            const taskTitle = document.createElement('p');

            task.classList.add('task');
            taskTitle.classList.add('task-title');
            taskTitle.textContent = element.title;
            task.append(taskTitle);
            taskList.append(task);
        });
    }

    static hideTasks() {
        const taskList = document.querySelector('.task-list');
        taskList.innerHTML = '';
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
        UI.initChooseProjectButtons();
    }

    static initChooseProjectButtons() {
        const projectListBtns = document.querySelectorAll('.project');
        projectListBtns.forEach((btn) => {btn.addEventListener('click', UI.chooseProject)});
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

    static chooseProject(e) {
        const taskListHeader = document.querySelector('.task-list-name');
        taskListHeader.textContent = e.target.textContent;

        UI.loadTasks(taskListHeader.textContent);
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

        project.classList.add('project');
        projectTitle.classList.add('project-title');
        projectTitle.textContent = inputProjectTitle.value;
        project.append(projectTitle);
        projectList.append(project);
        project.addEventListener('click', UI.chooseProject);

        UI.hideAddProjectForm();
    }

    static cancelProjectCreation() {
        const inputProjectTitle = document.querySelector('#input-project-title');

        inputProjectTitle.value = '';
        UI.hideAddProjectForm();
    }

    static submitTaskCreation() {
        const inputTaskTitle = document.querySelector('#input-task-title');
        if(!inputTaskTitle.value) {
            alert('You must enter task title');
            return;
        }

        const inputDueDate = document.querySelector('#input-task-date');
        const priority = document.querySelector('input[name="task-priority"]:checked');
        const description = document.querySelector('#input-task-description');
        const projectTitle = document.querySelector('.task-list-name').textContent;

        const dueDate = format(new Date(inputDueDate.value), 'dd/MM/yyyy');
        StorageHandler.saveTask(projectTitle, new Task(inputTaskTitle.value, dueDate, priority.value, description.value));
    
        UI.hideAddTaskForm();
        UI.loadTasks(projectTitle);
    }

    static cancelTaskCreation() {
        const inputTaskTitle = document.querySelector('#input-task-title');
        const inputTaskDescription = document.querySelector('#input-task-description');

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