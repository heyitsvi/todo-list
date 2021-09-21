import {appendDisplayElement, createDisplayElement,clearTasks} from "./dom.js";
import {taskOperations} from "./tasks.js";

function getDate(){
    let date = new Date().toISOString().slice(0,10);
    return date
}

function displaytasksinToday(){
    let i = 1;
    let task_number = JSON.parse(localStorage.getItem("task_number"));
    // console.log(task_number);
    let date = getDate();
    // console.log(taskOperations().task_number);    
    document.getElementById("display-tasks").innerHTML = "";
    while(i <= task_number){
        if (localStorage.getItem(`${i}`)){
            let object = JSON.parse(localStorage.getItem(`${i}`));
            // console.log(object.duedate);
            // console.log(object.duedate == date);
            // object = object["duedate"];
            if (object.duedate == date){
                let display_element = createDisplayElement(object);
                // console.log(display_element);
                appendDisplayElement("display-tasks",display_element);
            }
        }
        i++;
    }
    taskOperations().updateTasks();
    taskOperations().deleteTask();
    // taskOperations().clearAllProjects();
    clearTasks();
}

function todayBtn(){
    document.getElementById("today-tasks").addEventListener("click", event => {
        displaytasksinToday();
        // taskOperations().updateTasks();
    })
}

export{todayBtn}