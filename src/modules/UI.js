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
        UI.hideProjects();
        const projectList = document.querySelector('.project-list');
        const savedProjects = StorageHandler.getProjectList();          // returns array of objects of type Project

        savedProjects.forEach(element => {
            const project = document.createElement('div');
            const projectTitle = document.createElement('p');
            const deleteIcon = document.createElement('i');

            project.classList.add('project');
            projectTitle.classList.add('project-title');
            deleteIcon.classList.add('fa-solid');
            deleteIcon.classList.add("fa-trash");
            projectTitle.textContent = element.title;
            project.append(projectTitle);
            project.append(deleteIcon);
            projectList.append(project);
        });
        UI.initChooseProjectButtons();
        UI.initDeleteProjectButtons();
    }

    static hideProjects() {
        const projectList = document.querySelector('.project-list');
        projectList.innerHTML = '';
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
            const deleteIcon = document.createElement('i');

            task.classList.add('task');
            taskTitle.classList.add('task-title');
            deleteIcon.classList.add('fa-solid');
            deleteIcon.classList.add("fa-trash");
            taskTitle.textContent = element.title;
            task.append(taskTitle);
            task.append(deleteIcon);
            taskList.append(task);
        });
    }

    static hideTasks() {
        const taskList = document.querySelector('.task-list');
        taskList.innerHTML = '';
    }

    static initButtons() {
        //UI.initFilterButtons();
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

    static initDeleteProjectButtons() {
        const deleteBtns = document.querySelectorAll('.project .fa-trash');
        deleteBtns.forEach((btn) => {btn.addEventListener('click', UI.deleteProject)});
    }

    static initTaskButtons() {
        const btnAddTask = document.querySelector('#btn-add-task');
        const btnSubmitTaskCreation = document.querySelector('#btn-submit-task');
        const btnCancelTaskCreation = document.querySelector('#btn-cancel-task');

        btnAddTask.addEventListener('click', UI.showAddTaskForm);
        btnSubmitTaskCreation.addEventListener('click', UI.submitTaskCreation);
        btnCancelTaskCreation.addEventListener('click', UI.cancelTaskCreation);
    }

    static initDeleteTaskButtons() {
        const deleteBtns = document.querySelectorAll('.task .fa-trash');
        deleteBtns.forEach((btn) => {btn.addEventListener('click', UI.deleteTask)});
    }

    static chooseProject(e) {
        UI.showTaskListTitle();
        const taskListHeader = document.querySelector('#task-list-title');
        taskListHeader.textContent = e.target.textContent;
        
        UI.loadTasks(taskListHeader.textContent);
    }

    static submitProjectCreation() {
        const inputProjectTitle = document.querySelector('#input-project-title');
        if(!inputProjectTitle.value) {
            alert('You must enter project title');
            return;
        }
        if(StorageHandler.getProject(inputProjectTitle.value)){
            alert('Project of this title already exists');
            return;
        }

        StorageHandler.saveProject(new Project(inputProjectTitle.value));

        const projectList = document.querySelector('.project-list');

        const project = document.createElement('div');
        const projectTitle = document.createElement('p');
        const deleteIcon = document.createElement('i');

        project.classList.add('project');
        projectTitle.classList.add('project-title');
        deleteIcon.classList.add('fa-solid');
        deleteIcon.classList.add("fa-trash");
        projectTitle.textContent = inputProjectTitle.value;
        project.append(projectTitle);
        project.append(deleteIcon);
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
        const projectTitle = document.querySelector('#task-list-title').textContent;
        const inputDueDate = document.querySelector('#input-task-date');

        if(!projectTitle) {
            alert('You must choose project');
            UI.hideAddTaskForm();
            return;
        }
        if(!inputTaskTitle.value) {
            alert('You must enter task title');
            UI.hideAddTaskForm();
            return;
        }

        //const priority = document.querySelector('input[name="task-priority"]:checked');
        //const description = document.querySelector('#input-task-description');
        
        const dueDate = format(new Date(inputDueDate.value), 'dd/MM/yyyy');
        StorageHandler.saveTask(projectTitle, new Task(inputTaskTitle.value, dueDate,));
    
        UI.hideAddTaskForm();
        UI.loadTasks(projectTitle);
    }

    static cancelTaskCreation() {
        const inputTaskTitle = document.querySelector('#input-task-title');
        //const inputTaskDescription = document.querySelector('#input-task-description');

        inputTaskTitle.textContent = '';
        //inputTaskDescription.textContent = '';
        UI.hideAddTaskForm();
    }

    static filterTaskList(filterName) {
        // TODO: filter tasks by date
    }

    static showAddProjectForm() {
        const addProjectForm = document.querySelector('.add-project-form');
        addProjectForm.classList.add('show');
    }

    static hideAddProjectForm() {
        const addProjectForm = document.querySelector('.add-project-form');
        addProjectForm.classList.remove('show');
        UI.resetAddProjectForm();
    }

    static resetAddProjectForm() {
        const inputProjectTitle = document.querySelector('#input-project-title');
        inputProjectTitle.value = '';
    }

    static showAddTaskForm() {
        const addTaskForm = document.querySelector('.add-task-form');
        addTaskForm.classList.add('show');

        const inputDueDate = document.querySelector('#input-task-date');
        inputDueDate.value = new Date().toISOString().slice(0, 10);
    }

    static hideAddTaskForm() {
        const addTaskForm = document.querySelector('.add-task-form');
        addTaskForm.classList.remove('show');
        UI.resetAddTaskForm();
    }

    static resetAddTaskForm() {
        const inputTaskTitle = document.querySelector('#input-task-title');
        const inputDueDate = document.querySelector('#input-task-date');
        //const taskPriorityLowRadio = document.querySelector('#task-priority-low');
        //const description = document.querySelector('#input-task-description');

        inputTaskTitle.value = '';
        inputDueDate.value = new Date().toISOString().slice(0, 10);
        //taskPriorityLowRadio.checked = true;
        //description.value = '';
    }

    static showTaskListTitle() {
        const taskListTitle = document.querySelector('#task-list-title');
        taskListTitle.style.display = 'block';
    }

    static hideTaskListTitle() {
        const taskListTitle = document.querySelector('#task-list-title');
        taskListTitle.style.display = 'none';
    }

    static deleteProject(e) {
        const projectTitle = e.target.previousSibling.textContent;
        StorageHandler.deleteProject(projectTitle);
        UI.loadProjects();
    }
    
}