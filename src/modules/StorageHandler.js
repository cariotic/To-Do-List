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

    static saveTask(projectTitle, task) {
        const project = StorageHandler.getProject(projectTitle);

        if(!project){
            alert('No project of this title');
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
        return project.taskList;
    }
}