import {clearTasks} from "./dom.js";
import {displayInbox} from "./inbox.js";

class tasks{
    constructor(title, description, duedate, priority,check,task_number,project="Inbox"){
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
    const update_task = document.querySelector("#update-task-container");
    let task_number;
    
    if (localStorage.getItem("task_number")){
        task_number = getTaskNumber();
    }
    else{
        task_number = 1;
    }

    function checkTaskValues(){
        if (document.querySelector("#task-title-input").value&&
        document.querySelector("#task-description-input").value&&
        document.querySelector("#task-due-input").value&&
        document.querySelector("#task-priority-input").value !== '' &&
        document.querySelector("#project-selection-input-1").value !== ""){
            return true;
        }
        else{
            return false;
        }
    }



    function getupdatedvaluesTask(){
        if(document.querySelector("#update-task-container").querySelector("#task-title-input").value == "" ||
        document.querySelector("#update-task-container").querySelector("#task-description-input").value == ""||
        document.querySelector("#update-task-container").querySelector("#task-due-input").value == ""||
        document.querySelector("#update-task-container").querySelector("#task-priority-input").value =="" ||
        document.querySelector("#update-task-container").querySelector("#project-selection-input-2").value ==""){
            return false;
        }
        else{
            let title = document.querySelector("#update-task-container").querySelector("#task-title-input").value;
            let description = document.querySelector("#update-task-container").querySelector("#task-description-input").value;
            let duedate = document.querySelector("#update-task-container").querySelector("#task-due-input").value;
            let priority = document.querySelector("#update-task-container").querySelector("#task-priority-input").value;
            let project = document.querySelector("#update-task-container").querySelector("#project-selection-input-2").value;
            return {title,description,duedate,priority,project};
        }
    }



    function storeinLocalStorage(object){
        localStorage.setItem(`${object.task_number}`, JSON.stringify(object));
    }

    function getvaluesLocalStorage(task_number){
        let object = JSON.parse(localStorage.getItem(`${task_number}`));
        let title = object["title"];
        let description = object["description"];
        let duedate = object["duedate"];
        let priority = object["priority"];
        let check = object["check"];
        let num = object["task_number"];
        let project = object["project"];

        return {title,description,duedate,priority,check,num,project};
    }



    function updatevaluesTask(id){
        let title = document.getElementById(id).querySelector("#title").textContent;
        let description = document.getElementById(id).querySelector("#description").textContent;
        let duedate = document.getElementById(id).querySelector("#duedate").textContent;
        let priority = document.getElementById(id).querySelector("#priority").textContent;
        let num = id.split("-")[2]
        let object = getvaluesLocalStorage(num);
        let project = object.project;

        document.querySelector("#update-task-container").querySelector("#task-title-input").value = title;
        document.querySelector("#update-task-container").querySelector("#task-description-input").value=description;
        document.querySelector("#update-task-container").querySelector("#task-due-input").value=duedate;
        document.querySelector("#update-task-container").querySelector("#task-priority-input").value=priority;
        document.querySelector("#update-task-container").querySelector("#project-selection-input-2").value = project;

    }

    function clearvaluesTask(){
        document.querySelector("#task-title-input").value = "";
        document.querySelector("#task-description-input").value="";
        document.querySelector("#task-due-input").value="";
        document.querySelector("#task-priority-input").value="";
        document.querySelector("#project-selection-input-1").value="";
    }

    function removeTaskfromStorage(task_number){
        localStorage.removeItem(task_number);
    }

    function deleteTask(){
        document.querySelectorAll(".closeTaskBtn").forEach(button => {
            button.addEventListener("click", event => {
                let num = button.id.split("-")[2];
                if (document.getElementById(`task-number-${num}`)){
                    document.getElementById(`task-number-${num}`).remove();
                    removeTaskfromStorage(num);
                }
            })
        })
    }

    deleteTask();

    function updateLocalStorageValues(task_number,updated_values){
        let object = JSON.parse(localStorage.getItem(`${task_number}`));
        object.title = updated_values.title;
        object.description = updated_values.description;
        object.duedate = updated_values.duedate;
        object.priority = updated_values.priority;
        object.project = updated_values.project;
        localStorage.setItem(`${task_number}`, JSON.stringify(object));
    }

    function updateTasks(){
        if (document.querySelectorAll(".updateTaskBtn")){
            document.querySelectorAll(".updateTaskBtn").forEach(button => {
                button.addEventListener("click", event => {
                    let num = button.id.split("-")[2];
                    updatevaluesTask(`task-number-${num}`);
                    showUpdateTaskContainer();
                    document.querySelector("#update-submit-task").addEventListener("click", event => {
                        if (getupdatedvaluesTask() !== false){
                            updateLocalStorageValues(num,getupdatedvaluesTask());
                            updateTaskElement(num);
                            hideUpdateTaskContainer();
                            clearError("update-task-container");
                       
                        }
                        else{
                            displayError("update-task-container");
                        }
                    })
                })
            })
        }
    }

    updateTasks();


    function updateTaskElement(task_number){
        let object = JSON.parse(localStorage.getItem(`${task_number}`));
        document.querySelector(`#task-number-${task_number}`).querySelector("#title").textContent = object.title;
        document.querySelector(`#task-number-${task_number}`).querySelector("#description").textContent=object.description;
        document.querySelector(`#task-number-${task_number}`).querySelector("#duedate").textContent=object.duedate;
        document.querySelector(`#task-number-${task_number}`).querySelector("#priority").textContent=object.priority;
    }

    function getvaluesTask(){
        let title = document.querySelector("#task-title-input").value;
        let task_description = document.querySelector("#task-description-input").value;
        let task_due = document.querySelector("#task-due-input").value;
        let task_priority = document.querySelector("#task-priority-input").value;
        let project = document.querySelector("#project-selection-input-1").value;
        return {title,task_description,task_due,task_priority,project};
    }

    function createTaskObject(){
        let values = getvaluesTask();
        let object = new tasks(values.title,values.task_description,values.task_due,values.task_priority,false,task_number,values.project);
        task_number++;
        localStorage.setItem("task_number", JSON.stringify(task_number));
        return object;
    }

    function getTaskNumber(){
        let task_number = JSON.parse(localStorage.getItem("task_number"));
        return task_number;
    }

    function showUpdateTaskContainer(){
        update_task.classList.add('show');
    }

    function hideUpdateTaskContainer(){
        update_task.classList.remove('show');
    }

    function showTaskContainer(){
        taskcontainer.classList.add('show');
    }
    
    function hideTaskContainer(){
        taskcontainer.classList.remove('show');
    }

    function displayError(id){
        document.getElementById(id).querySelector("#error-message").textContent = "Please enter all the fields";
    }

    function clearError(id){
        document.getElementById(id).querySelector("#error-message").textContent = "";
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

        document.querySelector("#update-cancel-task").addEventListener("click", event => {
            hideUpdateTaskContainer();
        });
    })();

    function showClearTasksBtn(){
        document.querySelector("#clear-tasks").classList.add('show');
    }

    function updateCheck(task_number){
        let object = JSON.parse(localStorage.getItem(`${task_number}`));
        object.check = true;
        storeinLocalStorage(object);
    }
    
    function checkifTaskDone(){
        document.querySelectorAll(".check").forEach(button => 
            button.addEventListener("click", event => {
                let num = button.id.split("-")[1];
                document.getElementById(`task-number-${num}`).style["background-color"] = "cyan";
                document.getElementById(`check-${num}`).textContent ="";
                updateCheck(num);
            }))
    }

    setTimeout(checkifTaskDone(),100);

    (function submittaskBtnClick(){
        document.querySelector("#submit-task").addEventListener("click", event => {
            if(checkTaskValues() === true){
                storeinLocalStorage(createTaskObject());
                hideTaskContainer();
                displayInbox();
                updateTasks();
                checkifTaskDone();
                showClearTasksBtn();
                clearvaluesTask();
                clearError("task-container");
                clearTasks();
            }
            else{
                displayError("task-container");
            }
        });
    })()

    showClearTasksBtn();

    return {
        updateTasks,deleteTask,getTaskNumber
    }

}





export {taskOperations};
