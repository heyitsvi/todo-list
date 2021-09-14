import {appendDisplayElement, createDisplayElement} from "./dom.js";
import {displayInbox} from "./inbox.js";

class tasks{
    constructor(title, description, duedate, priority,check,task_number,project="default"){
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.check = check;
        this.task_number = task_number;
        this.project = project;
    }
}

function taskOperations(){
    const taskcontainer = document.querySelector("#task-container");
    let task_number = 1;
    let array = [];


    function getvaluesTask(){
        let title = document.querySelector("#task-title-input").value;
        let task_description = document.querySelector("#task-description-input").value;
        let task_due = document.querySelector("#task-due-input").value;
        let task_priority = document.querySelector("#task-priority-input").value;
        return {title,task_description,task_due,task_priority};
    }

    function storeinLocalStorage(object){
        if (object.project == "default"){
            localStorage.setItem(`${object.task_number}`, JSON.stringify(object));
        }
        else{
            localStorage.setItem(`${object.project}`,JSON.stringify(object));
        }
    }

    function clearvaluesTask(){
        document.querySelector("#task-title-input").value = "";
        document.querySelector("#task-description-input").value="";
        document.querySelector("#task-due-input").value="";
        document.querySelector("#task-priority-input").value="";
    }

    function updateTasks(){
        document.querySelectorAll("#update-task").forEach(button => {
            button.addEventListener("click", event => {
                console.log(button);
            })
        })
    }

    function createTaskObject(){
        let values = getvaluesTask();
        let object = new tasks(values.title,values.task_description,values.task_due,values.task_priority,false,task_number,"default");
        task_number++;
        return object;
    }

    function showTaskContainer(){
        taskcontainer.classList.add('show');
    }
    
    function hideTaskContainer(){
        taskcontainer.classList.remove('show');
    }

    (function addtaskBtnClick(){
        document.querySelector("#add-taskBtn").addEventListener("click", event => {
            showTaskContainer();
        });
    })();

    (function cancelBtnClick(){
        document.querySelector("#cancel-task").addEventListener("click", event => {
            hideTaskContainer();
        });
    })();

    (function submittaskBtnClick(){
        document.querySelector("#submit-task").addEventListener("click", event => {
            storeinLocalStorage(createTaskObject());
            hideTaskContainer();
            displayInbox(task_number);
            updateTasks();
            clearvaluesTask();
        });
    })();

    return {
        task_number
    }

}





export {taskOperations};

// function getTasks(){

// }