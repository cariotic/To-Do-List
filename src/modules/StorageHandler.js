import Project from './Project';
import Task from './Task';

export default class StorageHandler {

    static getProjectList() {
        let storedProjectList = localStorage.getItem('projectList');
        let projectList = [];

        if(storedProjectList) {
            projectList = JSON.parse(storedProjectList);
        }
        else {
            projectList = [];
        }
        return projectList;
    }

    static getProject(projectTitle) {
        const projectList = StorageHandler.getProjectList();
        let project = {};

        if(projectList) {
            project = projectList.find(({title}) => title === projectTitle);
        }
        return (typeof project !== undefined) ? project : null;
    }

    static saveProject(project) {
        let projectList = StorageHandler.getProjectList();
        projectList.push(project);
        localStorage.setItem('projectList', JSON.stringify(projectList));
    }

    static updateProject(project) {
        const idx = StorageHandler.deleteProject(project.title);

        if(idx < 0) {
            return;
        }

        const projectList = StorageHandler.getProjectList();
        projectList.splice(idx, 0, project);
        localStorage.setItem('projectList', JSON.stringify(projectList));
    }

    static deleteProject(projectTitle) {
        const projectList = StorageHandler.getProjectList();
        let projectToDelete = {};

        if(!projectList) {
            return -1;
        }

        projectToDelete = projectList.find(({title}) => title === projectTitle);

        if(projectToDelete === undefined) {
            return -1;
        }

        const deletedIdx = projectList.indexOf(projectToDelete);
        
        if(deletedIdx < 0){
            return -1;
        }

        projectList.splice(deletedIdx, 1);
        localStorage.setItem('projectList', JSON.stringify(projectList));
        return deletedIdx;
    }

    static getTaskList(projectTitle) {
        const project = StorageHandler.getProject(projectTitle);
        if(!project) {
            return null;
        }
        return project.taskList;
    }
    
    static getTask(projectTitle, taskTitle) {
        const project = StorageHandler.getProject(projectTitle);
        let task = {};

        task = project.taskList.find(({title}) => title === taskTitle);
        return (typeof task !== undefined) ? task : null;
    }

    static saveTask(projectTitle, task) {
        const project = StorageHandler.getProject(projectTitle);

        if(!project){
            alert('No project of this title');
            return;
        }
        project.taskList.push(task);
        StorageHandler.updateProject(project);
    }

    static updateTask(projectTitle, task) {
        const idx = StorageHandler.deleteTask(projectTitle, task.title);

        if(idx < 0) {
            return;
        }

        let project = StorageHandler.getProject(projectTitle);
        let taskList = project.taskList;
        taskList.splice(idx, 0, task);
        project.taskList = taskList;
        StorageHandler.updateProject(project);
    }

    static deleteTask(projectTitle, taskTitle) {
        let taskList = StorageHandler.getTaskList(projectTitle);
        let project = StorageHandler.getProject(projectTitle);

        if(!project) {
            return -1;
        }

        const deletedIdx = taskList.indexOf(taskList.find(({title}) => title === taskTitle));

        if(deletedIdx < 0) {
            return -1;
        }

        taskList.splice(deletedIdx, 1);
        project.taskList = taskList;
        StorageHandler.updateProject(project);
        return deletedIdx;
    }

    static toggleIsCompleted(projectTitle, taskTitle) {
        let task = StorageHandler.getTask(projectTitle, taskTitle);

        if(!task) {
            return -1;
        }

        task.isCompleted = !task.isCompleted;
        StorageHandler.updateTask(projectTitle, task);
    }
}