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
        const project = {};

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
        StorageHandler.deleteProject(project.title);
        const projectList = StorageHandler.getProjectList();
        projectList.push(project);
        localStorage.setItem('projectList', JSON.stringify(projectList));
    }

    static deleteProject(projectTitle) {
        const projectList = StorageHandler.getProjectList();
        const projectToDelete = StorageHandler.getProject(projectTitle);

        if(!projectToDelete) {
            return;
        }
        
        projectList.splice(projectList.indexOf(projectToDelete), 1);
        localStorage.setItem('projectList', JSON.stringify(projectList));
    } 

    static saveTask(projectTitle, task) {
        const project = StorageHandler.getProject(projectTitle);

        if(!project){
            return;
        }

        project.taskList.push(task);
        this.updateProject(project);
    }

    static getTaskList(projectTitle) {
        const project = StorageHandler.getProject(projectTitle);
        if(!project) {
            return null;
        }
        console.log(project.taskList);
        return project.taskList;
    }
}